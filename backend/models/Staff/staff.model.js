const mongoose = require("mongoose");

const staffSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  year: { type: Number, default: null,  },
  dept: { type: String, default: null, },
  section: { type: String, default: null, },
  semester:{ type: Number, default: null},
  isCoordinator: { type: Boolean, required: true, default: false },
});

const Staff = mongoose.model("staffs", staffSchema);

module.exports = Staff;
