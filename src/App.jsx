import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import Home from './pages/Home';
// import NavigationBar from './components/Navbar'
import './App.css'
import Test from './pages/reference';

function App() {
  useEffect(() => {
    AOS.init({
        duration: 1000, // Animation duration
        easing: "ease-in-out", // Easing function
        offset: 200, // Offset from the top
        once: true, // Whether animation should happen only once
    });
}, []);

  return (
    <>
    <Router>
        {/* <NavigationBar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
        </Routes>
    </Router>
    </>
  )
}

export default App
