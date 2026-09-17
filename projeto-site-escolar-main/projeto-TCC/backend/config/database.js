const { Pool } = require('pg');

// ============================================
// CONFIGURACAO DO BANCO DE DADOS PostgreSQL
// ============================================
// Este arquivo configura a conexao com o banco usando Pool.
//
// O Pool gerencia varias conexoes simultaneas.
// Quando uma conexao nao e mais necessaria, ela e liberada
// para ser reusada por outra requisicao.
//
// Configuracoes via variaveis de ambiente (.env):
//   DB_HOST     - Host do banco (padrao: localhost)
//   DB_PORT     - Porta do banco (padrao: 5432)
//   DB_USER     - Usuario do banco (padrao: postgres)
//   DB_PASSWORD - Senha do banco (obrigatorio)
//   DB_NAME     - Nome do banco (padrao: eeafr_database)
//
// TODO: Adicionar configuracao SSL para producao
// TODO: Adicionar configuracao de retry em caso de falha
// TODO: Adicionar metricas de conexoes

const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432'),
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'eeafr_database',

  // ============================================
  // CONFIGURACAO DO POOL
  // ============================================
  // max: Numero maximo de conexoes no pool
  // Recomendado: 10-20 para apps pequenas
  // TODO: Ajustar conforme necessidade
  max: 20,

  // idleTimeoutMillis: Tempo maximo que uma conexao fica ociosa
  // Apos esse tempo, a conexao e fechada
  // TODO: Ajustar conforme necessidade
  idleTimeoutMillis: 30000,

  // connectionTimeoutMillis: Tempo maximo para conectar ao banco
  // Se nao conectar nesse tempo, retorna erro
  // TODO: Aumentar se o banco estiver remoto
  connectionTimeoutMillis: 2000,
});

// ============================================
// FUNCAO: testConnection
// ============================================
// Testa se a conexao com o banco esta funcionando.
// Chamada no inicio da aplicacao.
//
// TODO: Adicionar retry (tentar novamente em caso de falha)
// TODO: Adicionar log detalhado do erro
// TODO: Enviar alerta se o banco nao conectar
async function testConnection() {
  try {
    const client = await pool.connect();
    console.log('Conexao com PostgreSQL estabelecida com sucesso!');
    console.log(`Banco: ${process.env.DB_NAME || 'eeafr_database'}`);
    console.log(`Host: ${process.env.DB_HOST || 'localhost'}:${process.env.DB_PORT || '5432'}`);
    client.release();
  } catch (error) {
    console.error('Erro ao conectar com PostgreSQL:', error.message);
    console.error('');
    console.error('Verifique se:');
    console.error('  1. O PostgreSQL esta rodando');
    console.error('  2. As credenciais no .env estao corretas');
    console.error('  3. O banco de dados foi criado (psql -U postgres -f models/database.sql)');
    console.error('');
    // TODO: Em producao, a aplicacao nao deve continuar se o banco nao conectar
    // process.exit(1);
  }
}

// ============================================
// TODO: ADICIONAR FUNCAO DE QUERY COM LOG
// ============================================
// Funcao auxiliar que loga as queries executadas
// Util para debug em desenvolvimento
//
// async function query(text, params) {
//     const start = Date.now();
//     const result = await pool.query(text, params);
//     const duration = Date.now() - start;
//     console.log('Query executada:', { text: text.substring(0, 50), duration: duration + 'ms', rows: result.rowCount });
//     return result;
// }

// ============================================
// TODO: ADICIONAR FUNCAO DE TRANSACAO
// ============================================
// Permite executar varias queries como uma unica transacao
// Se uma falhar, todas sao desfeitas
//
// async function transaction(callback) {
//     const client = await pool.connect();
//     try {
//         await client.query('BEGIN');
//         const result = await callback(client);
//         await client.query('COMMIT');
//         return result;
//     } catch (error) {
//         await client.query('ROLLBACK');
//         throw error;
//     } finally {
//         client.release();
//     }
// }

module.exports = { pool, testConnection };
