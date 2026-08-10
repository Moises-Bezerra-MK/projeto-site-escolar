/*
 * ====================================================================
 *  SCRIPT PRINCIPAL - Site EEAFR
 *  Funcionalidades:
 *    1. Botão "Voltar ao Topo" (criado dinamicamente)
 *    2. Efeito de header "scrolled" ao descer a página
 *    3. Formulário de contato (validação + alerta)
 *    4. Animações de scroll reveal via IntersectionObserver
 *    5. Contador animado para seção de estatísticas
 *    6. Menu hamburger para dispositivos móveis
 * ====================================================================
 */
document.addEventListener("DOMContentLoaded", () => {

    // ================================================================
    // 1. BOTÃO VOLTAR AO TOPO
    //    Criado via JS e adicionado ao final do body
    //    Aparece quando o scroll ultrapassa 300px
    // ================================================================
    const backToTopBtn = document.createElement("button");
    backToTopBtn.id = "backToTopBtn";
    backToTopBtn.innerHTML = "↑";
    backToTopBtn.setAttribute("aria-label", "Voltar ao topo da página");
    document.body.appendChild(backToTopBtn);

    // Ao clicar, rola suavemente para o topo
    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // ================================================================
    // 2. REFERÊNCIA AO HEADER
    //    Usado para adicionar/remover classe .scrolled
    // ================================================================
    const header = document.querySelector("header");

    // ================================================================
    // 3. LISTENER DE SCROLL
    //    Controla:
    //      - Visibilidade do botão voltar ao topo
    //      - Classe .scrolled no header (efeito glass mais escuro)
    // ================================================================
    window.addEventListener("scroll", () => {
        // Botão back-to-top: mostra se scroll > 300px
        if (window.scrollY > 300) {
            backToTopBtn.classList.add("show");
        } else {
            backToTopBtn.classList.remove("show");
        }
        // Header: adiciona .scrolled se scroll > 50px
        if (header) {
            if (window.scrollY > 50) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        }
    });

    // ================================================================
    // 4. FORMULÁRIO DE CONTATO
    //    Previne envio padrão, exibe dados no console e mostra alerta
    //    action="#" definido no HTML (substituir por endpoint real)
    // ================================================================
    const form = document.querySelector(".contato-form form");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            console.log("Mensagem enviada:", data);
            alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
            form.reset();
        });
    }

    // ================================================================
    // 5. SCROLL REVEAL - Intersection Observer
    //    Monitora elementos com classes .reveal, .reveal-left,
    //    .reveal-right, .reveal-scale e adiciona .active
    //    quando entram na viewport (threshold 15%)
    // ================================================================
    const revealElements = document.querySelectorAll(
        ".reveal, .reveal-left, .reveal-right, .reveal-scale"
    );

    if (revealElements.length > 0) {
        const revealObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                        // Para de observar após revelar (otimização)
                        revealObserver.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.15,              // 15% visível ativa
                rootMargin: "0px 0px -50px 0px", // Margem negativa no fundo
            }
        );

        revealElements.forEach((el) => {
            revealObserver.observe(el);
        });
    }

    // ================================================================
    // 6. CONTADOR ANIMADO - Seção de Estatísticas
    //    Anima os números de 0 até o valor final quando a seção
    //    entra na viewport. Usa easing suave.
    // ================================================================
    const statNumbers = document.querySelectorAll(".stat-number[data-target]");

    if (statNumbers.length > 0) {
        const counterObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const el = entry.target;
                        const target = parseFloat(el.getAttribute("data-target"));
                        const isDecimal = el.hasAttribute("data-decimal");
                        const duration = 2000;
                        const startTime = performance.now();

                        function updateCounter(currentTime) {
                            const elapsed = currentTime - startTime;
                            const progress = Math.min(elapsed / duration, 1);
                            const eased = 1 - Math.pow(1 - progress, 3);
                            const current = eased * target;

                            if (isDecimal) {
                                el.textContent = current.toFixed(1);
                            } else if (target >= 1000) {
                                el.textContent = Math.floor(current).toLocaleString("pt-BR") + "+";
                            } else {
                                el.textContent = Math.floor(current) + "+";
                            }

                            if (progress < 1) {
                                requestAnimationFrame(updateCounter);
                            }
                        }

                        requestAnimationFrame(updateCounter);
                        counterObserver.unobserve(el);
                    }
                });
            },
            {
                threshold: 0.5,
            }
        );

        statNumbers.forEach((num) => {
            counterObserver.observe(num);
        });
    }

    // ================================================================
    // 7. MENU HAMBURGER - Dispositivos Móveis
    //    Alterna a classe .active no botão e no nav
    //    Fecha o menu ao clicar em um link
    // ================================================================
    const menuToggle = document.querySelector(".mobile-menu-toggle");
    const navMenu = document.querySelector("nav");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            menuToggle.classList.toggle("active");
            navMenu.classList.toggle("active");
        });

        // Fecha o menu ao clicar em um link de navegação
        const navLinks = navMenu.querySelectorAll("a");
        navLinks.forEach((link) => {
            link.addEventListener("click", () => {
                menuToggle.classList.remove("active");
                navMenu.classList.remove("active");
            });
        });

        // Fecha o menu ao clicar fora dele
        document.addEventListener("click", (e) => {
            if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
                menuToggle.classList.remove("active");
                navMenu.classList.remove("active");
            }
        });
    }

    // ================================================================
    // 8. SISTEMA DE ABAS - Pagina de Cursos
    //    Alterna entre abas clicando nos botoes
    // ================================================================
    const tabBtns = document.querySelectorAll(".tab-btn");
    const tabPanels = document.querySelectorAll(".tab-panel");

    if (tabBtns.length > 0) {
        tabBtns.forEach((btn) => {
            btn.addEventListener("click", () => {
                const targetTab = btn.getAttribute("data-tab");

                // Remove active de todos os botoes
                tabBtns.forEach((b) => b.classList.remove("active"));
                // Remove active de todos os paineis
                tabPanels.forEach((p) => p.classList.remove("active"));

                // Adiciona active no botao clicado
                btn.classList.add("active");
                // Adiciona active no painel correspondente
                const targetPanel = document.getElementById("tab-" + targetTab);
                if (targetPanel) {
                    targetPanel.classList.add("active");
                }
            });
        });
    }
});
