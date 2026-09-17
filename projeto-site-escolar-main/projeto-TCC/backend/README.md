# Backend EEAFR - API REST

Backend do site institucional da EEAFR (Escola Estadual Antonio Francisco Redondo) com Node.js, Express e PostgreSQL.

---

## Status Geral do Projeto

| Arquivo | Status | O que falta fazer |
|---------|--------|-------------------|
| `contato.controller.js` | COMPLETO | Nada - use como modelo |
| `cursos.controller.js` | INCOMPLETO | Descomentar e implementar 3 funcoes |
| `eventos.controller.js` | INCOMPLETO | Descomentar e implementar 2 funcoes |
| `galeria.controller.js` | INCOMPLETO | Descomentar e implementar 2 funcoes |
| `corpo-docente.controller.js` | INCOMPLETO | Descomentar e implementar 2 funcoes |
| `escola.controller.js` | INCOMPLETO | Descomentar e implementar 2 funcoes |
| `cursos.routes.js` | INCOMPLETO | Adicionar rotas PUT e DELETE |
| `eventos.routes.js` | INCOMPLETO | Adicionar rotas GET/:id, PUT, DELETE |
| `galeria.routes.js` | INCOMPLETO | Adicionar upload de imagens, PUT, DELETE |
| `corpo-docente.routes.js` | INCOMPLETO | Adicionar GET/:id, PUT, DELETE |
| `escola.routes.js` | INCOMPLETO | Adicionar POST e DELETE |
| `contato.routes.js` | INCOMPLETO | Adicionar PUT para marcar como lida, DELETE |
| `database.js` | INCOMPLETO | Adicionar SSL, retry, query com log, transacao |
| `errorHandler.js` | INCOMPLETO | Tratar erros PostgreSQL, validacao, autenticacao |
| `database.sql` | INCOMPLETO | Completar INSERTs de professores e escola_dados |
| `server.js` | INCOMPLETO | Descomentar middleware de rota 404 |
| `script.js` | INCOMPLETO | Implementar funcoes para carregar dados do backend |
| `package.json` | COMPLETO | Scripts adicionados |

---

## O que ja esta pronto (COMPLETO)

### 1. Controller de Contato (`contato.controller.js`)
Este e o modelo para todos os outros controllers. Ele ja:
- Envia mensagens para o banco (`POST /api/contato`)
- Lista mensagens recebidas (`GET /api/contato`)
- Valida campos obrigatorios
- Retorna erros padronizados

**Estude este arquivo** antes de implementar os outros.

### 2. Estrutura Base
- Pastas organizadas (config, routes, controllers, middleware, models)
- Conexao com PostgreSQL configurada
- Rotas mapeadas para todos os endpoints
- Middleware de erros basico funcionando
- Variaveis de ambiente configuradas

---

## O que voce precisa completar

### PASSO 1: Controllers (logica dos endpoints)

Cada controller esta com codigo comentado. Voce so precisa **descomentar** e **testar**.

#### cursos.controller.js
```javascript
// Funcao: listarCursos
// O que fazer: Descomentar as linhas que usam pool.query
// Tabela: cursos
// Retorno: { erro: false, dados: [...] }

// Funcao: obterCurso
// O que fazer: Descomentar as linhas que buscam por ID
// Tabela: cursos WHERE id = $1
// Retorno: { erro: false, dados: { id, nome, ... } }

// Funcao: criarCurso
// O que fazer: Descomentar as linhas que inserem dados
// Tabela: cursos
// Retorno: 201 com o curso criado
```

#### eventos.controller.js
```javascript
// Funcao: listarEventos
// O que fazer: Descomentar e implementar filtro por tipo
// Query param: ?tipo=evento
// Tabela: eventos

// Funcao: criarEvento
// O que fazer: Descomentar as linhas de INSERT
// Valores padrao: tipo='evento', destaque=false
```

#### galeria.controller.js
```javascript
// Funcao: listarFotos
// O que fazer: Descomentar e ordenar por ordem ASC
// Tabela: galeria

// Funcao: criarFoto
// O que fazer: Descomentar as linhas de INSERT
// Valores padrao: ordem=0
```

