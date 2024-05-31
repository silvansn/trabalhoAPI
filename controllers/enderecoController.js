const clientes = require('../models/clientes');
const enderecos = require('../models/enderecos');

const createEndereco = (req, res) => {
    const codigo = req.params.codigo;
    const cliente = clientes.find(cliente => cliente.codigo === codigo);
    if (cliente) {
        const novoEndereco = req.body;
        novoEndereco.clienteId = cliente.id;
        enderecos.push(novoEndereco);
        res.status(201).json(novoEndereco);
    } else {
        res.status(404).json({ error: 'Cliente não encontrado' });
    }
};

const getEnderecoByCodigo = (req, res) => {
    const codigo = req.params.codigo;
    const cliente = clientes.find(cliente => cliente.codigo === codigo);
    if (cliente) {
        const endereco = enderecos.find(endereco => endereco.clienteId === cliente.id);
        if (endereco) {
            res.json(endereco);
        } else {
            res.status(404).json({ error: 'Endereço não encontrado para este cliente' });
        }
    } else {
        res.status(404).json({ error: 'Cliente não encontrado' });
    }
};

const updateEstadoEndereco = (req, res) => {
    const codigo = req.params.codigo;
    const novoEstado = req.body.estado;

    const cliente = clientes.find(cliente => cliente.codigo === codigo);
    if (cliente) {
        const endereco = enderecos.find(endereco => endereco.clienteId === cliente.id);
        if (endereco) {
            endereco.estado = novoEstado;
            res.json(endereco);
        } else {
            res.status(404).json({ error: 'Endereço não encontrado para este cliente' });
        }
    } else {
        res.status(404).json({ error: 'Cliente não encontrado' });
    }
};

module.exports = { createEndereco, getEnderecoByCodigo, updateEstadoEndereco };
