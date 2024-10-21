const express = require("express");
const routes = express.Router();
const {
  login,
  getAllStaff,
  allocateStaff,
  deallocateStaff,
  checkFreeStaff,
  allottedStaff,
  studentDetails,
} = require("../../controller/HoD/hod.controller");

routes.post("/login", login);
routes.get("/staff-list", getAllStaff);
routes.post("/allocate", allocateStaff);
routes.post("/deallocate", deallocateStaff);
routes.get("/checkfreestaff", checkFreeStaff);
routes.get("/allottedStaff", allottedStaff);
routes.post("/student-details", studentDetails);

module.exports = routes;
