const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const adminRoutes = require('./routes/admin');
const studentRoutes = require('./routes/student');
const cors = require('cors');


dotenv.config();

const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Connect to database
connectDB();

// Use routes
app.use('/api/admin', adminRoutes);
app.use('/api/students', studentRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
