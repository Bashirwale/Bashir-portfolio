import Project from "../Components/Project";
import contactList from "../assets/contactList.PNG";
import blackjack from "../assets/blackjack.PNG";
import expenseapp from "../assets/expense-app.PNG";
import feedback from "../assets/feedback.PNG";
import housemarketplace from "../assets/housemarket.PNG";
import musicaApp from "../assets/musica-app.PNG";
import kingsleyeze from "../assets/kingsleyeze.PNG";
import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      name: "Contact-List-app",
      description: "Creates contact list from random user api",
      image: contactList,
      link: "https://contact-l-ist-app.vercel.app/",
    },
    {
      name: "expense-tracker-app",
      description: "Tracker your monthly expenses",
      image: expenseapp,
      link: "https://expense-tracker-app-gilt.vercel.app/",
    },
    {
      name: "housemarket-place-app",
      description: "You sell and rent your house",
      image: housemarketplace,
      link: "https://house-marketplace-app-mu.vercel.app/",
    },
    {
      name: "Feedback-app",
      description: "gets users feedback",
      image: feedback,
      link: "https://incredible-crumble-ce59ef.netlify.app/",
    },
    {
      name: "Blackjact-Game",
      description: "play blackjack",
      image: blackjack,
      link: "https://bashirwale.github.io/black-jack/",
    },
    {
      name: "Musica-app",
      description: "Music player",
      image: musicaApp,
      link: "https://stupendous-cactus-a0f587.netlify.app/",
    },
    {
      name: "kingsley-Ukeje",
      description: "A clone of kingsley Ukeje portfolio website",
      image: kingsleyeze,
      link: "https://bashirwale.github.io/updatedkingsley-/",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exist={{ opacity: 0 }}
      className="text-yellow-100 p-8 mb-16 mx-auto"
    >
      <h3 className="text-yellow-400 text-xl text-center font-bold mb-2">
        My Projects
      </h3>
      <p className="text-base text-center font-medium">
        Take a look at my work samples to see the impact I have made for my
        clients, and feel free to contact me for more information.
      </p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 ">
        {projects.map((project) => (
          <Project
            key={project.name}
            name={project.name}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default Projects;
