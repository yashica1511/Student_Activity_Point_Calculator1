const jwt = require('jsonwebtoken');
const staffModel = require('../../models/Staff/staff.model');

const Login = async (request, response) => {
  try {
    const { email, password } = request.body;  
    const staff = await staffModel.findOne({ email });
    if (!staff) {
      return response.status(404).json({ message: "Staff not found" }); 
    }
    if (staff.password !== password) {
      return response.status(400).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign(
      { id: staff._id },  
      process.env.JWT_SECRET,  
      { expiresIn: "24h" } 
    );
    return response.status(200).json({
      token,
      staff: {
        name: staff.Name,
        email: staff.email,
        year: staff.year,
        semester: staff.semester,
        dept: staff.dept,
        section: staff.section,
      },
    });
  } catch (error) {
    console.error("Error in Login: ", error);
    return response.status(500).json({ message: "Server error", error });
  }
};

module.exports = { Login };
