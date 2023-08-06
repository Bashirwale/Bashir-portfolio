import { Routes, Route, useLocation } from "react-router-dom";
import Intro from "./Intro";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Projects from "../Pages/Projects";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import ProjectDetails from "../Pages/ProjectDetails";
import Loading from "./Loading";

function AnimatedRoutes() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <AnimatePresence>
          <Routes location={location}>
            <Route path="/" element={<Intro />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      )}
    </div>
  );
}

export default AnimatedRoutes;
