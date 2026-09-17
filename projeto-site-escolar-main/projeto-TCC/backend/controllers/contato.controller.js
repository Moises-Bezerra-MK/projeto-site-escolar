const { pool } = require('../config/database');

// ============================================
// CONTROLLER COMPLETO - USE COMO EXEMPLO
// ============================================
// Este controller ja esta 100% funcionando.
// Estude ele e use como modelo para completar
// os outros controllers que estao incompletos.

async function enviarMensagem(req, res, next) {
  try {
    const { nome, email, assunto, mensagem } = req.body;

    if (!nome || !email || !assunto || !mensagem) {
      return res.status(400).json({ erro: true, mensagem: 'Todos os campos sao obrigatorios' });
    }

    const result = await pool.query(
      'INSERT INTO contato_mensagens (nome, email, assunto, mensagem) VALUES ($1, $2, $3, $4) RETURNING *',
      [nome, email, assunto, mensagem]
    );

    res.status(201).json({ erro: false, dados: result.rows[0], mensagem: 'Mensagem enviada com sucesso!' });
  } catch (error) {
    next(error);
  }
}

async function listarMensagens(req, res, next) {
  try {
    const result = await pool.query('SELECT * FROM contato_mensagens ORDER BY created_at DESC');
    res.json({ erro: false, dados: result.rows });
  } catch (error) {
    next(error);
  }
}

module.exports = { enviarMensagem, listarMensagens };
