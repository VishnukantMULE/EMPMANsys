    import React from "react";

    export default function EmpProfile() {
    return (
        <div className="p-8">


      <div className="max-w-md mx-auto bg-white shadow-md rounded-md overflow-hidden">        <img
            src="https://source.unsplash.com/150x150/?portrait?3"
            alt=""
            className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
            />
        <div className="space-y-4 text-center divide-y dark:divide-gray-300">
            <div className="my-2 space-y-1">
            <h2 className="text-xl font-semibold sm:text-2xl">Leroy Jenkins</h2>
            <p className="px-5 text-xs sm:text-base dark:text-gray-600">
                Full-stack developer
            </p>
            </div>
        </div>
        </div>
            </div>
    );
    }
