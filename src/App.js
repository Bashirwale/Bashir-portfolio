import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./Components/AnimatedRoutes";
import Header from "./Components/Header";

import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="relative bg-black opacity-90 h-full transition-all duration-500">
      <Router>
        <Header />
        <AnimatedRoutes />
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
