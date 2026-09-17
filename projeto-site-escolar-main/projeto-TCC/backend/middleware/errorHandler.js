// ============================================
// MIDDLEWARE DE TRATAMENTO DE ERROS
// ============================================
// Este middleware captura erros lancados pelas rotas
// e retorna uma resposta padronizada para o cliente.
//
// Fluxo:
// 1. Rota detecta erro e chama next(error)
// 2. Este middleware recebe o erro
// 3. Loga o erro no console
// 4. Retorna JSON com mensagem de erro
//
// Tipos de erro:
// - Erros de banco (unique_violation, foreign_key_violation)
// - Erros de validacao (campos obrigatorios)
// - Erros internos do servidor (500)
//
// TODO: Adicionar envio de email/alerta para erros criticos
// TODO: Adicionar gravacao de erros em arquivo de log
// TODO: Integrar com servico de monitoramento (Sentry, etc)

function errorHandler(err, req, res, next) {
  // Log do erro no console (desenvolvimento)
  console.error('');
  console.error('========================================');
  console.error('ERRO CAPTURADO PELO MIDDLEWARE');
  console.error('========================================');
  console.error('Mensagem:', err.message);
  console.error('Stack:', err.stack);
  console.error('Rota:', req.method, req.originalUrl);
  console.error('Body:', req.body);
  console.error('========================================');
  console.error('');

  // ============================================
  // TODO: TRATAR ERROS ESPECIFICOS DO PostgreSQL
  // ============================================
  // Cada tipo de erro do banco tem um codigo proprio.
  // Exemplos:
  //   23505 - unique_violation (registro duplicado)
  //   23503 - foreign_key_violacao (chave estrangeira)
  //   23502 - not_null_violation (campo obrigatorio)
  //
  // if (err.code === '23505') {
  //     return res.status(409).json({
  //         erro: true,
  //         mensagem: 'Registro ja existe',
  //         detalhe: err.detail
  //     });
  // }
  //
  // if (err.code === '23503') {
  //     return res.status(400).json({
  //         erro: true,
  //         mensagem: 'Referencia invalida',
  //         detalhe: err.detail
  //     });
  // }
  //
  // if (err.code === '23502') {
  //     return res.status(400).json({
  //         erro: true,
  //         mensagem: 'Campo obrigatorio nao preenchido',
  //         detalhe: err.column
  //     });
  // }

  // ============================================
  // TODO: TRATAR ERROS DE VALIDACAO
  // ============================================
  // Se voce usar uma lib de validacao (Joi, Yup, etc)
  // pode ter erros especificos:
  //
  // if (err.name === 'ValidationError') {
  //     return res.status(400).json({
  //         erro: true,
  //         mensagem: 'Dados invalidos',
  //         detalhe: err.details
  //     });
  // }

  // ============================================
  // TODO: TRATAR ERROS DE AUTENTICACAO
  // ============================================
  // Se voce adicionar autenticacao (JWT, etc):
  //
  // if (err.name === 'UnauthorizedError') {
  //     return res.status(401).json({
  //         erro: true,
  //         mensagem: 'Acesso nao autorizado'
  //     });
  // }

  // Resposta padrao para erros nao tratados
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    erro: true,
    mensagem: err.message || 'Erro interno do servidor',
    // TODO: Em producao, nao retornar o stack do erro
    // stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });
}

module.exports = errorHandler;
