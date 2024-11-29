const Admin = require('../models/admin');

const loginAdmin = async (req, res) => {
  try {
    const { id, password } = req.body;
    console.log(id, password);
    const adminData = await Admin.findOne({ id });
    if (adminData && password === adminData.password) {
      res.status(200).json({ message: 'Login successful', admin: adminData });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    console.error("Error in loginAdmin:", error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const registerProfessor = async (req, res) => {
    let { profID, name, password, admin } = req.body;
    console.log("registerProf body: ",req.body);
    profID = req.body.studentId;
    console.log(profID);
    console.log(req.body.studentId);
    try {
      // Check if the professor already exists by their ID
      const existingProfessor = await Admin.findOne({ profID });
      if (existingProfessor) {
        return res.status(400).json({ message: 'Professor with this ID already exists.' });
      }
      console.log('hello');
  
      // Create the new professor entry
      const newProfessor = new Admin({
        id:profID,
        name:name,
        password:password, 
        admin:admin // admin value will be provided from the request
      });
      console.log('new professor: ', newProfessor);
  
      // Save the new professor
      await newProfessor.save();
      console.log('hello3');
      res.status(201).json({ message: 'New professor registered successfully.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  

module.exports = { loginAdmin , registerProfessor };
