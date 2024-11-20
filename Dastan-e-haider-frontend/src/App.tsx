import { BrowserRouter as Router, Routes } from "react-router-dom";
import { Suspense, useEffect } from "react";
import Loader from "./components/Loader";
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import CourseSection from "./components/Courses/CourseSection";

const App = () => {
  useEffect(()=>{
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out', 
    once: true, 
    mirror: false, 
    });
  },[]);
  return (
    <Router>
      <Navbar />
      <HeroSection />
      <CourseSection />
      <Suspense fallback={<Loader />}>
        <Routes>
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App