const express = require('express');
const router = express.Router();

// ============================================
// ROTAS DE CURSOS
// ============================================
// Estas rotas gerenciam os cursos tecnicos da escola.
//
// Endpoints:
//   GET    /api/cursos       - Listar todos os cursos
//   GET    /api/cursos/:id   - Obter um curso por ID
//   POST   /api/cursos       - Criar um novo curso
//
// TODO: Adicionar validacao nos dados de entrada
// TODO: Adicionar middleware de autenticacao para POST/PUT/DELETE

const { listarCursos, obterCurso, criarCurso } = require('../controllers/cursos.controller');

// GET /api/cursos
// Lista todos os cursos do banco
// Query params opcionais: ?categoria=Gestao e Negocios
router.get('/', listarCursos);

// GET /api/cursos/:id
// Busca um curso especifico pelo ID
// Exemplo: GET /api/cursos/1
router.get('/:id', obterCurso);

// POST /api/cursos
// Cria um novo curso no banco
// Body esperado: { nome, descricao, duracao, turno, certificacao, vagas, categoria }
//
// TODO: Validar campos obrigatorios antes de criar
// TODO: Verificar se ja existe curso com o mesmo nome
router.post('/', criarCurso);

// ============================================
// TODO: ADICIONAR ROTA DE ATUALIZACAO (PUT)
// ============================================
// Rota para atualizar um curso existente
// Exemplo de implementacao:
//
// router.put('/:id', async (req, res, next) => {
//     try {
//         const { id } = req.params;
//         const { nome, descricao, duracao, turno, certificacao, vagas, categoria } = req.body;
//         const result = await pool.query(
//             'UPDATE cursos SET nome=$1, descricao=$2, duracao=$3, turno=$4, certificacao=$5, vagas=$6, categoria=$7, updated_at=CURRENT_TIMESTAMP WHERE id=$8 RETURNING *',
//             [nome, descricao, duracao, turno, certificacao, vagas, categoria, id]
//         );
//         if (result.rows.length === 0) {
//             return res.status(404).json({ erro: true, mensagem: 'Curso nao encontrado' });
//         }
//         res.json({ erro: false, dados: result.rows[0] });
//     } catch (error) {
//         next(error);
//     }
// });

// ============================================
// TODO: ADICIONAR ROTA DE EXCLUSAO (DELETE)
// ============================================
// Rota para deletar um curso
// Exemplo de implementacao:
//
// router.delete('/:id', async (req, res, next) => {
//     try {
//         const { id } = req.params;
//         const result = await pool.query('DELETE FROM cursos WHERE id = $1 RETURNING *', [id]);
//         if (result.rows.length === 0) {
//             return res.status(404).json({ erro: true, mensagem: 'Curso nao encontrado' });
//         }
//         res.json({ erro: false, mensagem: 'Curso removido com sucesso' });
//     } catch (error) {
//         next(error);
//     }
// });

module.exports = router;
