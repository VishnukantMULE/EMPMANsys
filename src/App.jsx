import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Landing from './Pages/Home/Landing'
import Navbar from './Layout/Navbar/Navbar'
import Footer from './Layout/Footer/Footer'
import EmpMaster from './Pages/Employee/EmpMaster'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmpLogin from './Auth/Employee/EmpLogin'
import EmpRegister from './Auth/Employee/EmpRegister'
import HrLanding from './Pages/HR/HrLanding'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
      <Route path="/" element={<Landing />} />

      <Route path="/emp" element={<EmpMaster />} />
      <Route path="/emplogin" element={<EmpLogin />} />
      <Route path="/empreg" element={<EmpRegister />} />

      <Route path="/hr" element={<HrLanding />} />







    {/* <Navbar/> */}
    {/* <Landing/> */}

    {/* <Footer/> */}
      </Routes>
    </Router>
    </>
  )
}

export default App
