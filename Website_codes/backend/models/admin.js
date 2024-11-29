const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  admin : {
    type : Boolean,
    required : true
  }
});

const Admin = mongoose.model('Admin', adminSchema);
module.exports = Admin;
