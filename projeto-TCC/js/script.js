/*
 * ====================================================================
 *  SCRIPT PRINCIPAL - Site EEAFR
 *  Funcionalidades:
 *    1. Botão "Voltar ao Topo" (criado dinamicamente)
 *    2. Efeito de header "scrolled" ao descer a página
 *    3. Formulário de contato (validação + alerta)
 *    4. Animações de scroll reveal via IntersectionObserver
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
});