#### corpo-docente.controller.js
```javascript
// Funcao: listarProfessores
// O que fazer: Descomentar e implementar filtro por area
// Areas: Linguagem, Exatas, Humanas, Tecnicos
// Tabela: professores

// Funcao: criarProfessor
// O que fazer: Descomentar as linhas de INSERT
```

#### escola.controller.js
```javascript
// Funcao: obterDadosEscola
// O que fazer: Descomentar e montar objeto { campo: valor }
// Tabela: escola_dados
// Retorno: { nome: "EEAFR", ideb: "4.0", ... }

// Funcao: atualizarDado
// O que fazer: Descomentar e implementar UPDATE
// Params: req.params.campo, req.body.valor
```

### PASSO 2: Banco de Dados

#### Completar INSERTs no database.sql

**Tabela professores** - Adicione os dados da pagina `pages/corpo-docente.html`:
```sql
INSERT INTO professores (nome, area, disciplina, sigla) VALUES
('Maria Aparecida Cruz de Araujo', 'Linguagem', 'Lingua Inglesa e Redacao', 'MA'),
('Sandra Regina Toso de Campos', 'Linguagem', 'Lingua Portuguesa', 'SC'),
('Thais Santos Meira Ferreira', 'Linguagem', 'Lingua Portuguesa, Redacao e Leitura', 'TF'),
('Debora da Silva Dalonso', 'Exatas', 'Fisica, Matematica, Ed. Financeira', 'DD'),
('Diemes de Oliveira', 'Exatas', 'Biologia', 'DO'),
('Rosangela Brasil de Souza Gallo', 'Exatas', 'Matematica e Educacao Financeira', 'RG'),
('Marcos Ferreira de Souza', 'Humanas', 'Geografia', 'MS'),
('Nodil Andrade Pereira', 'Humanas', 'Geografia', 'ND'),
('Rodrigo Gago Machado de Oliveira', 'Humanas', 'Educacao Fisica', 'RO'),
('Valeria Fernandes da Mota', 'Humanas', 'Historia e Sociologia', 'VM'),
('Anderson Bastos do Carmo', 'Tecnicos', 'Analise e Desenvolvimento de Sistemas', 'AB'),
('Andre Luis Mendes', 'Tecnicos', 'Desenvolvimento de Sistemas e IA', 'AL'),
('Gabriel Moreira Monteiro da Silva', 'Tecnicos', 'Programacao, Banco de Dados, Redes', 'GS'),
('Rafael Assis de Araujo', 'Tecnicos', 'Desenvolvimento de Sistemas, Coordenador', 'RA'),
('Kelliane de Jesus Nascimento', 'Tecnicos', 'Vendas, Matematica Aplicada', 'KN');
```

**Tabela escola_dados** - Adicione os dados da pagina `pages/secretaria-digital.html`:
```sql
INSERT INTO escola_dados (campo, valor) VALUES
('nome', 'Escola Estadual Antonio Francisco Redondo'),
('sigla', 'EEAFR'),
('inep', '35000218'),
('cie', '218'),
('diretoria_ensino', 'Norte 1'),
('endereco', 'R. Evandro Danton Ferreira Gandra, 148'),
('bairro', 'Vila Mangalot'),
('cidade', 'Sao Paulo'),
('uf', 'SP'),
('cep', '05131-100'),
('telefone', '(11) 3904-5011'),
('email', 'e000218a@educacao.sp.gov.br'),
('ideb', '4.0'),
('idesp', '1.98'),
('alunos_matriculados', '704'),
('turmas', '18'),
('professores_qtd', '30+');
```

### PASSO 3: Rotas (endpoints HTTP)

Cada rota tem comentarios com codigo para descomentar.

| Rota | O que falta |
|------|-------------|
| `cursos.routes.js` | Adicionar PUT (atualizar) e DELETE (remover) |
| `eventos.routes.js` | Adicionar GET/:id, PUT, DELETE |
| `galeria.routes.js` | Adicionar upload de imagens com multer, PUT, DELETE |
| `corpo-docente.routes.js` | Adicionar GET/:id, PUT, DELETE |
| `escola.routes.js` | Adicionar POST (criar campo), DELETE |
| `contato.routes.js` | Adicionar PUT para marcar como lida, DELETE |

### PASSO 4: database.js

Adicione as funcionalidades comentadas:

