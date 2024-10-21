const jwt = require('jsonwebtoken');

const verifyToken = (request, response, next) => {
  const authHeader = request.headers['authorization'];  
  if (!authHeader) {
    return response.status(401).json({ message: 'Access Denied: No token provided' });
  }

  const token = authHeader.split(' ')[1]; 
  if (!token) {
    return response.status(401).json({ message: 'Access Denied: Token missing' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    request.user = decoded.id;  
    next();  
  } catch (error) {
    return response.status(400).json({ message: 'Invalid token' });
  }
};

module.exports = verifyToken;
