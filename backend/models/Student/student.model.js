const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    place: {
      type: String,
    },
    position: {
      type: String,
    },
    date: {
      type: Date,
    },
    proof: {
      data: Buffer,
      contentType: String,
    },
    verifiedBy: {
      type: Boolean,
    },
    points: {
      type: Number,
    },
  },
  { _id: false }
);

const semesterSchema = new mongoose.Schema(
  {
    semesterNumber: {
      type: String,
    },
    activites: [activitySchema],
    sapPointsEarned: {
      type: Number,
    },
  },
  { _id: false }
);
const studentSchema = new mongoose.Schema({
  rollno: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  semester: {
    type: Number,
    required: true,
  },
  dept: {
    type: String,
    required: true,
  },
  section: {
    type: String,
    required: true,
  },
  semesters: [semesterSchema],
});

const Student = mongoose.model("Students", studentSchema);

module.exports = Student;