1. **Query com log** - Descomentar a funcao `query()` para logar queries
2. **Transacao** - Descomentar a funcao `transaction()` para operacoes atomicas
3. **SSL** - Adicionar configuracao SSL para producao
4. **Retry** - Adicionar logica de tentar novamente em caso de falha

### PASSO 5: errorHandler.js

Trate erros especificos do PostgreSQL:

1. **23505** - unique_violation (registro duplicado)
2. **23503** - foreign_key_violacao (chave estrangeira)
3. **23502** - not_null_violation (campo obrigatorio)

### PASSO 6: server.js

Descomente o middleware de rota 404:
```javascript
app.use((req, res) => {
    res.status(404).json({ erro: true, mensagem: 'Rota nao encontrada' });
});
```

### PASSO 7: Frontend (script.js)

Implemente as funcoes para carregar dados do backend:

| Funcao | O que fazer |
|--------|-------------|
| `carregarCursos()` | Buscar `/api/cursos` e preencher abas |
| `carregarEventos()` | Buscar `/api/eventos` e preencher listas |
| `carregarGaleria()` | Buscar `/api/galeria` e montar galeria |
| `carregarProfessores()` | Buscar `/api/professores` e preencher por area |
| `carregarDadosEscola()` | Buscar `/api/escola` e preencher cards |

---

## Estrutura de Pastas

```
backend/
├── package.json              # COMPLETO
├── .env                      # COMPLETO (altere a senha)
├── .env.example              # COMPLETO
├── .gitignore                # COMPLETO
├── README.md                 # Este arquivo
├── server.js                 # INCOMPLETO - descomentar 404
├── config/
│   └── database.js           # INCOMPLETO - adicionar log, transacao, SSL
├── middleware/
│   └── errorHandler.js       # INCOMPLETO - tratar erros PostgreSQL
├── models/
│   └── database.sql          # INCOMPLETO - completar INSERTs
├── routes/
│   ├── index.js              # COMPLETO
│   ├── contato.routes.js     # INCOMPLETO - adicionar PUT, DELETE
│   ├── cursos.routes.js      # INCOMPLETO - adicionar PUT, DELETE
│   ├── eventos.routes.js     # INCOMPLETO - adicionar GET/:id, PUT, DELETE
│   ├── galeria.routes.js     # INCOMPLETO - adicionar upload, PUT, DELETE
│   ├── corpo-docente.routes.js # INCOMPLETO - adicionar GET/:id, PUT, DELETE
│   └── escola.routes.js      # INCOMPLETO - adicionar POST, DELETE
└── controllers/
    ├── contato.controller.js      # COMPLETO - modelo
    ├── cursos.controller.js       # INCOMPLETO - descomentar
    ├── eventos.controller.js      # INCOMPLETO - descomentar
    ├── galeria.controller.js      # INCOMPLETO - descomentar
    ├── corpo-docente.controller.js # INCOMPLETO - descomentar
    └── escola.controller.js       # INCOMPLETO - descomentar
```

---

## O que precisa baixar e instalar

### 1. Node.js (v18 ou superior)
- Baixe em: https://nodejs.org
- Escolha a versao LTS
- Instale e reinicie o computador
- Verifique: `node -v` e `npm -v`

### 2. PostgreSQL (v14 ou superior)
- Baixe em: https://www.postgresql.org/download/windows/
- Durante a instalacao, defina a senha do usuario `postgres`
- O padrao de porta e `5432`
- Verifique: abra o pgAdmin ou rode `psql -U postgres`

### 3. Dependencias do Node.js
```bash
cd backend
npm install
```

---

## Como rodar

### 1. Criar o banco de dados
```bash
# Opcao 1: Usar o psql
psql -U postgres -f models/database.sql

# Opcao 2: Abrir o pgAdmin e executar o arquivo
```

### 2. Configurar o .env
- Copie `.env.example` para `.env`
- Altere `DB_PASSWORD` para a senha do PostgreSQL

### 3. Iniciar o servidor
```bash
npm run dev    # Desenvolvimento (com auto-reload)
npm start      # Producao
```

O servidor estara rodando em `http://localhost:3000`

---

## API Endpoints

### COMPLETOS (ja funcionam)

| Metodo | Rota | Descricao |
|--------|------|-----------|
| `GET` | `/api/health` | Status da API |
| `POST` | `/api/contato` | Enviar mensagem de contato |
| `GET` | `/api/contato` | Listar mensagens recebidas |

