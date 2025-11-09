import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer";
import AnimatedRoutes from "./Layout/Animated";

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />

        <main className="flex-fill">
          <AnimatedRoutes />
          {/* <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Courses" element={<Courses />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Careers" element={<Careers />} />
          </Routes> */} 
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;