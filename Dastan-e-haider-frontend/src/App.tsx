import { BrowserRouter as Router, Routes } from "react-router-dom";
import { Suspense } from "react";
import Loader from "./components/Loader";
// import HomeBanner from "./components/HomeBanner";
import Hero from "./components/Hero";

const App = () => {
  return (
    <Router>
      <Hero />
      {/* <HomeBanner /> */}
      <Suspense fallback={<Loader />}>
        <Routes>
          
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App