const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://@cluster0.gbrlw.mongodb.net/courses');


const AdminSchema = new mongoose.Schema({
   
    username : String,
    password : String,

});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username : String,
    password : String,

    purchasedCourses : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Course'
        }
    ]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title: String,
    price: Number,
    description: String,
    imageLink: String
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}