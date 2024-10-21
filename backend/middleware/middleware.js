import express from 'express';

const verifyToken = (request, response, next) => {
    const token = request.headers['authorization'];
    if (!token) {
        return response.status(401).json({ message: 'Access Denied' });
    }
    try {
        const decoded = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET);
        request.user = decoded.id;
        next();
    } catch (error) {
        return response.status(400).json({ message: 'Invalid Token' });
    }
}

module.exports = verifyToken;