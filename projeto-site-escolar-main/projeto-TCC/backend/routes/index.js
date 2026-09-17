const express = require('express');
const router = express.Router();

const contatoRoutes = require('./contato.routes');
const cursosRoutes = require('./cursos.routes');
const eventosRoutes = require('./eventos.routes');
const galeriaRoutes = require('./galeria.routes');
const corpoDocenteRoutes = require('./corpo-docente.routes');
const escolaRoutes = require('./escola.routes');

router.use('/contato', contatoRoutes);
router.use('/cursos', cursosRoutes);
router.use('/eventos', eventosRoutes);
router.use('/galeria', galeriaRoutes);
router.use('/professores', corpoDocenteRoutes);
router.use('/escola', escolaRoutes);

module.exports = router;
