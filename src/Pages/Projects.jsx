import Project from "../Components/Project";
import { motion } from "framer-motion";

function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exist={{ opacity: 0 }}
      className="text-yellow-100 px-5 sm:px-6 md:px-8 lg:px-12 pt-6 mb-24"
    >
      <h3 className="text-yellow-500 text-3xl text-center font-bold mb-2">
        My Projects
      </h3>
      <p className="text-sm md:text-base text-center font-medium mb-4">
        Take a look at my work samples to see the impact I have made for my
        clients, and feel free to contact me for more information.
      </p>
      <div className="grid grid-cols-1 gap-4 md:gap-6  sm:grid-cols-2 lg:grid-cols-3">
        <Project />
      </div>
    </motion.div>
  );
}

export default Projects;
