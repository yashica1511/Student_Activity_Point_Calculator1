import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MainPage from "../../Mainpage";
import Allocation from "./Allocation";

function Hod2() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStaff, setSelectedStaff] = useState(null);
  const [isAdvisorModalOpen, setIsAdvisorModalOpen] = useState(false);
  const [advisorData, setAdvisorData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStaffData = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/hod/staff-list");
        const staffData = await response.json();
        if (!response.ok) throw new Error(staffData.message || "Failed to fetch staff");

        console.log("📌 API Response:", staffData);
        setData(staffData);
        setIsLoading(false);
      } catch (error) {
        console.error("❌ Error fetching staff:", error);
        setError("Failed to load staff data.");
        setIsLoading(false);
      }
    };

    fetchStaffData();
  }, []);

  const handleAllocateClick = (staff) => {
    setSelectedStaff(staff);
    setIsModalOpen(true);
  };

  const handleAdvisorClick = (staff) => {
    console.log("📌 Advisor Data Clicked:", staff);
    setAdvisorData(staff); // ✅ Store full staff details
    setIsAdvisorModalOpen(true); // ✅ Open modal
  };

  const handleAllocationSubmit = async (details) => {
    try {
      const response = await fetch("http://localhost:8080/api/hod/allocate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: selectedStaff.email, ...details }),
      });

      if (!response.ok) throw new Error("Failed to allocate staff");

      setData((prevData) =>
        prevData.map((staff) =>
          staff.email === selectedStaff.email ? { ...staff, isallocated: true, advisor: details } : staff
        )
      );
      setIsModalOpen(false);
    } catch (error) {
      console.error("❌ Allocation Error:", error);
    }
  };

  const handleDeallocateClick = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/hod/deallocate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: advisorData.email }),
      });

      if (!response.ok) throw new Error("Failed to deallocate staff");

      setData((prevData) =>
        prevData.map((staff) =>
          staff.email === advisorData.email ? { ...staff, isallocated: false, advisor: null } : staff
        )
      );
      setIsAdvisorModalOpen(false);
    } catch (error) {
      console.error("❌ Deallocation Error:", error);
    }
  };

  return (
    <>
      <MainPage />
      <nav className="p-4 flex items-start">
        <button onClick={() => navigate("/hod1")} className="text-black text-xl font-bold">← Back</button>
      </nav>
      <div className="fixed inset-0 flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 mt-12 mb-12">
        <div className="w-full sm:w-full md:w-3/4 lg:w-2/3 xl:w-1/2 2xl:w-[80vw] h-[80vh] bg-white rounded-xl flex flex-col items-center p-6 sm:p-8 md:p-10 lg:p-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mt-6 mb-8 text-gray-700">
            DEPARTMENT OF ARTIFICIAL INTELLIGENCE
          </h1>

          {isLoading ? (
            <p className="text-blue-600 text-lg font-bold">Loading staff data...</p>
          ) : error ? (
            <p className="text-red-500 text-lg font-bold">{error}</p>
          ) : (
            <div className="w-full sm:w-full overflow-hidden mt-8">
            <div className="overflow-x-auto overflow-y-auto max-h-[400px] w-full">
            <table className="min-w-full text-center border bg-white">
              <thead>
                <tr className="bg-gray-200 border border-gray-300">
                  <th className="py-2 px-4 border">S.No</th>
                  <th className="py-2 px-4 border">Name</th>
                  <th className="py-2 px-4 border">Email</th>
                  <th className="py-2 px-4 border">Allocate</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <tr key={index} className="border border-gray-300">
                    <td className="py-2 px-4 border-r border-gray-300">{index + 1}</td>
                    <td className="py-2 px-4 border-r border-gray-300">{row.Name}</td>
                    <td className="py-2 px-4 border-r border-gray-300">{row.email}</td>
                    <td className="py-2 px-4">
                      {row.isallocated ? (
                        <span
                          className="text-green-600 cursor-pointer hover:text-blue-500"
                          onClick={() => handleAdvisorClick(row)} // ✅ Pass full staff object
                        >
                          Allocated
                        </span>
                      ) : (
                        <span
                          className="text-red-600 cursor-pointer hover:text-blue-500"
                          onClick={() => handleAllocateClick(row)}
                        >
                          Not Allocated
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
            </div>
          )}
        </div>
      </div>

      {/* Advisor Details Pop-Up */}
      {isAdvisorModalOpen && advisorData && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-xl w-[350px] sm:w-[450px]">
            <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Advisor Details</h2>

            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <div className="flex flex-col space-y-2 text-gray-700">
                <div className="flex justify-between">
                  <span className="font-semibold">Name:</span>
                  <span>{advisorData.Name}</span>
                </div>

                <div className="flex justify-between">
                  <span className="font-semibold">Email:</span>
                  <span className="text-blue-600">{advisorData.email}</span>
                </div>

                <div className="flex justify-between">
                  <span className="font-semibold">Year:</span>
                  <span>{advisorData.year || "N/A"}</span>
                </div>

                <div className="flex justify-between">
                  <span className="font-semibold">Semester:</span>
                  <span>{advisorData.semester || "N/A"}</span>
                </div>

                <div className="flex justify-between">
                  <span className="font-semibold">Section:</span>
                  <span>{advisorData.section || "N/A"}</span>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-between mt-6">
              <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700" onClick={handleDeallocateClick}>
                Deallocate
              </button>
              <button className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700" onClick={() => setIsAdvisorModalOpen(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

{isModalOpen && <Allocation onAllocate={handleAllocationSubmit} onClose={() => setIsModalOpen(false)} />}
{isAdvisorModalOpen && <AdvisorModal advisor={advisorData} onClose={() => setIsAdvisorModalOpen(false)} />}
    </>
  );
}

export default Hod2;
