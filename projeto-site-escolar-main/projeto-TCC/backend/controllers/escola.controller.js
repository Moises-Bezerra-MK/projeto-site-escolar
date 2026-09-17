const { pool } = require('../config/database');

// ============================================
// TODO: COMPLETAR ESTE CONTROLLER
// ============================================
// Modelo: contato.controller.js (ja esta pronto)
//
// TAREFAS:
// 1. Completar a funcao obterDadosEscola()
//    - Tabela: escola_dados
//    - Busque todos os pares campo/valor
//    - Monte um objeto { campo: valor } para retornar
//    - Exemplo: { nome: "EEAFR", ideb: "4.0", ... }
//
// 2. Completar a funcao atualizarDado()
//    - Pegue o campo da URL (req.params.campo)
//    - Pegue o novo valor do body (req.body.valor)
//    - Use UPDATE para atualizar
//    - Se o campo nao existir, retorne 404

async function obterDadosEscola(req, res, next) {
  try {
    // TODO: buscar dados da escola
    // const result = await pool.query('SELECT campo, valor FROM escola_dados ORDER BY campo');
    // const dados = {};
    // result.rows.forEach((row) => {
    //   dados[row.campo] = row.valor;
    // });
    // res.json({ erro: false, dados });

    res.json({ erro: false, dados: {}, mensagem: 'TODO: Implementar busca de dados da escola' });
  } catch (error) {
    next(error);
  }
}

async function atualizarDado(req, res, next) {
  try {
    const { campo } = req.params;
    const { valor } = req.body;

    if (!valor) {
      return res.status(400).json({ erro: true, mensagem: 'Valor e obrigatorio' });
    }

    // TODO: atualizar dado da escola
    // const result = await pool.query(
    //   'UPDATE escola_dados SET valor = $1, updated_at = CURRENT_TIMESTAMP WHERE campo = $2 RETURNING *',
    //   [valor, campo]
    // );
    // if (result.rows.length === 0) {
    //   return res.status(404).json({ erro: true, mensagem: 'Campo nao encontrado' });
    // }
    // res.json({ erro: false, dados: result.rows[0] });

    res.json({ erro: false, dados: null, mensagem: 'TODO: Implementar atualizacao de dado' });
  } catch (error) {
    next(error);
  }
}

module.exports = { obterDadosEscola, atualizarDado };
