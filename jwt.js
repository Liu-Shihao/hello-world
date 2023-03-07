const jwt = require('jsonwebtoken');

const payload = { user_id: 12345, username: 'john_wick' };
const secretKey = '123456';

const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });

console.log(token);  // 输出生成的JWT令牌
