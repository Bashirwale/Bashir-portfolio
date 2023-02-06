import { motion } from "framer-motion";
function Intro() {
  return (
    <motion.div
      className="h-full pt-40 pb-56 md:pb-72 px-8 md:w-3/5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exist={{ opacity: 0 }}
    >
      <p className="text-yellow-100 mb-6 text-lg font-semibold ">
        Hello, I'm Bashir
      </p>
      <p className="text-yellow-100 text-4xl font-bold mb-8 tracking-widest ">
        A FRONT-END
        <br />
        DEVELOPER
      </p>
      <p className="text-yellow-100 text-base font-semibold">
        I am a highly skilled and motivated front-end developer with a passion
        for creating visually stunning and intuitive websites and web
        applications
      </p>
    </motion.div>
  );
}

export default Intro;
