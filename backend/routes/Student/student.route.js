const express = require('express');
const routes = express.Router();
const { Login } = require('../../controller/Student/student.controller');

routes.post('/login', Login);  

module.exports = routes; 
