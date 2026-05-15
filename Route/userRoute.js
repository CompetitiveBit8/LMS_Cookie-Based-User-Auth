const express = require('express');
const route = express.Router()
const { createAccount, userLogin, protected, logout } = require('../Controller/userController.js')
const { protect } = require('../Middleware/authneticationMiddleware.js')
const { authorise } =require('../Middleware/authorisationMiddleware.js')

//Routes
route.post('/user-registration', createAccount)
route.post('/login', userLogin)
route.post('/protected', protect, authorise('user', 'admin', 'creator'), protected)
route.post('/logout', protect, logout)


module.exports = route