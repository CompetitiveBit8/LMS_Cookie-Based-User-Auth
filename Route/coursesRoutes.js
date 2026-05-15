const { createCourse, getAllcourses, getCreatorCourses } = require('../Controller/coursesController.js')
const { protect } = require('../Middleware/authneticationMiddleware.js')
const { authorise } = require('../Middleware/authorisationMiddleware.js')
const express = require('express')
const route = express.Router()

route.post('/create-course', protect, authorise('admin', 'creator'), createCourse)
route.get('/all-courses', protect, authorise('admin', 'creator'), getAllcourses)
route.get('/my-courses', protect, authorise('creator', 'admin'), getCreatorCourses)

module.exports = route