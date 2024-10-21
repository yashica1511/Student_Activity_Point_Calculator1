const express = require("express");
const {
  ROUTES_STUDENTS,
  ROUTES_STAFF,
  ROUTES_HOD,
} = require("../constants/routes");
const router = express.Router();

const Student = require('./Student/student.route'); 
const Staff = require('./Staff/staff.route');
const Hod = require('./HoD/hod.route');

router.use(ROUTES_STUDENTS, Student);
router.use(ROUTES_STAFF, Staff);
router.use(ROUTES_HOD, Hod);

module.exports = router;
