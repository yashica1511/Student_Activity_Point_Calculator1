import React, { useState } from 'react';

function Allocation({ onClose, onAllocate }) {
    const [formData, setFormData] = useState({
        email: '',
        year: '',
        class: '',
        section: '',
        semester: ''
    });

    const [error, setError] = useState("");

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = () => {
        // Check if any field is empty
        if (!formData.email || !formData.year || !formData.class || !formData.section || !formData.semester) {
            setError("All fields are required!");
            return;
        }

        setError(""); // Clear error if all fields are filled
        onAllocate(formData);
        onClose();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-purple-300 p-8 rounded-lg w-[400px] sm:w-[450px] h-auto">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-5">ALLOCATE SAP COORDINATOR</h2>

                {error && <p className="text-red-600 text-center font-semibold mb-3">{error}</p>}

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
                        <label className="block text-sm font-medium text-gray-700">YEAR</label>
                        <select
                            name="year"
                            value={formData.year}
                            onChange={handleInputChange}
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                            <option value="">Select Year</option>
                            {[1, 2, 3, 4].map((year) => (
                                <option key={year} value={year}>{year}</option>
                            ))}
                        </select>
                    </div>

                    <div className="w-1/2">
                        <label className="block text-sm font-medium text-gray-700">CLASS</label>
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
                        <label className="block text-sm font-medium text-gray-700">SECTION</label>
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
                        <label className="block text-sm font-medium text-gray-700">SEMESTER</label>
                        <select
                            name="semester"
                            value={formData.semester}
                            onChange={handleInputChange}
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                            <option value="">Select Semester</option>
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                                <option key={sem} value={sem}>{sem}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="flex justify-between mt-6">
                    <button
                        onClick={onClose}
                        className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
                    >
                        CANCEL
                    </button>

                    <button
                        onClick={handleSubmit}
                        className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                    >
                        ALLOCATE
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Allocation;
