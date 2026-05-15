const mongoose = require('mongoose')


const coursesSchema = new mongoose.Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    published: {type: String, enum: [true, false], default: false, required: true},
    lengthInMinutes: {type: Number, required: true},
    }, 
    {timestamps: true}
)

const Courses = mongoose.model ('Courses',  coursesSchema)

module.exports = Courses;