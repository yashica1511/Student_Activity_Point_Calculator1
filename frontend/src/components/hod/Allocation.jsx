import React, { useState } from 'react';

function Allocation({ onClose, onAllocate }) {
    const [formData, setFormData] = useState({
        email: '',
        year: '',
        class: '',
        section: '',
        semester: ''
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = () => {
        onAllocate(formData); 
        onClose(); 
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-purple-300 p-8 rounded-lg w-[400px] sm:w-[450px] h-[450px] sm:h-[450px]">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-5 mt-4">ALLOCATE SAP COORDINATOR</h2>
                
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">STAFF EMAIL</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="abcd.22ai@kongu.edu"
                    />
                </div>

                <div className="flex space-x-4 mb-4">
                    <div className="w-1/2">
                        <label className="block text-sm font-medium text-gray-700 mt-2">YEAR</label>
                        <select
                            name="year"
                            value={formData.year}
                            onChange={handleInputChange}
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                            <option value="">Select Year</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>

                    <div className="w-1/2">
                        <label className="block text-sm font-medium text-gray-700 mt-2">CLASS</label>
                        <select
                            name="class"
                            value={formData.class}
                            onChange={handleInputChange}
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                            <option value="">Select Class</option>
                            <option value="AIDS">AIDS</option>
                            <option value="AIML">AIML</option>
                        </select>
                    </div>
                </div>
                <div className="flex space-x-4 mb-4">
                    <div className="w-1/2">
                        <label className="block text-sm font-medium text-gray-700 mt-2">SECTION</label>
                        <select
                            name="section"
                            value={formData.section}
                            onChange={handleInputChange}
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                            <option value="">Select Section</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                        </select>
                    </div>

                    <div className="w-1/2">
                        <label className="block text-sm font-medium text-gray-700 mt-2">SEMESTER</label>
                        <select
                            name="semester"
                            value={formData.semester}
                            onChange={handleInputChange}
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                            <option value="">Select Semester</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                        </select>
                    </div>
                </div>

                <button
                    onClick={handleSubmit}
                    className="mt-6 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                >
                    ALLOCATE
                </button>
            </div>
        </div>
    );
}

export default Allocation;
