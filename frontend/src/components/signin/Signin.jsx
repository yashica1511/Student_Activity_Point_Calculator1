import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainPage from "../../Mainpage";

function Signin() {
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  const handleNextClick = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(email)) {
      setShowPassword(true);
    } else {
      setEmailError("Please enter a valid email address.");
    }
  };

  const handleLogin = async () => {
    setPasswordError(""); // Reset errors
    console.log("🔹 Login button clicked");

    try {
      let apiUrl = "";

      if (email.includes("@kongu.ac.in")) {
        if (email === "hod.ai@kongu.ac.in") {
          apiUrl = "http://localhost:8080/api/hod/login"; // HOD login
        } else {
          apiUrl = "http://localhost:8080/api/staff/login"; // Staff login
        }
      } else {
        apiUrl = "http://localhost:8080/api/student/login"; // Student login
      }

      console.log(`🔹 Sending request to: ${apiUrl}`);

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log("🔹 Server Response:", data);

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("userRole", data.staff ? "staff" : data.student ? "student" : "hod");

      console.log("✅ Logged in:", email);

      if (data.staff) {
        navigate("/student1"); // Staff Page
      } else if (data.student) {
        navigate("/student2"); // Student Page
      } else {
        navigate("/hod1"); // HOD Page
      }
    } catch (error) {
      console.error("Login Error:", error.message);
      setPasswordError(error.message); // Show error near password field
    }
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
      <MainPage />
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-full sm:w-full md:w-4/5 lg:w-4/5 xl:w-3/4 2xl:w-2/3 min-h-[75vh] bg-[rgba(255,255,255,0.85)] rounded-xl px-4 sm:px-6 md:px-8 lg:px-10 xl:px-2">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center justify-center mb-4">
                <div className="relative w-12 h-12 mt-2">
                  <img src="./images/logo.png" alt="Logo" className="w-full h-full rounded-lg border border-gray-400" />
                </div>
              </div>
              <div className="flex items-center justify-center mb-4">
                <h1 className="text-2xl font-bold text-center">Kongu Engineering College</h1>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-bold">Sign In</h2>
              </div>
              <div className="mt-2">
                <h6 className="text-xl">Unlock happiness: Sign in to access SAP calculation tool.</h6>
              </div>

              <div className="mt-6">
                <h2 className="text-2xl font-bold">Email</h2>
                <div className="mt-2">
                  <input
                    type="text"
                    value={email}
                    onChange={handleEmailChange}
                    className={`w-full h-12 px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-base ${emailError ? "border-red-500" : ""}`}
                    placeholder="Enter your email"
                  />
                  {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
                </div>
              </div>

              <div className="mt-8">
                {showPassword ? (
                  <>
                    <h2 className="text-3xl font-bold">Password</h2>
                    <div className="mt-2">
                      <input
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        className={`w-full h-12 px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-base ${passwordError ? "border-red-500" : ""}`}
                        placeholder="Enter your password"
                      />
                      {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
                    </div>
                    <div className="flex items-start mt-2">
                      <div className="text-md">
                        <a href="/forgot" className="font-medium text-gray-600 hover:text-purple-500">
                          <h6>Forgot password?</h6>
                        </a>
                      </div>
                    </div>
                    <div className="mt-2 flex justify-end">
                      <button
                        onClick={handleLogin}
                        className="mt-6 py-2 px-4 w-36 h-12 rounded-md font-semibold focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-md bg-blue-500 text-white">
                        Log In
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="flex justify-end">
                    <button
                      onClick={handleNextClick}
                      className="py-2 px-4 w-36 h-12 rounded-md font-semibold focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-md bg-blue-500 text-white">
                      Next
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="hidden sm:flex items-center justify-center p-4">
              <div className="relative w-full h-80 md:h-96 lg:h-[480px] xl:h-[520px] 2xl:h-[600px] flex items-center justify-center">
                <img src='./images/study_group_2.jpg' alt="Study group" className="w-full h-full object-cover rounded-md" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
