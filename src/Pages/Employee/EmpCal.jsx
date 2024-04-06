import React, { useState } from "react";
import {
    add,
    eachMonthOfInterval,
    eachYearOfInterval,
    eachDayOfInterval,
    endOfMonth,
    endOfWeek,
    format,
    getDay,
    isSameMonth,
    isToday,
    parse,
    startOfToday,
    startOfMonth,
    startOfWeek,
} from "date-fns";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { capitalizeFirstLetter } from "./function";

export default function EmpCal() {
    const [currMonth, setCurrMonth] = useState(format(startOfToday(), "MMM-yyyy"));
    const [selectedDate, setSelectedDate] = useState(null);
    const [showPopup, setShowPopup] = useState(false);

    let firstDayOfMonth = parse(currMonth, "MMM-yyyy", new Date());

    const holidays = [0];

    const dummyEmployeeAttendance = {
        "2024-04-01": "present",
        "2024-04-02": "absent",
        "2024-04-03": "leave",
        "2024-04-04": "present",
        "2024-04-05": "absent",
        "2024-04-06": "present",
        "2024-04-07": "present",
        "2024-04-08": "leave",
        "2024-04-09": "absent",
        "2024-04-10": "present",
        "2024-04-11": "present",
        "2024-04-12": "present",
        "2024-04-13": "absent",
        "2024-04-14": "present",
        "2024-04-15": "absent",
        "2024-04-16": "present",
        "2024-04-17": "present",
        "2024-04-18": "absent",
        "2024-04-19": "present",
        "2024-04-20": "present",
        "2024-04-21": "present",
        "2024-04-22": "present",
        "2024-04-23": "absent",
        "2024-04-24": "present",
        "2024-04-25": "absent",
        "2024-04-26": "present",
        "2024-04-27": "present",
        "2024-04-28": "present",
        "2024-04-29": "present",
        "2024-04-30": "present",
    };

    const daysInMonth = eachDayOfInterval({
        start: startOfWeek(startOfMonth(firstDayOfMonth)),
        end: endOfWeek(endOfMonth(firstDayOfMonth)),
    });

    const getPrevMonth = () => {
        const firstDayOfPrevMonth = add(firstDayOfMonth, { months: -1 });
        setCurrMonth(format(firstDayOfPrevMonth, "MMM-yyyy"));
    };

    const getNextMonth = () => {
        const firstDayOfNextMonth = add(firstDayOfMonth, { months: 1 });
        setCurrMonth(format(firstDayOfNextMonth, "MMM-yyyy"));
    };

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    const handleDateClick = (date) => {
        setSelectedDate(date);
        togglePopup();
    };

    const getDayStatus = (day) => {
        const formattedDate = format(day, "yyyy-MM-dd");
        if (formattedDate in dummyEmployeeAttendance) {
            return dummyEmployeeAttendance[formattedDate];
        }
        if (getDay(day) === 0 || holidays.includes(getDay(day))) {
            return "holiday";
        }
        return "not-available";
    };

    return (
        <div>
            <div className="p-8   flex items-center justify-center ">
                <div className="w-[900px] h-[600px]">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                            <p className="font-semibold text-xl mr-4">{format(firstDayOfMonth, "MMMM yyyy")}</p>
                        </div>
                        <div className="flex items-center justify-evenly gap-6 sm:gap-12">
                            <ChevronLeftIcon className="w-6 h-6 cursor-pointer" onClick={getPrevMonth} />
                            <ChevronRightIcon className="w-6 h-6 cursor-pointer" onClick={getNextMonth} />
                        </div>
                    </div>
                    <hr className="my-6" />
                    <div className="grid grid-cols-7 gap-1 sm:gap-2 place-items-center">
                        {["sun", "mon", "tue", "wed", "thu", "fri", "sat"].map((day, idx) => (
                            <div key={idx} className="font-semibold">
                                {capitalizeFirstLetter(day)}
                            </div>
                        ))}
                    </div>
                    <div className="grid grid-cols-7 gap-1 sm:gap-2 mt-2 place-items-center overflow-y-auto">
                        {daysInMonth.map((day, idx) => (
                            <div key={idx} className={`col-start-${getDay(day) + 1}`}>
                                <p
                                    className={`cursor-pointer flex items-center justify-center font-semibold h-8 w-8 rounded-md border ${
                                        getDayStatus(day) === "holiday"
                                            ? "border-blue-500 text-blue-500"
                                            : getDayStatus(day) === "present"
                                            ? "border-green-500 text-green-500"
                                            : getDayStatus(day) === "absent"
                                            ? "border-red-500 text-red-500"
                                            : getDayStatus(day) === "leave"
                                            ? "border-orange-500 text-orange-500"
                                            : "border-gray-400 text-gray-400"
                                    }`}
                                    onClick={() => handleDateClick(day)}
                                >
                                    {format(day, "d")}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {showPopup && (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-50 z-50">
        <div className="bg-white p-8 rounded-md shadow-md">
            <p className="text-lg font-semibold mb-4">Selected Date: {format(selectedDate, "MMMM dd, yyyy")}</p>
            <div className="mb-4">
                <p className="text-sm text-gray-600">Working Hours:</p>
                <div className="h-4 bg-gray-200 rounded-md overflow-hidden">
                    <div className="h-full bg-green-500" style={{ width: '60%' }}></div> {/* Adjust width dynamically based on working hours */}
                </div>
            </div>
            <div className="mb-4">
                <label htmlFor="remark" className="block text-sm font-medium text-gray-700 mb-1">Remark:</label>
                <input id="remark" className="w-full h-20 border-black-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"></input>
            </div>
            <div className="flex justify-end">
                <button className="mr-2 px-4 py-2 bg-blue-500 text-white rounded-md" onClick={togglePopup}>Close</button>
            </div>
        </div>
    </div>
)}

        </div>
    );
}
