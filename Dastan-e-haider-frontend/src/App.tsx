import { BrowserRouter as Router, Routes } from "react-router-dom";
import { Suspense } from "react";
import Loader from "./components/Loader";
import HomeBanner from "./components/HomeBanner";

const App = () => {
  return (
    <Router>
      <HomeBanner />
      <Suspense fallback={<Loader />}>
        <Routes>
          
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App