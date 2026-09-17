const express = require('express');
const router = express.Router();

// ============================================
// ROTAS DO CORPO DOCENTE
// ============================================
// Estas rotas gerenciam os professores da escola.
//
// Endpoints:
//   GET    /api/professores       - Listar professores (filtro opcional)
//   POST   /api/professores       - Adicionar um novo professor
//
// Filtros Disponiveis (query params):
//   ?area=Linguagem    - Professores de Linguagem e Comunicacao
//   ?area=Exatas       - Professores de Ciencias Exatas
//   ?area=Humanas      - Professores de Ciencias Humanas
//   ?area=Tecnicos     - Professores dos cursos tecnicos
//
// TODO: Adicionar busca por nome (?nome=Maria)
// TODO: Adicionar busca por disciplina (?disciplina=Matematica)

const { listarProfessores, criarProfessor } = require('../controllers/corpo-docente.controller');

// GET /api/professores
// Lista todos os professores
// Exemplos:
//   GET /api/professores                - Todos
//   GET /api/professores?area=Exatas    - Apenas Exatas
//   GET /api/professores?area=Linguagem - Apenas Linguagem
router.get('/', listarProfessores);

// POST /api/professores
// Adiciona um novo professor
// Body esperado: { nome, area, disciplina, sigla }
//
// Campos obrigatorios: nome, area
// Area deve ser uma das: Linguagem, Exatas, Humanas, Tecnicos
//
// TODO: Validar que area e uma das opcoes validas
// TODO: Verificar se ja existe professor com a mesma sigla
router.post('/', criarProfessor);

// ============================================
// TODO: ADICIONAR ROTA GET POR ID
// ============================================
// router.get('/:id', async (req, res, next) => { ... });

// ============================================
// TODO: ADICIONAR ROTA PUT (ATUALIZAR)
// ============================================
// router.put('/:id', async (req, res, next) => { ... });

// ============================================
// TODO: ADICIONAR ROTA DELETE (REMOVER)
// ============================================
// router.delete('/:id', async (req, res, next) => { ... });

module.exports = router;
