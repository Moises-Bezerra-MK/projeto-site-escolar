require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const { testConnection } = require('./config/database');
const errorHandler = require('./middleware/errorHandler');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

// ============================================
// MIDDLEWARES BASICOS - COMPLETO
// ============================================
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve os arquivos estaticos do frontend (pasta pai: projeto-TCC/)
app.use(express.static(path.join(__dirname, '..')));

// ============================================
// ROTAS DA API - COMPLETO
// ============================================
app.use('/api', routes);

// Rota de saude da API
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'API EEAFR funcionando!' });
});

// ============================================
// TODO: MIDDLEWARE DE ROTA NAO ENCONTRADA
// ============================================
// Adicione um middleware que retorne 404 quando
// o usuario tentar acessar uma rota que nao existe.
//
// Dica: use app.use((req, res) => { ... })
// Retorne um JSON com { erro: true, mensagem: 'Rota nao encontrada' }
// e status 404.

// TODO: Descomente e complete o codigo abaixo
// app.use((req, res) => {
//     res.status(404).json({ erro: true, mensagem: 'Rota nao encontrada' });
// });

// Tratamento de erros gerais
app.use(errorHandler);

// ============================================
// INICIO DO SERVIDOR - COMPLETO
// ============================================
async function startServer() {
  await testConnection();
  app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
    console.log(`API disponivel em http://localhost:${PORT}/api`);
  });
}

startServer();
