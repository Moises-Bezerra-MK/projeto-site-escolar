const { pool } = require('../config/database');

// ============================================
// TODO: COMPLETAR ESTE CONTROLLER
// ============================================
// Modelo: contato.controller.js (ja esta pronto)
//
// TAREFAS:
// 1. Completar a funcao listarFotos()
//    - Tabela: galeria
//    - Ordene por ordem ASC
//
// 2. Completar a funcao criarFoto()
//    - Pegue: titulo, descricao, caminho_imagem, ordem
//    - ordem deve ter valor padrao 0
//    - Retorne 201 com a foto criada

async function listarFotos(req, res, next) {
  try {
    // TODO: buscar fotos da galeria
    // const result = await pool.query('SELECT * FROM galeria ORDER BY ordem ASC');
    // res.json({ erro: false, dados: result.rows });

    res.json({ erro: false, dados: [], mensagem: 'TODO: Implementar listagem de fotos' });
  } catch (error) {
    next(error);
  }
}

async function criarFoto(req, res, next) {
  try {
    const { titulo, descricao, caminho_imagem, ordem } = req.body;
    // TODO: inserir foto no banco
    // const result = await pool.query(
    //   'INSERT INTO galeria (titulo, descricao, caminho_imagem, ordem) VALUES ($1, $2, $3, $4) RETURNING *',
    //   [titulo, descricao, caminho_imagem, ordem || 0]
    // );
    // res.status(201).json({ erro: false, dados: result.rows[0] });

    res.json({ erro: false, dados: null, mensagem: 'TODO: Implementar criacao de foto' });
  } catch (error) {
    next(error);
  }
}

module.exports = { listarFotos, criarFoto };
