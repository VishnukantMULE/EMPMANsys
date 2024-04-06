import React from 'react';

export default function EmpNotif({ onClose }) {
  return (
    <div className="fixed top-0 right-0 w-80 h-full flex flex-col justify-center bg-gray-900 bg-opacity-50 p-4 z-5">
      <div className="bg-white p-8 rounded-md shadow-md">
        <p className="text-xl font-semibold mb-4">Notifications</p>
        <div className="flex flex-col space-y-4">
          <div className="bg-gray-200 p-4 rounded-md">Notification 1</div>
          <div className="bg-gray-200 p-4 rounded-md">Notification 2</div>
          {/* Add more notifications here */}
        </div>
        <button onClick={onClose} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">Close</button>
      </div>
    </div>
  );
}
