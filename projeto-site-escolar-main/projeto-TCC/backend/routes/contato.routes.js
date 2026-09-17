const express = require('express');
const router = express.Router();

// ============================================
// ROTAS DE CONTATO
// ============================================
// Estas rotas gerenciam as mensagens de contato.
//
// Endpoints:
//   POST   /api/contato       - Enviar mensagem (COMPLETO)
//   GET    /api/contato       - Listar mensagens (COMPLETO)
//
// Esta rota ja esta 100% funcionando.
// Use como modelo para implementar as outras rotas.

const { enviarMensagem, listarMensagens } = require('../controllers/contato.controller');

// POST /api/contato
// Envia uma mensagem de contato
// Body esperado: { nome, email, assunto, mensagem }
// Todos os campos sao obrigatorios
//
// Resposta de sucesso (201):
// { erro: false, dados: { id, nome, email, assunto, mensagem, lida, created_at }, mensagem: "Mensagem enviada com sucesso!" }
//
// Resposta de erro (400):
// { erro: true, mensagem: "Todos os campos sao obrigatorios" }
router.post('/', enviarMensagem);

// GET /api/contato
// Lista todas as mensagens recebidas
// Ordenadas por data de criacao (mais recente primeiro)
//
// Resposta:
// { erro: false, dados: [{ id, nome, email, assunto, mensagem, lida, created_at }, ...] }
//
// TODO: Adicionar paginacao (?page=1&limit=10)
// TODO: Adicionar filtro por lida (?lida=true)
// TODO: Adicionar autenticacao (apessoal admin pode ver)
router.get('/', listarMensagens);

// ============================================
// TODO: ADICIONAR ROTA PUT PARA MARCAR COMO LIDA
// ============================================
// Marca uma mensagem como lida
// Exemplo: PUT /api/contato/1/lida
//
// router.put('/:id/lida', async (req, res, next) => {
//     try {
//         const { id } = req.params;
//         const result = await pool.query(
//             'UPDATE contato_mensagens SET lida = true WHERE id = $1 RETURNING *',
//             [id]
//         );
//         if (result.rows.length === 0) {
//             return res.status(404).json({ erro: true, mensagem: 'Mensagem nao encontrada' });
//         }
//         res.json({ erro: false, dados: result.rows[0] });
//     } catch (error) {
//         next(error);
//     }
// });

// ============================================
// TODO: ADICIONAR ROTA DELETE PARA REMOVER MENSAGEM
// ============================================
// Remove uma mensagem do banco
// router.delete('/:id', async (req, res, next) => { ... });

module.exports = router;
