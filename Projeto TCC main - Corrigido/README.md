# Site Institucional EEAFR

Site institucional da **Escola Estadual Antonio Francisco Redondo**, localizada na Vila Mangalot, São Paulo. Desenvolvido como projeto de TCC com HTML, CSS e JavaScript puros.

---

## Tecnologias Consideradas para o Projeto

Antes de decidir pelo desenvolvimento com HTML, CSS e JavaScript puros, outras abordagens e stacks foram avaliadas. Abaixo está um comparativo das principais alternativas consideradas e os motivos pelos quais não foram escolhidas:

### Stacks Estáticas

| Tecnologia | Motivo da não escolha |
|---|---|
| **Astro** | Excelente ferramenta, mas introduz uma camada de build e conceitos de framework que fogem do propósito didático do TCC. Ideal para projetos maiores com múltiplas páginas e conteúdo dinâmico. |
| **Jekyll / Hugo** | Static site generators maduros, porém exigem conhecimento de Ruby (Jekyll) ou Go (Hugo) para personalizações mais profundas. Para um site de página única com algumas subpáginas, a complexidade não se justifica. |
| **11ty (Eleventy)** | Alternativa moderna e flexível, mas ainda assim requer configuração de template engine e build step. |
| **Gatsby / Next.js** | Frameworks React poderosos, ótimos para sites com muito conteúdo e que precisam de SSR/SSG. Para este projeto, seriam excessivos — adicionam centenas de kilobytes em dependências e uma curva de aprendizado desnecessária para o escopo. |
| **Vue.js + Nuxt** | Mesma análise do React: excelente stack, mas superdimensionada para um site institucional de 7 páginas sem interatividade complexa. |

### Frameworks CSS

| Tecnologia | Motivo da não escolha |
|---|---|
| **Tailwind CSS** | Extremamente produtivo, porém adiciona uma etapa de build e gera HTML com muitas classes utilitárias, o que dificulta a leitura e a manutenção por quem está aprendendo CSS. Preferiu-se CSS puro para consolidar os fundamentos. |
| **Bootstrap** | Framework maduro, mas seus estilos pré-definidos limitam a identidade visual. Grandes atualizações de versão podem quebrar o layout. Além disso, boa parte do CSS carregado não é utilizada. |
| **Materialize / Bulma** | Interessantes, mas compartilham do mesmo problema de inchaço e rigidez visual do Bootstrap. |

### Bibliotecas JavaScript

| Tecnologia | Motivo da não escolha |
|---|---|
| **jQuery** | Era o padrão por anos, mas hoje é considerado legado. Navegadores modernos já oferecem APIs nativas (querySelector, fetch, IntersectionObserver) que substituem tudo que o jQuery fazia — sem o peso de ~87KB. |
| **GSAP / AOS (Animate On Scroll)** | Bibliotecas de animação muito competentes, mas as animações deste projeto (scroll reveal com IntersectionObserver, parallax com CSS) foram implementadas manualmente para demonstrar o funcionamento por baixo dos panos. |
| **Alpine.js / HTMX** | Alternativas interessantes para interatividade sem pescar frameworks pesados. Seriam boas escolhas em um contexto diferente, mas fogem do objetivo de construir tudo do zero com JavaScript vanilla. |

### Backend / CMS

| Tecnologia | Motivo da não escolha |
|---|---|
| **WordPress** | Conforme detalhado na seção seguinte, foi descartado por questões de performance, segurança, custo e propósito educacional. |
| **Strapi / Ghost / Directus** | Headless CMS modernos, ótimos para gerenciamento de conteúdo. Seriam uma evolução natural caso o site precise de um painel de administração no futuro, mas para o TCC optou-se por começar sem backend. |
| **PHP puro (sem CMS)** | Viável, mas reintroduziria a necessidade de servidor com PHP e banco de dados, perdendo os benefícios da hospedagem estática gratuita. |

> **Resumo da decisão:** HTML, CSS e JavaScript puros foram escolhidos por serem a base do desenvolvimento web — qualquer framework ou biblioteca é, em última instância, construído sobre essas três tecnologias. Dominá-las primeiro garante uma compreensão sólida para aprender qualquer ferramenta futura. Além disso, a simplicidade da stack resulta em carregamento instantâneo, segurança máxima e custo de hospedagem zero.

> **Nota:** Esta lista não é exaustiva. Existem diversas outras ferramentas, bibliotecas e frameworks no mercado que também poderiam ser utilizados — como **Svelte/SvelteKit**, **Preact**, **Lit**, **Parcel**, **Vite**, **Windi CSS**, **Pure CSS**, **Milligram**, **Anime.js**, **Three.js**, **Socket.io**, **Firebase**, **Supabase**, entre muitos outros. A escolha vai depender sempre do contexto, do objetivo do projeto e da familiaridade da equipe com a tecnologia.

