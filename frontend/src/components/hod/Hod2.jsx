import MainPage from '../../Mainpage';
import { useState } from 'react';
import Allocation from './Allocation';

function Hod2() {
    const [data, setData] = useState([
        { sNo: 1, name: 'Thangamani', email: 'thangamani.ai@kongu.ac.in', allocated: false, advisor: null },
        { sNo: 2, name: 'Santhiya', email: 'santhiya.ai@kongu.ac.in', allocated: false, advisor: null },
        { sNo: 3, name: 'Sri Kiruthika', email: 'srikiruthika.ai@kongu.ac.in', allocated: false, advisor: null },
    ]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);
    const [advisorDetails, setAdvisorDetails] = useState(null); // For displaying advisor data when allocated
    const [isAdvisorDataModal, setIsAdvisorDataModal] = useState(false); // New state to track if it's advisor data modal

    // Open allocation modal
    const handleAllocateClick = (index) => {
        setSelectedRow(index);
        setIsAdvisorDataModal(false); // Ensure this is for allocation, not advisor data
        setIsModalOpen(true);
    };

    // Update allocation details on submit
    const handleAllocationSubmit = (details) => {
        setData(prevData => {
            const newData = [...prevData];
            newData[selectedRow].allocated = true;
            newData[selectedRow].advisor = details; // Save the allocated advisor details
            return newData;
        });
        setIsModalOpen(false); // Close the modal after submitting
    };

    // Show advisor details in a popup
    const handleAdvisorDataClick = (index) => {
        setSelectedRow(index);
        setAdvisorDetails(data[index].advisor); // Set the advisor details for the popup
        setIsAdvisorDataModal(true); // Set the modal type to advisor data
        setIsModalOpen(true);
    };

    // Deallocate and change back to "Not Allocated"
    const handleDeallocateClick = (index) => {
        setData(prevData => {
            const newData = [...prevData];
            newData[index].allocated = false;
            newData[index].advisor = null; // Clear the advisor details
            return newData;
        });
    };

    return (
        <>
            <MainPage />
            <div className="fixed inset-0 flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 mt-12 mb-12">
                <div className="w-full sm:w-full md:w-3/4 lg:w-2/3 xl:w-1/2 2xl:w-[80vw] min-h-screen sm:min-h-[80vh] bg-white rounded-xl flex flex-col items-center p-6 sm:p-8 md:p-10 lg:p-12">
                    <div className="relative w-12 h-12 mt-6">
                        <img src="../../images/logo.png" alt="Logo" className="w-full h-full rounded-lg border border-gray-400" />
                    </div>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mt-6 mb-8 text-gray-700">
                        DEPARTMENT OF ARTIFICIAL INTELLIGENCE
                    </h1>
                    <div className="w-full sm:w-full overflow-hidden sm:overflow-auto sm:max-h-[400px] mt-8">
                        <div className="overflow-x-auto overflow-y-auto max-h-[300px] sm:max-h-[400px] w-full">
                            <table className="min-w-full text-center border-collapse bg-white">
                                <thead>
                                    <tr className="bg-gray-200 border border-gray-300">
                                        <th className="py-2 px-4 border-r border-gray-300" style={{ width: '15%' }}>S.No</th>
                                        <th className="py-2 px-4 border-r border-gray-300" style={{ width: '25%' }}>Name</th>
                                        <th className="py-2 px-4 border-r border-gray-300" style={{ width: '40%' }}>Email</th>
                                        <th className="py-2 px-4" style={{ width: '20%' }}>Allocate</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((row, index) => (
                                        <tr key={index} className="border border-gray-300">
                                            <td className="py-2 px-4 border-r border-gray-300">{row.sNo}</td>
                                            <td className="py-2 px-4 border-r border-gray-300">{row.name}</td>
                                            <td className="py-2 px-4 border-r border-gray-300">{row.email}</td>
                                            <td className="py-2 px-4">
                                                {row.allocated ? (
                                                    <div className="relative group">
                                                        <span className="text-green-600 cursor-pointer">Allocated</span>
                                                        <div className="absolute hidden group-hover:flex flex-col bg-white border border-gray-300 p-2 shadow-lg top-6">
                                                            <span
                                                                className="cursor-pointer text-blue-600 hover:text-blue-800 m-2"
                                                                onClick={() => handleAdvisorDataClick(index)}
                                                            >
                                                                Advisor Data
                                                            </span>
                                                            <span
                                                                className="cursor-pointer text-red-600 hover:text-red-800 m-2"
                                                                onClick={() => handleDeallocateClick(index)}
                                                            >
                                                                Deallocate
                                                            </span>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <span
                                                        className="text-red-600 cursor-pointer hover:text-blue-500"
                                                        onClick={() => handleAllocateClick(index)}
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
                </div>
            </div>
            
            {isModalOpen && isAdvisorDataModal && advisorDetails ? (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-lg font-bold mb-4">Advisor Details</h2>
                        <p><strong>Name:</strong> {advisorDetails.name}</p>
                        <p><strong>Email:</strong> {advisorDetails.email}</p>
                        <button
                            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
                            onClick={() => setIsModalOpen(false)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            ) : (
                isModalOpen && <Allocation onAllocate={handleAllocationSubmit} onClose={() => setIsModalOpen(false)} />
            )}
        </>
    );
}

export default Hod2;
