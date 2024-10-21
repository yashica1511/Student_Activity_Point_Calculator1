const express = require('express');
const routes = express.Router();
const { Login } = require('../../controller/Staff/staff.controller');

routes.post('/login', Login);  

module.exports = routes; 
