const express = require('express');
const router = express.Router();

// ============================================
// ROTAS DE EVENTOS
// ============================================
// Estas rotas gerenciam os eventos da escola.
//
// Endpoints:
//   GET    /api/eventos       - Listar eventos (filtro opcional)
//   POST   /api/eventos       - Criar um novo evento
//
// Filtros Disponiveis (query params):
//   ?tipo=evento     - Apenas eventos
//   ?tipo=aviso      - Apenas avisos
//   ?tipo=comunicado - Apenas comunicados
//
// TODO: Adicionar paginacao (limit e offset)
// TODO: Adicionar filtro por data (data_inicio e data_fim)

const { listarEventos, criarEvento } = require('../controllers/eventos.controller');

// GET /api/eventos
// Lista todos os eventos
// Exemplos:
//   GET /api/eventos              - Todos os eventos
//   GET /api/eventos?tipo=evento  - Apenas eventos
//   GET /api/eventos?tipo=aviso   - Apenas avisos
router.get('/', listarEventos);

// POST /api/eventos
// Cria um novo evento
// Body esperado: { titulo, descricao, data_evento, hora_inicio, local_evento, tipo, destaque }
//
// Campos obrigatorios: titulo
// Campos opcionais: descricao, data_evento, hora_inicio, local_evento
// Valores padrao: tipo='evento', destaque=false
//
// TODO: Validar formato da data (AAAA-MM-DD)
// TODO: Validar que data_evento e no futuro
router.post('/', criarEvento);

// ============================================
// TODO: ADICIONAR ROTA GET POR ID
// ============================================
// router.get('/:id', async (req, res, next) => {
//     try {
//         const { id } = req.params;
//         const result = await pool.query('SELECT * FROM eventos WHERE id = $1', [id]);
//         if (result.rows.length === 0) {
//             return res.status(404).json({ erro: true, mensagem: 'Evento nao encontrado' });
//         }
//         res.json({ erro: false, dados: result.rows[0] });
//     } catch (error) {
//         next(error);
//     }
// });

// ============================================
// TODO: ADICIONAR ROTA PUT (ATUALIZAR)
// ============================================
// router.put('/:id', async (req, res, next) => { ... });

// ============================================
// TODO: ADICIONAR ROTA DELETE (REMOVER)
// ============================================
// router.delete('/:id', async (req, res, next) => { ... });

module.exports = router;
