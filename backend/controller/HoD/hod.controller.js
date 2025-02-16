const { request } = require("http");
const jwt = require("jsonwebtoken");

//Model
const staffModel = require("../../models/Staff/staff.model");
const studentModel = require('../../models/Student/student.model');

//Login
const login = async (request, response) => {
  try {
    const { email, password } = request.body;

    if (email == "hod.ai@kongu.ac.in" && password == "hodai") {
      return response.status(200).json({
        message: "HOD signed in successfully",
      });
    }
  } catch (error) {
    console.error("Error in Login: ", error);
    return response.status(500).json({ message: "Server error", error });
  }
};

//All get staff
const getAllStaff = async (request, response) => {
  try {
    // Fetch all staff details, including advisor-related fields
    const staff = await staffModel.find({}, { 
      Name: 1, 
      email: 1, 
      isCoordinator: 1, 
      isallocated: 1, 
      section: 1, 
      semester: 1, 
      year: 1
    }).lean();

    if (!staff || staff.length === 0) {
      return response.status(404).json({ message: "Staff not found" });
    }


    // Ensure proper structure in response
    const updatedStaff = staff.map((member) => ({
      ...member,
      isallocated: member.isCoordinator ?? false, // ✅ Ensure `isallocated` exists
      section: member.section || "N/A", // ✅ Avoid null values
      semester: member.semester || "N/A",
      year: member.year || "N/A",
      isCoordinator: member.isCoordinator ?? false, // ✅ Ensure `isCoordinator` exists
    }));

    return response.status(200).json(updatedStaff);
  } catch (error) {
    console.error("❌ Error in StaffList:", error);
    return response.status(500).json({ message: "Server error", error });
  }
};




//Allocate SAP coordinator
const allocateStaff = async (request, response) => {
  try {
    const { email, year, dept, section, semester } = request.body;
    const staff = await staffModel.findOne({ email });
    if (!staff) {
      return response.status(404).json({ message: "Staff not found" });
    }
    staff.year = year;
    staff.dept = dept;
    staff.section = section;
    staff.semester = semester;
    staff.isCoordinator = true;
    staff.save();
    return response
      .status(200)
      .json({ message: "Staff allocated successfully" });
  } catch (error) {
    console.error("Error in AllocateStaff: ", error);
    return response.status(500).json({ message: "Server error", error });
  }
};

//Deallocate SAP coordinator
const deallocateStaff = async (request, response) => {
  try {
    const { email } = request.body;
    const staff = await staffModel.findOne({ email });
    if (!staff) {
      return response.status(404).json({ message: "Staff not found" });
    }
    staff.year = null;
    staff.dept = null;
    staff.section = null;
    staff.semester = null;
    staff.isCoordinator = false;
    staff.save();
    return response
      .status(200)
      .json({ message: "Staff deallocated successfully" });
  } catch (error) {
    console.error("Error in DeallocateStaff: ", error);
    return response.status(500).json({ message: "Server error", error });
  }
};

// Available Free staff
const checkFreeStaff = async(request, response) => { 
  try {
    const staff = await staffModel.find({isCoordinator: false}, "Name email");
    if (!staff) {
      return response.status(404).json({ message: "Staff not found" });
    }
    return response.status(200).json(staff);
  } catch (error) {
    console.error("Error in StaffList: ", error);
    return response.status(500).json({ message: "Server error", error });
  }
}; 

//Allotted Staff
const allottedStaff = async(request, response) => {
  try {
    const staff = await staffModel.find({isCoordinator: true}, "Name email");
    if (!staff) {
      return response.status(404).json({ message: "Staff not found" });
    }
    return response.status(200).json(staff);
  } catch (error) {
    console.error("Error in StaffList: ", error);
    return response.status(500).json({ message: "Server error", error });
  }
};

//Fetch the Student Details
const studentDetails = async(request,response)=>{
  try{
    const { year, dept, section}= request.body;
    const student =await studentModel.find({year, dept,section},'name email');
    if(!student){
      return response.status(404).json({message : "Student not found"});
    }
    return response.status(200).json(student);
  }
  catch(error){
    console.error("Error in Fetching Student Details: ",error);
    return response.status(500).json({message:"Server error",error});
  }
};

module.exports = {
  login,
  getAllStaff,
  allocateStaff,
  deallocateStaff,
  checkFreeStaff,
  allottedStaff,
  studentDetails,
};
