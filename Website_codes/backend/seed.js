const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Student = require('./models/student');
const Admin = require('./models/admin');

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

const seedStudents = async () => {
    const students = [
        { student_id: '01543210', name: 'Alice Johnson', date_of_birth: '2003-01-12', days_present: 82 },
        { student_id: '02543210', name: 'Bob Smith', date_of_birth: '2002-11-04', days_present: 75 },
        { student_id: '03543210', name: 'Catherine Lee', date_of_birth: '2003-05-22', days_present: 88 },
        { student_id: '04543210', name: 'David Brown', date_of_birth: '2003-07-15', days_present: 69 },
        { student_id: '05543210', name: 'Evelyn Davis', date_of_birth: '2002-09-09', days_present: 80 },
        { student_id: '06543210', name: 'Frank Wilson', date_of_birth: '2003-02-17', days_present: 74 },
        { student_id: '07543210', name: 'Grace Martinez', date_of_birth: '2003-06-28', days_present: 90 },
        { student_id: '08543210', name: 'Henry Anderson', date_of_birth: '2003-04-02', days_present: 78 },
        { student_id: '09543210', name: 'Isla Thomas', date_of_birth: '2003-12-10', days_present: 85 },
        { student_id: '10543210', name: 'Jack Taylor', date_of_birth: '2002-08-05', days_present: 68 },
        { student_id: '11543210', name: 'Lily Moore', date_of_birth: '2003-03-25', days_present: 83 },
        { student_id: '12543210', name: 'Mason White', date_of_birth: '2003-10-18', days_present: 72 },
        { student_id: '13543210', name: 'Nora Clark', date_of_birth: '2003-09-03', days_present: 77 },
        { student_id: '14543210', name: 'Oliver Lewis', date_of_birth: '2003-01-29', days_present: 66 },
        { student_id: '15543210', name: 'Penelope Robinson', date_of_birth: '2002-07-19', days_present: 79 },
        { student_id: '16543210', name: 'Quinn Walker', date_of_birth: '2003-11-07', days_present: 70 },
        { student_id: '17543210', name: 'Ryan Hall', date_of_birth: '2003-05-15', days_present: 84 },
        { student_id: '18543210', name: 'Sophia Allen', date_of_birth: '2002-06-30', days_present: 76 },
        { student_id: '19543210', name: 'Thomas Young', date_of_birth: '2003-10-01', days_present: 67 },
        { student_id: '20543210', name: 'Uma Harris', date_of_birth: '2002-12-23', days_present: 71 }
    ];

    await Student.insertMany(students);
    console.log('Student data seeded');
};

const seedAdmins = async () => {
    const admins = [
        { id: 'A001', name: 'Prof. John Doe', password: 'password123', admin: false },
        { id: 'A002', name: 'Prof. Jane Smith', password: 'password456', admin: false },
        { id: 'A003', name: 'Prof. Emily Johnson', password: 'passwor789', admin: false },
        { id: 'A004', name: 'Prof. Michael Brown', password: 'password159', admin: true }
    ];

    //   await Admin.insertMany(admins);
    //   console.log('Admin data seeded');
    try {
        await Admin.insertMany(admins);
        console.log('Admin data seeded');
    } catch (error) {
        console.error('Error seeding admin data:', error);
    }
};

const seedData = async () => {
    await connectDB();
    await seedStudents();
    await seedAdmins();
    mongoose.connection.close();
};

seedData();