---

## Migração do WordPress para Código Estático

Originalmente, o site da escola foi concebido em WordPress. Durante o desenvolvimento do TCC, optou-se por reescrevê-lo completamente em HTML, CSS e JavaScript puros (sem frameworks ou CMS). Abaixo estão os motivos técnicos e pedagógicos que fundamentaram essa decisão:

### 1. Performance e Velocidade de Carregamento

Sites WordPress dependem de banco de dados MySQL e interpretação PHP a cada requisição. Mesmo com caching, a latência é inevitável. Um site estático entrega arquivos prontos — sem consultas ao banco, sem processamento server-side. Para uma escola pública cujos alunos e funcionários podem acessar de dispositivos modestos ou conexões limitadas (3G/4G), essa diferença é crítica. O resultado são páginas que carregam em milissegundos.

### 2. Segurança

WordPress é alvo constante de ataques automatizados: brute force em painéis `wp-admin`, injeção de SQL, exploração de vulnerabilidades em plugins desatualizados. Um site estático não possui banco de dados, backend, sessões de usuário ou área administrativa exposta — portanto, praticamente toda a superfície de ataque é eliminada. Não há patches de segurança para aplicar, nem risco de um plugin malicioso comprometer o site.

### 3. Custo de Infraestrutura Zero

Hospedar WordPress exige um servidor com suporte a PHP e MySQL, o que implica em custos mensais (mesmo que baixos). Um site estático pode ser hospedado gratuitamente em plataformas como **GitHub Pages**, **Netlify**, **Vercel** ou **Cloudflare Pages** — com CDN global integrada, SSL automático e suporte a deploy contínuo via Git. Para uma instituição pública com orçamento restrito, a economia é significativa.

### 4. Manutenção Simplificada

WordPress exige manutenção contínua: atualizar o core, os temas, os plugins, monitorar vulnerabilidades, fazer backups do banco de dados. Um site estático, uma vez pronto, continua funcionando indefinidamente sem intervenção. Não há dependências externas que possam quebrar com o tempo. Basta atualizar os arquivos HTML/CSS/JS e fazer o deploy.

### 5. Propósito Educacional (TCC)

Desenvolver o site do zero com HTML, CSS e JavaScript puros foi uma escolha intencional para demonstrar domínio sólido sobre os fundamentos do desenvolvimento web. Utilizar um CMS como WordPress abstrai camadas inteiras de conhecimento — temas prontos, page builders drag-and-drop, plugins que resolvem problemas complexos com poucos cliques. Construir manualmente cada componente (header responsivo com glassmorphism, animações com IntersectionObserver, parallax com CSS puro, formulário com validação customizada) evidencia compreensão real das tecnologias da web.

### 6. Controle Total sobre o Design e a Experiência

Com WordPress, o design fica limitado ao que o tema ou page builder permitem. Customizações mais profundas exigem conhecimento avançado de PHP (para criar themes filhos) ou a instalação de mais plugins, que incham o site. No código estático, cada pixel do layout foi pensado e implementado sob medida para a identidade visual da EEAFR — paleta de tons azulados escuros, tipografia Poppins, efeitos glassmorphism, parallax dividers, animações em cascata. Nada é supérfluo, nada falta.

### 7. Leveza e Acessibilidade

As páginas são enxutas, sem bibliotecas JavaScript pesadas (jQuery, Bootstrap), sem fontes iconográficas desnecessárias, sem rastreadores ou scripts de terceiros que comprometam a privacidade dos visitantes. Isso resulta em:
- **Menor consumo de dados** — essencial para planos móveis limitados
- **Acessibilidade** — navegação por teclado, HTML semântico, atributos ARIA
- **Core Web Vitals otimizados** — LCP, FID e CLS dentro dos padrões recomendados pelo Google

### 8. Versionamento e Deploy Simplificados

Todo o código-fonte vive em um repositório Git. Qualquer alteração passa por commit, revisão e deploy automatizado via GitHub Pages ou similar. Não há banco de dados para sincronizar entre ambientes de desenvolvimento e produção, nem conflitos entre versões de plugins. O histórico de alterações é completo e rastreável.

---

## Estrutura do Projeto

```
projeto-TCC/
├── index.html                # Página inicial (Home)
├── pages/                    # Páginas internas
│   ├── contato.html          # Página de contato com formulário e mapa
│   ├── corpo-docente.html    # Página do corpo docente
│   ├── cursos.html           # Página de detalhamento dos cursos
│   ├── eventos.html          # Página de calendário de eventos
│   ├── galeria.html          # Página de galeria de fotos
│   └── 404.html              # Página de erro 404
├── CSS/
│   └── style.css             # Folha de estilos completa
├── js/
│   └── script.js             # JavaScript principal
└── imagens/
    ├── LogoEscolarEEAFR01.png           # Logo da escola
    ├── mascote_redondo_fundo_transparente02.png  # Mascote
    ├── icon_telefone.png               # (não utilizado)
    ├── icon_instagram.png              # (não utilizado)
    └── icon_endereco.png               # (não utilizado)
```

