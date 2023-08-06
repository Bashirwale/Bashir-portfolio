import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import client from "../client";
import { useParams } from "react-router-dom";
import ProjectDetailsSkeleton from "../Components/ProjectDetailsSkeleton";

const ProjectDetails = () => {
  const [dataProject, setDataProject] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = `*[ _type == "project" && _id == $id]{
          _id,
          title,
          description,
          technologies,
          mainImage {
            asset->{
              url
            }
          } ,          
          url
        }`;
        const params = { id };
        const response = await client.fetch(query, params);

        if (response.length > 0) {
          setDataProject(response[0]); // Store the fetched single data in state
          setLoading(false);
        } else {
          console.log("No data found for the given ID.");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [id]);
  console.log(dataProject);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="text-yellow-100 px-5 sm:px-6 md:px-8 lg:px-12 pt-6 mb-24"
    >
      {loading ? (
        <ProjectDetailsSkeleton />
      ) : (
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl text-yellow-500 font-semibold mb-4">
            {dataProject.title}
          </h1>
          {dataProject &&
            dataProject.mainImage &&
            dataProject.mainImage.asset && (
              <img
                src={dataProject.mainImage.asset.url}
                alt={dataProject.title}
                className="w-full rounded-lg shadow-md border border-slate-900 shadow-yellow-100 mb-6"
              />
            )}
          <div className=" bg-slate-800 p-4 rounded-lg mb-6">
            <p className="text-sm sm:text-base">{dataProject.description}</p>
          </div>
          {dataProject.technologies && (
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">Technologies Used:</h2>
              <ul className="list-disc list-inside text-yellow-100">
                {dataProject.technologies.map((tech, index) => (
                  <li key={index} className="text-sm text-green-600">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {dataProject.url && (
            <a
              href={dataProject.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-slate-900 rounded-lg px-6 py-1 mt-4 text-yellow-500 shadow-sm text-center shadow-yellow-50 hover:underline"
            >
              View Site
            </a>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default ProjectDetails;
