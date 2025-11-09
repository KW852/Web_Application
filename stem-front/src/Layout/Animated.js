import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Careers from "../Pages/Careers";
import Micro from "../Pages/Micro";
import Arduino from "../Pages/Arduino";
import Scratch from "../Pages/Scratch";
import Python from "../Pages/Python";
import MIT from "../Pages/MIT";
import VEX from "../Pages/VEX";
import Login from "../Pages/Login";
import Admin from "../Pages/Admin";

function Animated() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Careers" element={<Careers />} />
                <Route path="/Micro" element={<Micro />} />
                <Route path="/Arduino" element={<Arduino />} />
                <Route path="/Scratch" element={<Scratch />} />
                <Route path="/Python" element={<Python />} />
                <Route path="/MIT" element={<MIT />} />
                <Route path="/VEX" element={<VEX />}/>
                <Route path="/Login" element={<Login />}/>
                <Route path="/Admin" element={<Admin />}/>
            </Routes>
        </AnimatePresence>

    );
};

export default Animated;