import React, { useState, useEffect } from 'react';

export default function EmpWorktime() {
    const [workHours, setWorkHours] = useState(8); // Initial work hours
    const [startTime, setStartTime] = useState(null); // Start time of work
    const [timerRunning, setTimerRunning] = useState(false); // State to track if the timer is running
    const [timer, setTimer] = useState(null); // State to store the timer reference

    // Function to start the timer
    const startTimer = () => {
        const currentTime = new Date();
        setStartTime(currentTime);
        setTimerRunning(true);
        const intervalId = setInterval(() => {
            const elapsedTime = (new Date() - currentTime) / 1000;
            const remainingHours = Math.max(0, workHours - elapsedTime / 3600);
            setWorkHours(remainingHours);
        }, 1000);
        setTimer(intervalId);
    };

    // Function to handle taking a break
    const takeBreak = () => {
        clearInterval(timer);
        setTimerRunning(false);
    };

    // Function to handle leaving work early
    const leaveEarly = () => {
        clearInterval(timer);
        setWorkHours(0);
        setTimerRunning(false);
    };

    // Function to resume work
    const resumeWork = () => {
        startTimer();
    };

    useEffect(() => {
        // Clear the timer when work hours reach 0
        if (workHours <= 0) {
            clearInterval(timer);
            setTimerRunning(false);
        }
    }, [workHours, timer]);

    const formatTime = (time) => {
        const hours = Math.floor(time);
        const minutes = Math.floor((time - hours) * 60);
        const seconds = Math.floor(((time - hours) * 60 - minutes) * 60);
        return `${hours}h ${minutes}m ${seconds}s`;
    };

    return (
        <div className="p-8">
            <div className="max-w-md mx-auto bg-white shadow-md rounded-md overflow-hidden">
                <div className="p-6">
                    <h2 className="text-xl font-semibold mb-4">Employee Working Time</h2>
                    <div className="flex justify-between items-center">
                        <p className="text-gray-600">Remaining Work Time:</p>
                        <p className="font-semibold">{formatTime(workHours)}</p>
                    </div>
                    {startTime && (
                        <p className="text-gray-600 mt-2">Started at: {startTime.toLocaleTimeString()}</p>
                    )}
                    {workHours > 0 && !timerRunning && (
                        <button className="bg-green-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-green-600" onClick={startTimer}>Start Work</button>
                    )}
                    {timerRunning && (
                        <div className="flex justify-between mt-4">
                            <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600" onClick={takeBreak}>Take Break</button>
                            <button className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600" onClick={leaveEarly}>Leave Early</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
