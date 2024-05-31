const express = require('express');
const router = express.Router();
const { createEndereco, getEnderecoByCodigo, updateEstadoEndereco } = require('../controllers/enderecoController');
const authenticateToken = require('../middlewares/authenticateToken');

router.post('/cliente/:codigo/endereco', authenticateToken, createEndereco);
router.get('/cliente/:codigo/endereco', authenticateToken, getEnderecoByCodigo);
router.put('/cliente/:codigo/endereco/estado', authenticateToken, updateEstadoEndereco);

module.exports = router;