### INCOMPLETOS (precisam ser implementados)

| Metodo | Rota | Descricao | O que fazer |
|--------|------|-----------|-------------|
| `GET` | `/api/cursos` | Listar cursos | Descomentar controller |
| `GET` | `/api/cursos/:id` | Curso por ID | Descomentar controller |
| `POST` | `/api/cursos` | Criar curso | Descomentar controller |
| `PUT` | `/api/cursos/:id` | Atualizar curso | Implementar rota |
| `DELETE` | `/api/cursos/:id` | Remover curso | Implementar rota |
| `GET` | `/api/eventos` | Listar eventos | Descomentar controller |
| `POST` | `/api/eventos` | Criar evento | Descomentar controller |
| `GET` | `/api/eventos/:id` | Evento por ID | Implementar rota |
| `PUT` | `/api/eventos/:id` | Atualizar evento | Implementar rota |
| `DELETE` | `/api/eventos/:id` | Remover evento | Implementar rota |
| `GET` | `/api/galeria` | Listar fotos | Descomentar controller |
| `POST` | `/api/galeria` | Adicionar foto | Descomentar controller |
| `PUT` | `/api/galeria/:id` | Atualizar foto | Implementar rota |
| `DELETE` | `/api/galeria/:id` | Remover foto | Implementar rota |
| `GET` | `/api/professores` | Listar professores | Descomentar controller |
| `POST` | `/api/professores` | Adicionar professor | Descomentar controller |
| `GET` | `/api/professores/:id` | Professor por ID | Implementar rota |
| `PUT` | `/api/professores/:id` | Atualizar professor | Implementar rota |
| `DELETE` | `/api/professores/:id` | Remover professor | Implementar rota |
| `GET` | `/api/escola` | Dados da escola | Descomentar controller |
| `PUT` | `/api/escola/:campo` | Atualizar dado | Descomentar controller |
| `POST` | `/api/escola` | Criar campo | Implementar rota |
| `DELETE` | `/api/escola/:campo` | Remover campo | Implementar rota |
| `PUT` | `/api/contato/:id/lida` | Marcar como lida | Implementar rota |
| `DELETE` | `/api/contato/:id` | Remover mensagem | Implementar rota |

---

## Tabelas do Banco

| Tabela | Status | INSERTs |
|--------|--------|---------|
| `cursos` | CRIADA | COMPLETO |
| `eventos` | CRIADA | COMPLETO |
| `avisos` | CRIADA | COMPLETO |
| `comunicados` | CRIADA | COMPLETO |
| `galeria` | CRIADA | COMPLETO |
| `professores` | CRIADA | INCOMPLETO |
| `contato_mensagens` | CRIADA | N/A |
| `escola_dados` | CRIADA | INCOMPLETO |

---

## Tecnologias

- **Node.js** - Runtime JavaScript
- **Express** - Framework web
- **pg** - Driver PostgreSQL
- **dotenv** - Variaveis de ambiente
- **cors** - Cross-origin resource sharing
- **nodemon** - Auto-reload (dev)

---

## Dicas de Implementacao

### Como descomentar um controller
1. Abra o arquivo do controller (ex: `cursos.controller.js`)
2. Procure as linhas com `//` antes do codigo
3. Delete os `//` para descomentar
4. Teste com: `curl http://localhost:3000/api/cursos`

### Como adicionar uma nova rota
1. Abra o arquivo de rota (ex: `cursos.routes.js`)
2. Descomente o codigo da rota (PUT, DELETE, etc)
3. O controller ja deve ter a funcao implementada
4. Teste com: `curl -X PUT http://localhost:3000/api/cursos/1`

### Como testar a API
```bash
# Listar cursos
curl http://localhost:3000/api/cursos

# Criar curso
curl -X POST http://localhost:3000/api/cursos \
  -H "Content-Type: application/json" \
  -d '{"nome":"Teste","descricao":"Descricao","duracao":"2 Anos","turno":"Manha","certificacao":"MEC","vagas":30,"categoria":"Teste"}'

# Enviar mensagem de contato
curl -X POST http://localhost:3000/api/contato \
  -H "Content-Type: application/json" \
  -d '{"nome":"Teste","email":"teste@teste.com","assunto":"Teste","mensagem":"Mensagem de teste"}'
```
