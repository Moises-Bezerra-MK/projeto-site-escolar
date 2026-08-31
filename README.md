# Site Institucional EEAFR

Site institucional da **Escola Estadual Antonio Francisco Redondo**, localizada na Vila Mangalot, Sao Paulo. Desenvolvido como projeto de TCC com HTML, CSS e JavaScript puros.

---

## Estrutura do Projeto

```
projeto-TCC/
├── index.html                  # Pagina inicial
├── CSS/
│   └── style.css               # Estilos completos (~3800 linhas)
├── js/
│   └── script.js               # Funcionalidades vanilla JS
├── imagens/
│   ├── LogoEscolarEEAFR01.png  # Logo da escola
│   ├── mascote_redondo_fundo_transparente02.png  # Mascote
│   └── Escola/                 # Fotos reais da escola
│       ├── Fachada1.jpeg       # Fachada principal
│       ├── Fachada2.jpeg       # Vista externa
│       ├── Fachada3.jpeg       # Vista externa
│       ├── Patio.jpeg          # Patio da escola
│       ├── Patio2.jpeg         # Patio da escola
│       ├── Corredor.jpeg       # Corredor principal
│       ├── Corredor sala 1-4.jpeg  # Corredores das salas
│       ├── Corredor perto da escada.jpeg
│       ├── Entrada Secretaria.jpeg
│       ├── Secretaria 1.jpeg
│       ├── Cozinha.jpeg
│       ├── Refeitorio.jpeg
│       ├── Cantina do tio.jpeg
│       ├── Quadra.jpeg         # Quadra de esportes
│       ├── Evento1-4.jpeg      # Fotos de eventos
│       └── WhatsApp Image*.jpeg
├── pages/
│   ├── cursos.html             # Cursos tecnicos (Abas)
│   ├── eventos.html            # Eventos e comunicados
│   ├── galeria.html            # Galeria de fotos reais
│   ├── corpo-docente.html      # Professores e equipe
│   ├── contato.html            # Contato, formulario e mapa
│   ├── secretaria-digital.html # Dados oficiais e links uteis
│   └── 404.html                # Pagina de erro
└── README.md
```

---

## Paginas do Site

| Pagina | Descricao |
|--------|-----------|
| **Inicio** | Hero com foto real da fachada, quem somos, diretoria escadinha, cursos, estatisticas, contato rapido |
| **Cursos** | Abas com Detalhes, Modulos, Habilidades e Carreira para Administracao, Vendas e Desenvolvimento de Sistemas |
| **Eventos** | Calendario de eventos, comunicados e avisos da administracao |
| **Galeria** | 12 fotos reais da estrutura da escola com legendas |
| **Corpo Docente** | Professores organizados por area (Linguagem, Exatas, Humanas, Tecnicos) |
| **Contato** | Telefone, Instagram, WhatsApp, formulario e mapa Google Maps com endereco correto |
| **Secretaria Digital** | Dados oficiais (IDEB, IDESP), gestores, infraestrutura, PDDE e links uteis |
| **404** | Pagina de erro com link para voltar ao inicio |

---

## Dados da Escola

- **Nome:** Escola Estadual Antonio Francisco Redondo
- **Sigla:** EEAFR
- **Diretoria de Ensino:** Norte 1
- **Endereco:** R. Evandro Danton Ferreira Gandra, 148 - Vila Mangalot, Sao Paulo - SP
- **CEP:** 05131-100
- **Telefone:** (11) 3904-5011
- **Instagram:** @afredondo
- **INEP:** 35000218
- **CIE:** 218

### Indicadores

| Indicador | Valor |
|-----------|-------|
| IDEB Ensino Medio | 4.0 |
| IDESP Ensino Medio | 1.98 |
| Alunos Matriculados | 704+ |
| Turmas Ativas | 18+ |
| Professores | 30+ |

### Gestores

| Cargo | Nome |
|-------|------|
| Diretora | Carla Rodrigues Ribeiro |
| Vice-Diretora | Patricia Mendes de Souza |
| Vice-Diretora | Sandra Maria Felipe |
| Coordenador | Juliana Mendes Avona |
| Coordenadora | Maria Solange Petras |

---

## Cursos Tecnicos (NOVOTEC)

| Curso | Descricao |
|-------|-----------|
| **Administracao** | Gestao empresarial, financas, recursos humanos, marketing e logistica |
| **Vendas** | Negociacao, atendimento ao cliente, e-commerce e marketing digital |
| **Desenvolvimento de Sistemas** | Programacao web e mobile, banco de dados, redes e seguranca da informacao |

---

## Funcionalidades

- Menu hamburger responsivo para celulares com overlay
- Scroll reveal (elementos aparecem ao rolar com IntersectionObserver)
- Contador animado na secao de estatisticas
- Sistema de abas na pagina de cursos
- Formulario de contato com alerta de confirmacao
- Botao voltar ao topo
- Galeria de fotos reais com legendas
- Mapa do Google Maps com localizacao da escola
- Header com efeito scrolled ao rolar

---

## Responsividade

| Breakpoint | Comportamento |
|------------|---------------|
| **Desktop** (>1024px) | Layout completo, menu horizontal, grid 3-4 colunas |
| **Tablet** (768px-1024px) | Grid 2 colunas, menu compacto |
| **Celular** (<768px) | Menu hamburger, grid 1 coluna, galeria 2 colunas |
| **Celular pequeno** (<480px) | Ajustes para telas muito pequenas |

---

## Paleta de Cores

| Cor | Uso |
|-----|-----|
| `#2f5f99` | Azul escuro (header, textos principais) |
| `#4a7fb5` | Azul medio (botoes, icones) |
| `#6aabd4` | Azul claro (destaques) |
| `#d4a843` | Dourado (botoes principais, destaque) |
| `#c9473e` | Vermelho (badges, alertas) |
| `#1f2937` | Texto principal |
| `#4b5563` | Texto secundario |
| `#f7f9fc` | Fundo das secoes |
| `#ffffff` | Fundo principal |

---

## Tecnologias

- **HTML5** - Semantico com meta tags Open Graph
- **CSS3** - Variaveis CSS, Grid, Flexbox, media queries
- **JavaScript vanilla** - IntersectionObserver API, sem bibliotecas externas
- **Google Fonts** - Inter e Poppins

---

## Como Usar

1. Abra o arquivo `projeto-TCC/index.html` no navegador
2. Navegue pelas paginas pelo menu superior
3. No celular, use o botao hamburger (3 linhas) para abrir o menu

---

## Migracao do WordPress para Codigo Estatico

Originalmente o site foi pensado em WordPress. Optou-se por reescrever em HTML/CSS/JS puros por:

- **Performance** - Carregamento em milissegundos, sem consultas a banco
- **Seguranca** - Sem backend, sem plugins, sem risco de ataques
- **Custo zero** - Hospedagem gratuita (GitHub Pages, Netlify, Vercel)
- **Manutencao simples** - Sem atualizacoes de core, temas ou plugins
- **Proposito educacional** - Demonstracao de dominio dos fundamentos web

---

## Observacoes

- As fotos sao reais da pasta `imagens/Escola/`
- O endereco no mapa e: R. Evandro Danton Ferreira Gandra, 148 - Vila Mangalot
- Os dados de IDEB/IDESP sao do Portal da Transparencia da Educacao de SP
- O site funciona sem necessidade de servidor (arquivos estaticos)
- Compativel com todos os navegadores modernos
