const Student = require('../models/student');

const getAllStudents = async (req, res) => {
  const students = await Student.find();
  // console.log("students found ", students);
  res.json(students);
};

const getStudentById = async (req, res) => {
  try {
    const { student_id } = req.params;
    console.log('Received student_id:', student_id);
    const student = await Student.findOne({ student_id });

    if (student) {
      res.json(student);
    } else {
      console.log('Student not found');
      res.status(404).json({ message: 'Student not found' });
    }
  } catch (error) {
    console.error('Error fetching student:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

const incrementAttendance = async (req, res) => {
  console.log("req body: ",req.body);
    const student_id = req.body.studentID;
    console.log("student id: ", student_id);
    try {
      const student = await Student.findOneAndUpdate(
        { student_id },
        { $inc: { days_present: 1 } },
        { new: true }
      );
  
      if (!student) {
        return res.status(404).json({ message: 'Student not found' });
      }
  
      res.json(student.name);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};

module.exports = { getAllStudents, getStudentById , incrementAttendance };
