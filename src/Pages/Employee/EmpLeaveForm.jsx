
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function EmpLeaveForm({ onClose }) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [reason, setReason] = useState('');

  const handleSubmit = () => {
    // Your submission logic here
    console.log('Submitted');
    onClose(); // Close the form
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full">
        <h1 className="text-xl font-semibold mb-4 text-center">Apply for Leave</h1>
        <div className="mb-4">
          <label htmlFor="empName" className="block text-sm font-medium text-gray-700">Employee Name</label>
          <input
            type="text"
            id="empName"
            className="g-black-50 border border-black-500 text-black-900 placeholder-black-700 text-sm rounded-lg focus:ring-black-500 light:bg-gray-700 focus:border-black-500 block w-full p-2.5  dark:text-black-500 dark:placeholder-black-500 dark:border-black-500"
            readOnly
          />
        </div>
        <div className="date-rangepicker flex items-center mb-4">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            startDate={startDate}
            endDate={endDate}
            selectsStart
            dateFormat="MMMM d, yyyy"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mr-4"
            placeholderText="Select start date"
          />
          <span className="mx-4 text-gray-500">to</span>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            startDate={startDate}
            endDate={endDate}
            selectsEnd
            dateFormat="MMMM d, yyyy"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholderText="Select end date"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="reason" className="block text-sm font-medium text-gray-700">Reason</label>
          <textarea
  id="reason"
  rows="3"
  className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-black p-2"
  value={reason}
  onChange={(e) => setReason(e.target.value)}
  placeholder="Enter your reason here"
></textarea>

        </div>
        <div className="mb-4">
          <label htmlFor="days" className="block text-sm font-medium text-gray-700">Number of Days</label>
          <input
            type="text"
            id="days"
            value={Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1}
            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            readOnly
          />
        </div>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="mr-2 inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Close
          </button>
          <button
            onClick={handleSubmit}
            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
