import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { GrTwitter } from "react-icons/gr";
import { BsInstagram } from "react-icons/bs";
import ButtonMailto from "../Components/ButtonMailto";

function Contact() {
  return (
    <motion.div
      className="text-yellow-100 p-8 md:px-32 mx-auto h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exist={{ opacity: 0 }}
    >
      <div className="flex flex-col items-center mb-32">
        <h3 className="text-yellow-400 text-xl text-center font-bold mb-2">
          contact us now
        </h3>
        <p className="mb-6 text-center">
          If you're interested in working with a junior front-end developer who
          is passionate about creating beautiful and functional websites, I'd
          love to hear from you! You can reach me let's build something amazing
          together!.
        </p>
        <ButtonMailto
          label="send email"
          mailto="mailto:bashabdulbash@gmail.com"
        />
      </div>
      <div className="grid grid-cols-2 gap-4 px-6 md:grid-cols-4 md:px-16 mt-10 mb-16 mx-auto">
        <a
          href="https://www.linkedin.com/in/bashir-abdullahi-856861246"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="inline" /> bashirwale
        </a>
        <a
          href="https://github.com/Bashirwale"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub className="inline" /> bashirwale
        </a>
        <a
          href="https://twitter.com/bashirwale"
          target="_blank"
          rel="noreferrer"
        >
          <GrTwitter className="inline" /> bashirwale
        </a>
        <a
          href="https://www.instagram.com/bashir.wale/?igshid=ZmZhODViOGI="
          target="_blank"
          rel="noreferrer"
        >
          <BsInstagram className="inline" /> bashirwale
        </a>
      </div>
    </motion.div>
  );
}

export default Contact;
