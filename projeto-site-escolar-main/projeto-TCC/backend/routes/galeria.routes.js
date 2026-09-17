const express = require('express');
const router = express.Router();

// ============================================
// ROTAS DA GALERIA
// ============================================
// Estas rotas gerenciam as fotos da galeria da escola.
//
// Endpoints:
//   GET    /api/galeria       - Listar todas as fotos
//   POST   /api/galeria       - Adicionar uma nova foto
//
// TODO: Adicionar upload de imagens (usar multer)
// TODO: Adicionar validacao de tipo de arquivo (jpg, png, webp)
// TODO: Adicionar redimensionamento de imagens

const { listarFotos, criarFoto } = require('../controllers/galeria.controller');

// GET /api/galeria
// Lista todas as fotos ordenadas pela ordem
// As fotos sao exibidas na galeria na ordem definida
router.get('/', listarFotos);

// POST /api/galeria
// Adiciona uma nova foto a galeria
// Body esperado: { titulo, descricao, caminho_imagem, ordem }
//
// TODO: Em vez de caminho_imagem, fazer upload real da imagem
// TODO: Usar multer para processar multipart/form-data
//
// Exemplo de implementacao futura com upload:
// const multer = require('multer');
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => cb(null, 'imagens/galeria/'),
//     filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
// });
// const upload = multer({ storage });
// router.post('/', upload.single('imagem'), criarFoto);
router.post('/', criarFoto);

// ============================================
// TODO: ADICIONAR ROTA PUT (ATUALIZAR ORDEM)
// ============================================
// Permite reordenar as fotos da galeria
// Body: { ordem: 1 }
// router.put('/:id', async (req, res, next) => { ... });

// ============================================
// TODO: ADICIONAR ROTA DELETE (REMOVER FOTO)
// ============================================
// Remove uma foto da galeria e o arquivo do disco
// router.delete('/:id', async (req, res, next) => { ... });

module.exports = router;
