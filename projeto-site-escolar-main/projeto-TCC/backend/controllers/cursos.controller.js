const { pool } = require('../config/database');

// ============================================
// TODO: COMPLETAR ESTE CONTROLLER
// ============================================
// Modelo: contato.controller.js (ja esta pronto)
//
// TAREFAS:
// 1. Completar a funcao listarCursos()
//    - Use pool.query para buscar todos os cursos
//    - Tabela: cursos
//    - Retorne: { erro: false, dados: result.rows }
//
// 2. Completar a funcao obterCurso()
//    - Use pool.query com WHERE id = $1
//    - Se nao encontrar, retorne 404
//
// 3. Completar a funcao criarCurso()
//    - Pegue os dados do req.body
//    - Use pool.query com INSERT INTO
//    - Retorne 201 com o curso criado
//
// DICA: Copie a logica do contato.controller.js e adapte

async function listarCursos(req, res, next) {
  try {
    // TODO: buscar todos os cursos do banco
    // const result = await pool.query('SELECT * FROM cursos ORDER BY id');
    // res.json({ erro: false, dados: result.rows });

    res.json({ erro: false, dados: [], mensagem: 'TODO: Implementar listagem de cursos' });
  } catch (error) {
    next(error);
  }
}

async function obterCurso(req, res, next) {
  try {
    const { id } = req.params;
    // TODO: buscar curso por ID
    // const result = await pool.query('SELECT * FROM cursos WHERE id = $1', [id]);
    // if (result.rows.length === 0) {
    //   return res.status(404).json({ erro: true, mensagem: 'Curso nao encontrado' });
    // }
    // res.json({ erro: false, dados: result.rows[0] });

    res.json({ erro: false, dados: null, mensagem: 'TODO: Implementar busca de curso por ID' });
  } catch (error) {
    next(error);
  }
}

async function criarCurso(req, res, next) {
  try {
    const { nome, descricao, duracao, turno, certificacao, vagas, categoria } = req.body;
    // TODO: inserir curso no banco
    // const result = await pool.query(
    //   'INSERT INTO cursos (nome, descricao, duracao, turno, certificacao, vagas, categoria) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
    //   [nome, descricao, duracao, turno, certificacao, vagas, categoria]
    // );
    // res.status(201).json({ erro: false, dados: result.rows[0] });

    res.json({ erro: false, dados: null, mensagem: 'TODO: Implementar criacao de curso' });
  } catch (error) {
    next(error);
  }
}

module.exports = { listarCursos, obterCurso, criarCurso };
