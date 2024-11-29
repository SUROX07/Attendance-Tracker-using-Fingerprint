const express = require('express');
const router = express.Router();
const { getAllStudents, getStudentById , incrementAttendance } = require('../controllers/studentController');

router.get('/', getAllStudents);
router.get('/:student_id', getStudentById);
router.put('/increment-attendance', incrementAttendance);

module.exports = router;
