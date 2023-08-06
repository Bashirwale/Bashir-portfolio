import { useNavigate, useLocation } from "react-router-dom";
import { FaProjectDiagram } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import { BsFillInfoCircleFill } from "react-icons/bs";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };
  return (
    <footer className="fixed bottom-0  w-full">
      <nav className="bg-yellow-500 p-2 md:p-4 px-12 md:px-32 lg:px-48">
        <ul className=" flex items-center justify-between cursor-pointer transition-all duration-1000">
          <li
            className="flex flex-col items-center"
            onClick={() => navigate("/about")}
          >
            <BsFillInfoCircleFill
              className={
                pathMatchRoute("/about")
                  ? "text-slate-900 text-lg  md:text-2xl"
                  : "text-yellow-900 text-lg  md:text-2xl"
              }
            />
            <p
              className={
                pathMatchRoute("/about")
                  ? "text-slate-900 text-base md:text-lg font-bold"
                  : "text-yellow-900 text-base md:text-lg font-bold"
              }
            >
              About
            </p>
          </li>
          <li
            className="flex flex-col items-center"
            onClick={() => navigate("/projects")}
          >
            <FaProjectDiagram
              className={
                pathMatchRoute("/projects")
                  ? "text-slate-900 text-lg  md:text-2xl"
                  : "text-yellow-900 text-lg  md:text-2xl"
              }
            />
            <p
              className={
                pathMatchRoute("/projects")
                  ? "text-slate-900 text-base md:text-lg font-bold"
                  : "text-yellow-900 text-base md:text-lg font-bold"
              }
            >
              Projects
            </p>
          </li>
          <li
            className="flex flex-col items-center"
            onClick={() => navigate("/contact")}
          >
            <SiMinutemailer
              className={
                pathMatchRoute("/contact")
                  ? "text-slate-900 text-lg  md:text-2xl"
                  : "text-yellow-900 text-lg  md:text-2xl"
              }
            />
            <p
              className={
                pathMatchRoute("/contact")
                  ? "text-slate-900 text-base md:text-lg font-bold"
                  : "text-yellow-900 text-base md:text-lg font-bold"
              }
            >
              Contact
            </p>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Navbar;
