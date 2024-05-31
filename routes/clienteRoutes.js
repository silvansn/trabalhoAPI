const express = require('express');
const router = express.Router();
const { createCliente, getClienteByCodigo, getAllClientes, getClienteAndEnderecoByCodigo } = require('../controllers/clienteController');
const authenticateToken = require('../middlewares/authenticateToken');

router.post('/cliente', authenticateToken, createCliente);
router.get('/cliente/:codigo', authenticateToken, getClienteByCodigo);
router.get('/cliente', authenticateToken, getAllClientes);

router.get('/cliente/:codigo/endereco', authenticateToken, getClienteAndEnderecoByCodigo);

module.exports = router;
