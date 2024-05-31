const express = require('express');
const app = express();

app.use(express.json());

const authRoutes = require('./routes/authRoutes');
const clienteRoutes = require('./routes/clienteRoutes');
const enderecoRoutes = require('./routes/enderecoRoutes');

app.use('/api/v1', authRoutes);
app.use('/api/v1', clienteRoutes);
app.use('/api/v1', enderecoRoutes);

module.exports = app;
