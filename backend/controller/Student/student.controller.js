const jwt = require('jsonwebtoken');
const studentModel = require('../../models/Student/student.model');

const Login = async (request, response) => {
  try {
    const { email, password } = request.body;  
    const student = await studentModel.findOne({ email });
    if (!student) {
      return response.status(404).json({ message: "Student not found" }); 
    }
    if (student.password !== password) {
      return response.status(400).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign(
      { id: student._id },  
      process.env.JWT_SECRET,  
      { expiresIn: "24h" } 
    );
    return response.status(200).json({
      token,
      student: {
        rollno: student.rollno,
        name: student.name,
        email: student.email,
        year: student.year,
        semester: student.semester,
        dept: student.dept,
        section: student.section,
      },
    });
  } catch (error) {
    console.error("Error in Login: ", error);
    return response.status(500).json({ message: "Server error", error });
  }
};

module.exports = { Login };
