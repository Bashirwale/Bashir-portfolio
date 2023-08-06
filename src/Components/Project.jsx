/* eslint-disable no-sequences */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import client from "../client";

function Project() {
  const [dataProjects, setDataProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = `*[_type == "project"]{
          _id,
          mainImage {
            asset->{
              url
            }
          }
        }`;
        const response = await client.fetch(query);
        setDataProjects(response); // Store the fetched data in state
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const LoadingSkeleton = () => {
    return (
      <div className="rounded-md w-full h-56 md:h-64 animate-pulse bg-gray-300"></div>
    );
  };

  return (
    <>
      {loading ? (
        <LoadingSkeleton />
      ) : (
        dataProjects.map((project) => (
          <div key={project._id}>
            {project.mainImage && project.mainImage.asset && (
              <img
                className="rounded-md w-full h-56 md:h-64 shadow-md shadow-yellow-100 border border-slate-900"
                src={project.mainImage.asset.url}
                alt={project.title}
              />
            )}
            <Link
              to={`/projects/${project._id}`}
              className="bg-yellow-100 text-center p-2 text-slate-900 font-bold text-base mt-2 rounded"
            >
              View Project
            </Link>
          </div>
        ))
      )}
    </>
  );
}

export default Project;
