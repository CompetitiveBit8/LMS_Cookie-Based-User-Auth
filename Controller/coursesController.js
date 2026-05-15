const CourseModel = require('../Models/coursesModel.js')


exports.createCourse = async (req, res) => {
    try {
    const { title, author, published, lengthInMinutes } = req.body

    const newCourse = await CourseModel.create({
        title, 
        author, 
        published, 
        lengthInMinutes
    })

    res.status(200).json({newCourse})
    } catch (error) {
        req.status(500).json({error:error.message})
    }
}

exports.getAllcourses = async (req, res) => {
    const getAll = await CourseModel.find({published: true})
    res.status(200).json({message: getAll})
}

exports.getCreatorCourses = async (req, res) => {
    console.log(req.user.id)
    const getMyCourses = await CourseModel.find({author: req.user.id, published: true})
    res.status(200).json({message: getMyCourses})
}