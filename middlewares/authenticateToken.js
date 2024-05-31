const jwt = require('jsonwebtoken');
const SECRET_KEY = 'w9~uBxw9w+KL';

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    //console.log('Auth Header:', authHeader);  // Verifique este log
    const token = authHeader && authHeader.split(' ')[1];
    //console.log('Token:', token);  // Verifique este log
    if (token == null) return res.status(401).json({ error: 'Token não fornecido' });

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) {
            //console.log('JWT Error:', err);  // Adicione este log para mais detalhes
            return res.status(403).json({ error: 'Token inválido' });
        }
        req.user = user;
        next();
    });
}

module.exports = authenticateToken;
