import React from 'react';

export default function EmpSalary() {
    const employeeSalary = 5000; // Example salary amount
    const previousMonthStatus = "Got"; // Example status for the previous month

    return (
        <div className="p-8">
            <div className="max-w-md mx-auto bg-white shadow-md rounded-md overflow-hidden">
                <div className="p-6">
                    <h2 className="text-xl font-semibold mb-4">Employee Salary</h2>
                    <div className="flex justify-between">
                        <p className="text-gray-600">Salary:</p>
                        <p className="font-semibold">${employeeSalary}</p>
                    </div>
                    <div className="flex justify-between mt-2">
                        <p className="text-gray-600">Previous Month Status:</p>
                        <p className={`${previousMonthStatus === "Got" ? "text-green-500" : "text-red-500"} font-semibold`}>{previousMonthStatus}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
