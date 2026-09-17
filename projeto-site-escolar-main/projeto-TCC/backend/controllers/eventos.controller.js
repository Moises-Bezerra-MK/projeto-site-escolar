const { pool } = require('../config/database');

// ============================================
// TODO: COMPLETAR ESTE CONTROLLER
// ============================================
// Modelo: contato.controller.js (ja esta pronto)
//
// TAREFAS:
// 1. Completar a funcao listarEventos()
//    - Tabela: eventos
//    - Aceite um filtro opcional por tipo (query param ?tipo=evento)
//    - Retorne os eventos ordenados por data_evento
//
// 2. Completar a funcao criarEvento()
//    - Pegue: titulo, descricao, data_evento, hora_inicio, local_evento, tipo, destaque
//    - tipo deve ter valor padrao 'evento'
//    - destaque deve ter valor padrao FALSE
//    - Retorne 201 com o evento criado

async function listarEventos(req, res, next) {
  try {
    const { tipo } = req.query;
    // TODO: buscar eventos com filtro opcional
    // let query = 'SELECT * FROM eventos';
    // let params = [];
    // if (tipo) {
    //   query += ' WHERE tipo = $1';
    //   params.push(tipo);
    // }
    // query += ' ORDER BY data_evento ASC';
    // const result = await pool.query(query, params);
    // res.json({ erro: false, dados: result.rows });

    res.json({ erro: false, dados: [], mensagem: 'TODO: Implementar listagem de eventos' });
  } catch (error) {
    next(error);
  }
}

async function criarEvento(req, res, next) {
  try {
    const { titulo, descricao, data_evento, hora_inicio, local_evento, tipo, destaque } = req.body;
    // TODO: inserir evento no banco
    // const result = await pool.query(
    //   'INSERT INTO eventos (titulo, descricao, data_evento, hora_inicio, local_evento, tipo, destaque) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
    //   [titulo, descricao, data_evento, hora_inicio, local_evento, tipo || 'evento', destaque || false]
    // );
    // res.status(201).json({ erro: false, dados: result.rows[0] });

    res.json({ erro: false, dados: null, mensagem: 'TODO: Implementar criacao de evento' });
  } catch (error) {
    next(error);
  }
}

module.exports = { listarEventos, criarEvento };
