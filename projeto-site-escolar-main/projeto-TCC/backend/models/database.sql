-- ============================================
-- SCHEMA DO BANCO DE DADOS - EEAFR
-- Banco: PostgreSQL
-- Execute: psql -U postgres -f models/database.sql
-- ============================================

CREATE DATABASE eeafr_database;

\c eeafr_database;

-- ============================================
-- TABELA: cursos
-- Status: COMPLETO - ja esta funcionando
-- ============================================
CREATE TABLE IF NOT EXISTS cursos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    duracao VARCHAR(50),
    turno VARCHAR(50),
    certificacao VARCHAR(100),
    vagas INTEGER,
    categoria VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO cursos (nome, descricao, duracao, turno, certificacao, vagas, categoria) VALUES
('Administracao', 'Formacao completa em gestao empresarial, financas, recursos humanos e marketing.', '2 Anos', 'Manha', 'MEC Reconhecido', 30, 'Gestao e Negocios'),
('Vendas', 'Tecnicas de negociacao, atendimento ao cliente, gestao de vendas e comercio eletronico.', '2 Anos', 'Manha', 'MEC Reconhecido', 30, 'Gestao e Negocios'),
('Desenvolvimento de Sistemas', 'Programacao, banco de dados, desenvolvimento web e dispositivos moveis, engenharia de software.', '2 Anos', 'Manha', 'MEC Reconhecido', 30, 'Informacao e Comunicacao');

