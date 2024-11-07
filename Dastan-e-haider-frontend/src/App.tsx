import { BrowserRouter as Router, Routes } from "react-router-dom";
import { Suspense, useEffect } from "react";
import Loader from "./components/Loader";
import AOS from 'aos'
import 'aos/dist/aos.css'
// import HomeBanner from "./components/HomeBanner";
// import Hero from "./components/Hero";
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
      {/* <Hero /> */}
      {/* <HomeBanner /> */}
      <Suspense fallback={<Loader />}>
        <Routes>
          
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App