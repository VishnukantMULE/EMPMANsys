import React from 'react'
import EmpNav from '../../Layout/Navbar/EmpNav'
import { Routes, Route } from 'react-router-dom';
import EmpMaster from './EmpMaster';
import EmpNotif from './EmpNotif';


export default function EmpLanding() {
  return (
    <>
    <EmpNav/>
    <Routes>
        <Route path="/" element={<EmpMaster />} /> 
        <Route path="/notif" element={<EmpNotif />} /> 

      </Routes>

    </>
  )
}
