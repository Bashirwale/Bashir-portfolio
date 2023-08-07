import { motion } from "framer-motion";
function About() {
  return (
    <motion.div
      className="mt-4 py-4 px-5 sm:px-6 md:px-8 lg:px-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exist={{ opacity: 0 }}
    >
      <div className="text-yellow-100 font-normal">
        <h3 className="text-yellow-500 text-3xl text-center font-bold mb-4">
          Get to Know me
        </h3>
        <p className="text-sm md:text-base leading-6">
          A Front-end engineer on a mission to build exceptional web experiI
          bring creativity and attention to detail to every project I work on.
        </p>
        <p className="text-sm md:text-base leading-6">
          I believe in the power of collaboration and enjoy working with diverse
          teams to create seamless user interfaces.
        </p>
        <p className="text-sm md:text-base leading-6">
          When I'm not coding, I'm likely watching or playing football.I'm
          always excited to connect with fellow developers and discuss potential
          collaborations.
        </p>
        <p className="text-sm md:text-base leading-6">
          Let's connect and create something amazing together!. You can also
          explore my work and projects in detail.
        </p>
      </div>
      <div className="mt-6 mb-16">
        <h3 className="text-yellow-500 text-xl font-bold mb-4">My Skills</h3>
        <ul className="grid grid-cols-3 gap-3">
          <li className="text-sm md:text-base font-medium rounded-md p-1 md:p-2 text-center text-slate-900 bg-yellow-500 shadow-md shadow-yellow-200">
            React JS
          </li>
          <li className="text-slate-900 text-sm md:text-base font-medium rounded-md p-1 md:p-2 text-center bg-yellow-200 shadow-md shadow-yellow-300">
            Typescript
          </li>
          <li className="text-sm md:text-base font-medium rounded-md p-1 md:p-2 text-center text-slate-900 bg-yellow-500 shadow-md shadow-yellow-200 ">
            JavaScript
          </li>
          <li className="text-slate-900 text-sm md:text-base font-medium rounded-md p-1 md:p-2 text-center bg-yellow-200 shadow-md shadow-yellow-300">
            HTML
          </li>
          <li className="text-sm md:text-base font-medium rounded-md p-1 md:p-2 text-center text-slate-900 bg-yellow-500 shadow-md shadow-yellow-200">
            CSS
          </li>
          <li className="text-slate-900 text-sm md:text-base font-medium rounded-md p-1 md:p-2 text-center bg-yellow-200 shadow-md shadow-yellow-300">
            SASS
          </li>
          <li className="text-sm md:text-base font-medium rounded-md p-1 md:p-2 text-center text-slate-900 bg-yellow-500 shadow-md shadow-yellow-200">
            Tailwind CSS
          </li>
          <li className="text-slate-900 text-sm md:text-base font-medium rounded-md p-1 md:p-2 text-center bg-yellow-200 shadow-md shadow-yellow-300 ">
            Firebase Store
          </li>
          <li className="text-sm md:text-base font-medium rounded-md p-1 md:p-2 text-center text-slate-900 bg-yellow-500 shadow-md shadow-yellow-200">
            Styled Component
          </li>
        </ul>
      </div>
    </motion.div>
  );
}
export default About;
