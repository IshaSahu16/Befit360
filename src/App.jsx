import React from 'react';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Fooddiary from './pages/Fooddiary'
import Exercise from './pages/Exercise'
import Bmi from './pages/Bmi'
import Login from './pages/Login'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Fooddiary" element={<Fooddiary />} />
          <Route exact path="/Exercise" element={<Exercise />} />
          <Route exact path="/Bmi" element={<Bmi />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
