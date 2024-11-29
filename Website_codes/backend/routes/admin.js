const express = require('express');
const router = express.Router();
const { loginAdmin , registerProfessor } = require('../controllers/adminController.js');

router.post('/login', loginAdmin);
router.post('/register', registerProfessor);

module.exports = router;
