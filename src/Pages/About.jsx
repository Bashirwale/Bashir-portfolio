import { motion } from "framer-motion";
function About() {
  return (
    <motion.div
      className="h-screen text-yellow-100 pt-6 mb-4 md:py-16 px-8  flex-col flex md:flex-row md:gap-4 md:px-14 md:items-start"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exist={{ opacity: 0 }}
    >
      <div className="mb-4 md:w-3/5">
        <h3 className="text-yellow-400 text-xl text-center font-bold mb-2">
          Get to Know me
        </h3>

        <p className="sm:text-xs text-sm md:text-base">
          Hello, my name is Bashir, I'm a Front-End Web Developer from Nigeria,
          I have a degree in Information and Communication Science. I'm
          interested in building the Front-end of Websites and Web Applications
          that leads to the success of the overall product and I'm always open
          to discussing new projects and opportunities to collaborate. My goal
          is to provide seamless and engaging user experiences that drive
          business results.If you have a good opportunity that matches my skills
          and experience then don't hesitate to contact me.
        </p>
      </div>
      <div className="md:w-2/4">
        <h3 className="text-yellow-400 text-xl font-bold mb-2">My Skills</h3>
        <ul className="grid grid-cols-3 gap-2">
          <li className="text-base font-medium rounded-md p-2 text-center text-yellow-900 bg-yellow-600">
            HTML
          </li>
          <li className="text-yellow-400 text-base font-medium rounded-md p-2 text-center bg-yellow-200 ">
            CSS
          </li>
          <li className="text-base font-medium rounded-md p-2 text-center text-yellow-900 bg-yellow-600 ">
            JavaScript
          </li>
          <li className="text-yellow-400 text-base font-medium rounded-md p-2 text-center bg-yellow-200 ">
            SASS
          </li>
          <li className="text-base font-medium rounded-md p-2 text-center text-yellow-900 bg-yellow-600 ">
            Tailwind
          </li>
          <li className="text-yellow-400 text-base font-medium rounded-md p-2 text-center bg-yellow-200 ">
            React
          </li>
          <li className="text-base font-medium rounded-md p-2 text-center text-yellow-900 bg-yellow-600 ">
            Github
          </li>
          <li className="text-yellow-400 text-base font-medium rounded-md p-2 text-center bg-yellow-200 ">
            Responsive Design
          </li>
          <li className="text-base font-medium rounded-md p-2 text-center text-yellow-900 bg-yellow-600 ">
            Terminal
          </li>
        </ul>
      </div>
    </motion.div>
  );
}
export default About;
