const jwt = require('jsonwebtoken');
const SECRET_KEY = 'w9~uBxw9w+KL';

const login = (req, res) => {
    const { username, password } = req.body;
    if (username === 'usuario' && password === 'senha') {
        const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
        res.json({ token });
    } else {
        res.status(401).json({ error: 'Credenciais inválidas' });
    }
};

module.exports = { login };
