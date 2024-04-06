import React from "react";
import EmpCal from "./EmpCal";
import EmpProfile from "./EmpProfile";
import EmpSalary from "./EmpSalary";
import EmpWorktime from "./EmpWorktime";
import EmpNav from "../../Layout/Navbar/EmpNav";

export default function EmpMaster() {
  return (
    <>
    <EmpNav/>
    <div className="max-w-4xl mx-auto">
    <div className="flex  justify-between mb-4">
      <div className="empprfl">
        <EmpProfile />
      </div>
      <div className="empwt ml-4">
        <EmpWorktime />
      </div>
      <div className="empsal ml-4">
        <EmpSalary />
      </div>
    </div>
    <div className="empcal">
      <EmpCal />
    </div>
  </div>
    </>
  );
}
