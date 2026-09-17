const { pool } = require('../config/database');

// ============================================
// TODO: COMPLETAR ESTE CONTROLLER
// ============================================
// Modelo: contato.controller.js (ja esta pronto)
//
// TAREFAS:
// 1. Completar a funcao listarProfessores()
//    - Tabela: professores
//    - Aceite filtro opcional por area (query param ?area=Linguagem)
//    - Areas disponiveis: Linguagem, Exatas, Humanas, Tecnicos
//    - Ordene por nome
//
// 2. Completar a funcao criarProfessor()
//    - Pegue: nome, area, disciplina, sigla
//    - Retorne 201 com o professor criado

async function listarProfessores(req, res, next) {
  try {
    const { area } = req.query;
    // TODO: buscar professores com filtro opcional
    // let query = 'SELECT * FROM professores';
    // let params = [];
    // if (area) {
    //   query += ' WHERE area = $1';
    //   params.push(area);
    // }
    // query += ' ORDER BY nome';
    // const result = await pool.query(query, params);
    // res.json({ erro: false, dados: result.rows });

    res.json({ erro: false, dados: [], mensagem: 'TODO: Implementar listagem de professores' });
  } catch (error) {
    next(error);
  }
}

async function criarProfessor(req, res, next) {
  try {
    const { nome, area, disciplina, sigla } = req.body;
    // TODO: inserir professor no banco
    // const result = await pool.query(
    //   'INSERT INTO professores (nome, area, disciplina, sigla) VALUES ($1, $2, $3, $4) RETURNING *',
    //   [nome, area, disciplina, sigla]
    // );
    // res.status(201).json({ erro: false, dados: result.rows[0] });

    res.json({ erro: false, dados: null, mensagem: 'TODO: Implementar criacao de professor' });
  } catch (error) {
    next(error);
  }
}

module.exports = { listarProfessores, criarProfessor };
