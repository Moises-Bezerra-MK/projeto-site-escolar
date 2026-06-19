# Site Institucional EEAFR

Site institucional da **Escola Estadual Antonio Francisco Redondo**, localizada na Vila Mangalot, São Paulo. Desenvolvido como projeto de TCC com HTML, CSS e JavaScript puros.

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
