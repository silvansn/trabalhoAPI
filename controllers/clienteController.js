const clientes = require('../models/clientes');
const enderecos = require('../models/enderecos');

const getClienteAndEnderecoByCodigo = (req, res) => {
    const codigo = req.params.codigo;
    const cliente = clientes.find(cliente => cliente.codigo === codigo);

    if (cliente) {
        const endereco = enderecos.find(endereco => endereco.clienteId === cliente.id);
        if (endereco) {
            res.json({ cliente, endereco });
        } else {
            res.status(404).json({ error: 'Endereço não encontrado para este cliente' });
        }
    } else {
        res.status(404).json({ error: 'Cliente não encontrado' });
    }
};

const createCliente = (req, res) => {
    const novoCliente = req.body;
    clientes.push(novoCliente);
    res.status(201).json(novoCliente);
};

const getClienteByCodigo = (req, res) => {
    const codigo = req.params.codigo;
    const cliente = clientes.find(cliente => cliente.codigo === codigo);
    if (cliente) {
        res.json(cliente);
    } else {
        res.status(404).json({ error: 'Cliente não encontrado' });
    }
};

const getAllClientes = (req, res) => {
    res.json(clientes);
};

module.exports = { getClienteAndEnderecoByCodigo, createCliente, getClienteByCodigo, getAllClientes};
