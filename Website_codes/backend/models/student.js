const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  student_id: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  days_present: {
    type: Number,
    required: true
  },
  date_of_birth: { 
    type: Date, 
    required: true 
  }
});

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;
