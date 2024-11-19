import { BrowserRouter as Router, Routes } from "react-router-dom";
import { Suspense, useEffect } from "react";
import Loader from "./components/Loader";
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";

const App = () => {
  useEffect(()=>{
    AOS.init({
      duration: 1000,
    });
  },[]);
  return (
    <Router>
      <Navbar />
      <HeroSection />
<<<<<<< HEAD
      {/* <Hero /> */}
      {/* <HomeBanner /> */}
=======
      <CourseSection />
>>>>>>> responsivenes-home-banner
      <Suspense fallback={<Loader />}>
        <Routes>
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App