import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./Components/AnimatedRoutes";
import Header from "./Components/Header";

import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="relative min-w-min h-full">
      <Router>
        <Header />
        <AnimatedRoutes />
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