-- ============================================
-- TABELA: eventos
-- Status: COMPLETO - ja esta funcionando
-- ============================================
CREATE TABLE IF NOT EXISTS eventos (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(200) NOT NULL,
    descricao TEXT,
    data_evento DATE,
    hora_inicio VARCHAR(20),
    local_evento VARCHAR(200),
    tipo VARCHAR(50) DEFAULT 'evento',
    destaque BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO eventos (titulo, descricao, data_evento, hora_inicio, local_evento, tipo, destaque) VALUES
('Reuniao de Pais e Mestres', 'Encontro para discutir o desenvolvimento academico dos alunos.', '2026-03-15', '19h', 'Auditorio da Escola', 'evento', FALSE),
('Dia das Maes', 'Apresentacoes culturais e homenagens preparadas pelos alunos.', '2026-05-10', '15h', 'Auditorio da Escola', 'evento', FALSE),
('Festa Junina', 'Tradicional festa junina com comidas tipicas e quadrilha.', '2026-06-05', '14h as 20h', 'Quadra da Escola', 'evento', FALSE),
('Olimpiadas de Matematica', 'Competicao interna de matematica entre os alunos.', '2026-06-20', '8h as 12h', 'Salas de aula', 'evento', FALSE),
('Encerramento do Semestre', 'Cerimonia de encerramento do primeiro semestre.', '2026-07-15', '19h', 'Auditorio da Escola', 'evento', FALSE),
('Feira de Ciencias 2026', 'Exposicao de projetos cientificos dos alunos.', '2026-04-22', '10h as 17h', 'Patio da Escola', 'evento', TRUE);

-- ============================================
-- TABELA: avisos
-- Status: COMPLETO - ja esta funcionando
-- ============================================
CREATE TABLE IF NOT EXISTS avisos (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(200) NOT NULL,
    descricao TEXT,
    tipo VARCHAR(50) DEFAULT 'informativo',
    urgente BOOLEAN DEFAULT FALSE,
    data_publicacao DATE DEFAULT CURRENT_DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO avisos (titulo, descricao, tipo, urgente, data_publicacao) VALUES
('Recolhimento de Material Escolar', 'Prazo para entrega do material estendido ate 30 de abril.', 'urgente', TRUE, '2026-03-15'),
('Mudanca de Horario das Aulas', 'Primeiro periodo iniciara as 7h30 e ultimo encerrara as 16h40.', 'importante', FALSE, '2026-03-12'),
('Inscricoes para o Estagio', 'Abertas inscricoes para programa de estagiarios da escola.', 'informativo', FALSE, '2026-03-10'),
('Regra de Uniforme', 'Uso do uniforme escolar e obrigatorio em todos os dias letivos.', 'alerta', FALSE, '2026-03-08'),
('Biblioteca - Novo Horario', 'Biblioteca funcionara das 7h30 as 17h.', 'informativo', FALSE, '2026-03-05'),
('Reuniao de Pais - 2o Bimestre', 'Reuniao realizada no dia 15 de marco, as 19h.', 'importante', FALSE, '2026-03-01');

-- ============================================
-- TABELA: comunicados
-- Status: COMPLETO - ja esta funcionando
-- ============================================
CREATE TABLE IF NOT EXISTS comunicados (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(200) NOT NULL,
    descricao TEXT,
    tag VARCHAR(50) DEFAULT 'novidade',
    data_publicacao DATE DEFAULT CURRENT_DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO comunicados (titulo, descricao, tag, data_publicacao) VALUES
('Resultados do Enem 2025', '85% dos egressos atingiram nota acima de 600 pontos na redacao.', 'resultado', '2026-03-20'),
('Professora do Ano', 'Ana Paula Rocha eleita Professora do Ano pela comunidade escolar.', 'homenagem', '2026-03-18'),
('Novo Laboratorio de Informatica', 'Inauguracao com 30 computadores novos para turmas de DS.', 'novidade', '2026-03-15'),
('Olimpiadas de Matematica - Resultado', 'Vencedores premiados em cerimonia no auditorio.', 'resultado', '2026-03-12'),
('Dia Internacional da Mulher', 'Homenagem especial no patio da escola.', 'homenagem', '2026-03-08'),
('Novo Projeto de Mentoria', 'Conexao entre ex-alunos profissionais e alunos atuais.', 'novidade', '2026-03-01');

-- ============================================
-- TABELA: galeria
-- Status: COMPLETO - ja esta funcionando
-- ============================================
CREATE TABLE IF NOT EXISTS galeria (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(200) NOT NULL,
    descricao TEXT,
    caminho_imagem VARCHAR(500) NOT NULL,
    ordem INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO galeria (titulo, descricao, caminho_imagem, ordem) VALUES
('Fachada da escola', 'Fachada principal da EEAFR', 'imagens/Escola/Fachada2.jpeg', 1),
('Patio da escola', 'Patio da escola', 'imagens/Escola/Patio.jpeg', 2),
('Corredor principal', 'Corredor principal da escola', 'imagens/Escola/Corredor.jpeg', 3),
('Entrada da secretaria', 'Entrada da secretaria', 'imagens/Escola/Entrada Secretaria.jpeg', 4),
('Refeitorio', 'Refeitorio da escola', 'imagens/Escola/Refeitorio.jpeg', 5),
('Cozinha escolar', 'Cozinha escolar', 'imagens/Escola/Cozinha.jpeg', 6),
('Cantina', 'Cantina da escola', 'imagens/Escola/Cantina do tio.jpeg', 7),
('Quadra de esportes', 'Quadra de esportes', 'imagens/Escola/Quadra.jpeg', 8),
('Secretaria', 'Secretaria da escola', 'imagens/Escola/Secretaria 1.jpeg', 9),
('Corredor perto da escada', 'Corredor perto da escada', 'imagens/Escola/Corredor perto da escada.jpeg', 10),
('Corredor das salas de aula', 'Corredor das salas de aula', 'imagens/Escola/Corredor sala 1.jpeg', 11),
('Patio da escola', 'Patio da escola', 'imagens/Escola/Patio2.jpeg', 12);

-- ============================================
-- TABELA: professores
-- Status: INCOMPLETO - voce deve completar os INSERTs
-- ============================================
CREATE TABLE IF NOT EXISTS professores (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(200) NOT NULL,
    area VARCHAR(100) NOT NULL,
    disciplina TEXT,
    sigla VARCHAR(10),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- TODO: Adicione os professores da area de LINGUAGEM
-- Dados: veja a pagina pages/corpo-docente.html
-- INSERT INTO professores (nome, area, disciplina, sigla) VALUES
-- ('Nome do Professor', 'Linguagem', 'Disciplina', 'Sigla');

-- TODO: Adicione os professores da area de EXATAS
-- INSERT INTO professores (nome, area, disciplina, sigla) VALUES
-- ('Nome do Professor', 'Exatas', 'Disciplina', 'Sigla');

-- TODO: Adicione os professores da area de HUMANAS
-- INSERT INTO professores (nome, area, disciplina, sigla) VALUES
-- ('Nome do Professor', 'Humanas', 'Disciplina', 'Sigla');

-- TODO: Adicione os professores da area de TECNICOS
-- INSERT INTO professores (nome, area, disciplina, sigla) VALUES
-- ('Nome do Professor', 'Tecnicos', 'Disciplina', 'Sigla');

-- ============================================
-- TABELA: contato_mensagens
-- Status: COMPLETO - ja esta funcionando
-- ============================================
CREATE TABLE IF NOT EXISTS contato_mensagens (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(200) NOT NULL,
    email VARCHAR(200) NOT NULL,
    assunto VARCHAR(200) NOT NULL,
    mensagem TEXT NOT NULL,
    lida BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================
-- TABELA: escola_dados
-- Status: INCOMPLETO - voce deve completar os INSERTs
-- ============================================
CREATE TABLE IF NOT EXISTS escola_dados (
    id SERIAL PRIMARY KEY,
    campo VARCHAR(100) NOT NULL UNIQUE,
    valor TEXT NOT NULL,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- TODO: Adicione os dados oficiais da escola
-- Veja a pagina pages/secretaria-digital.html para os valores
-- INSERT INTO escola_dados (campo, valor) VALUES
-- ('nome', 'Escola Estadual Antonio Francisco Redondo'),
-- ('sigla', 'EEAFR');
