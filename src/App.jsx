import React from 'react';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Fooddiary from './pages/Fooddiary'
import Faq from './pages/Faq'
import Bmi from './pages/Bmi'
import Login from './pages/Login'
import Signup from './pages/Signup'
// Router for easy navigation
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/Login" element={<Login />} />
          {/* <Route exact path="/Fooddiary" element={<Fooddiary />} /> */}
          <Route exact path="/Faq" element={<Faq />} />
          <Route exact path="/Bmi" element={<Bmi />} />
          <Route exact path="/Signup" element={<Signup />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
