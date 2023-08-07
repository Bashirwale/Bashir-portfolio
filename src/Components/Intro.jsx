import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Intro() {
  return (
    <motion.div
      className="flex flex-col justify-between text-yellow-100 px-5 sm:px-6 md:px-8 lg:px-12 pt-9"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exist={{ opacity: 0 }}
    >
      <h2 className="text-5xl font-semibold">
        Hello! <span className="text-yellow-500 text-2xl">I'm Bashir,</span>
      </h2>
      <h1 className=" text-xl sm:2xl: md:text-3xl lg:text-4xl font-bold tracking-wide mt-4 mb-6">
        Frontend Engineer
      </h1>
      <p className=" text-sm md:text-base font-normal  max-w-lg">
        Highly skilled and motivated front-end developer with a passion for
        creating visually stunning and intuitive websites and web applications.
      </p>
      <p className=" text-sm md:text-base font-normal mb-16 max-w-lg">
        With a deep love for clean code and pixel-perfect designs, I specialize
        in crafting user-friendly interfaces that leave a lasting impact.
      </p>

      <Link
        to="/projects"
        className="self-center md:self-start py-2 px-4 bg-yellow-500 text-slate-900 font-bold text-base rounded shadow-md shadow-yellow-300 text-center"
      >
        view my work
      </Link>
    </motion.div>
  );
}

export default Intro;
