const mongoose = require('mongoose');

const standupSchema = new mongoose.Schema({
    studentName: {type: String},
    studentCourse: {type: String}, 
    studentID: {type: Number},
    studentGrade: {type: Number},
    studentPhone: {type: Number},
    studentLocation: {type: String}
    
});

module.exports = mongoose.model('Standup', standupSchema); 