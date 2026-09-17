const express = require('express');
const router = express.Router();

// ============================================
// ROTAS DOS DADOS DA ESCOLA
// ============================================
// Estas rotas gerenciam os dados oficiais da escola.
//
// Endpoints:
//   GET    /api/escola          - Obter todos os dados
//   PUT    /api/escola/:campo   - Atualizar um campo especifico
//
// Campos disponiveis:
//   nome, sigla, inep, cie, diretoria_ensino, endereco,
//   bairro, cidade, uf, cep, telefone, email,
//   ideb, idesp, alunos_matriculados, turmas, professores_qtd
//
// TODO: Adicionar autenticacao (apenas admin pode alterar)
// TODO: Adicionar validacao de tipos de dados

const { obterDadosEscola, atualizarDado } = require('../controllers/escola.controller');

// GET /api/escola
// Retorna todos os dados da escola como objeto
// Resposta: { nome: "EEAFR", ideb: "4.0", ... }
router.get('/', obterDadosEscola);

// PUT /api/escola/:campo
// Atualiza um campo especifico da escola
// Exemplo: PUT /api/escola/ideb  Body: { valor: "4.5" }
//
// TODO: Validar que o campo existe antes de atualizar
// TODO: Validar tipo do valor (numero, texto, etc)
// TODO: Adicionar log de quem alterou e quando
router.put('/:campo', atualizarDado);

// ============================================
// TODO: ADICIONAR ROTA POST (CRIAR NOVO CAMPO)
// ============================================
// Permite adicionar um novo campo de dados da escola
// Body: { campo: "novo_campo", valor: "valor" }
// router.post('/', async (req, res, next) => { ... });

// ============================================
// TODO: ADICIONAR ROTA DELETE (REMOVER CAMPO)
// ============================================
// Remove um campo dos dados da escola
// router.delete('/:campo', async (req, res, next) => { ... });

module.exports = router;
