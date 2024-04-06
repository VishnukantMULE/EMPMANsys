import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import EmpNotif from '../../Pages/Employee/EmpNotif';
import EmpLeaveForm from '../../Pages/Employee/EmpLeaveForm';

export default function EmpNav() {
  const [showNotifPopup, setShowNotifPopup] = useState(false);
  const [showLeavePopup, setShowLeavePopup] = useState(false);

  const toggleNotifPopup = () => {
    setShowNotifPopup(!showNotifPopup);
  };

  const toggleLeavePopup = () => {
    setShowLeavePopup(!showLeavePopup);
  };

  return (
    <div className="flex justify-between items-center bg-gray-900 text-white py-4 px-8">
      <div className="flex items-center">
        <h1 className="text-xl font-semibold">Employee Portal</h1>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <button onClick={toggleNotifPopup} className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-md">Notifications</button>
          <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full h-4 w-4 flex items-center justify-center text-xs font-bold">2</span>
          {showNotifPopup && <EmpNotif onClose={toggleNotifPopup} />}
        </div>
        <button onClick={toggleLeavePopup} className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-md">Apply Leave</button>
        <NavLink to="/logout" className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-md">Logout</NavLink>
      </div>
      {showLeavePopup && <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
        <div className="bg-white p-8 rounded-md shadow-md">
          <EmpLeaveForm onClose={toggleLeavePopup} />
        </div>
      </div>}
    </div>
  );
}
