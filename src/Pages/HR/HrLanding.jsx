import React from 'react'
import HrNav from '../../Layout/Navbar/HrNav'
import { Routes, Route } from 'react-router-dom';
import HrMaster from './HrMaster';
import HrNotif from './HrNotif';


export default function HrLanding() {
  return (
    <>
    <HrNav/>
    <Routes>
        <Route path="/" element={< HrMaster/>} /> 
        <Route path="/notif" element={<HrNotif/>} /> 

      </Routes>
    </>
 )
}