## Páginas

### Home (`index.html`)
- **Hero**: Layout split com espaço para foto da fachada + texto de boas-vindas com animações de entrada
- **Quem Somos**: Grid 2 colunas com texto institucional e placeholder do mascote
- **Parallax Dividers**: Separadores visuais com efeito parallax e frases de impacto
- **Diretoria**: Cards lado a lado com foto, cargo e frase da diretora e vice-diretor
- **Cursos**: Grid 3 cards com ícones SVG, nome e descrição resumida dos cursos
- **Contato Rápido**: 4 cards com telefone, Instagram, endereço e WhatsApp

### Contato (`contato.html`)
- Informações de contato (telefone, Instagram, endereço, WhatsApp) com ícones SVG
- Mapa do Google Maps incorporado
- Formulário de contato com validação HTML5 (campos: nome, e-mail, assunto, mensagem)
- Formulário processado via JavaScript com alerta de confirmação

### Corpo Docente (`corpo-docente.html`)
- Grid de 8 professores com placeholder de foto, nome, disciplina e frase inspiradora

### Cursos (`cursos.html`)
- Detalhamento completo dos 3 cursos técnicos: Administração, Vendas e Desenvolvimento de Sistemas

### Eventos (`eventos.html`)
- Calendário com 6 eventos: Reunião de Pais, Feira de Ciências, Dia das Mães, Festa Junina, Olimpíadas de Matemática, Encerramento

### Galeria (`galeria.html`)
- Grid de 9 cards com descrições de momentos escolares (espaço reservado para fotos futuras)

### 404 (`404.html`)
- Página de erro personalizada mantendo header e footer do site

## Funcionalidades JavaScript

1. **Botão Voltar ao Topo**: Criado dinamicamente, aparece após 300px de scroll
2. **Header Scrolled**: Efeito glass mais escuro ao scrollar (50px)
3. **Formulário de Contato**: Previne envio padrão, exibe dados e mostra alerta
4. **Scroll Reveal**: Animações de entrada com IntersectionObserver (4 variações: reveal, reveal-left, reveal-right, reveal-scale), com classes de delay para efeito cascata (stagger)

## Design

- **Paleta de Cores**: Tons escuros azulados (#00171F, #00475F, #003242) com destaque em ciano (#00a8cc)
- **Tipografia**: Poppins (Google Fonts) nas variações 300 a 800
- **Efeitos**: Glassmorphism no header, parallax nos separadores, sombras e transições suaves
- **Responsividade**: Breakpoints em 1024px (tablets) e 768px (celulares)

## Como Usar

1. Abra o arquivo `projeto-TCC/index.html` em qualquer navegador moderno
2. Navegue pelas páginas usando o menu superior
3. Para deploy em produção, configure o `action` do formulário em `contato.html` com um endpoint real

## Observações

- As fotos dos professores, diretoria e fachada são placeholders (texto) — substituir por imagens reais quando disponíveis
- A galeria atualmente exibe apenas textos descritivos — ideal para adicionar fotos reais futuramente
- O formulário usa `action="#"` — necessário configurar backend ou serviço como Formspree
- Os arquivos `imagens/icon_telefone.png`, `imagens/icon_instagram.png` e `imagens/icon_endereco.png` não são utilizados no código (podem ser removidos)
- Compatível com todos os navegadores modernos (Chrome, Firefox, Edge, Safari)

## Bugs Corrigidos

Durante o desenvolvimento, os seguintes problemas foram identificados e corrigidos:

| Problema | Correção |
|---|---|
| `position: relative` ausente no `.hero` | Adicionado para o scroll indicator funcionar |
| `z-index` do botão voltar ao topo menor que o do mascote | Alterado de 998 para 1000 |
| `.hero-image img` inexistente | Removido do CSS |
| `background-attachment: fixed` sem fallback para tablet | Adicionado `scroll` no @media 1024px |
| Mascote ausente em `corpo-docente.html` e `404.html` | Adicionado |
| Classe `.foto-texto-placeholder-small` faltando no CSS | Criada com estilos de placeholder circular |
| Estilos inline espalhados nos HTMLs | Movidos para classes CSS |
| OG meta tags ausentes em páginas secundárias | Adicionadas em todas |
| Formulário sem `action`/`method` | Adicionado `action="#" method="POST"` |
| Formulário sem handler JavaScript | Adicionado listener de submit |
| IntersectionObserver sem `unobserve()` | Ativado para performance |
| Mascote dentro de `<main>` em algumas páginas | Padronizado para fora do `<main>` |
