import React from "react";

const ProjectDetailsSkeleton = () => {
  return (
    <div className="text-yellow-100 px-5 sm:px-6 md:px-8 lg:px-12 pt-6 mb-24">
      <div className="max-w-2xl mx-auto">
        <div className="h-8 w-3/4 bg-gray-300 rounded mb-4 animate-pulse"></div>
        <div className="h-64 w-full bg-gray-300 rounded-lg shadow-md border border-slate-900 mb-6 animate-pulse"></div>
        <div className="bg-slate-800 p-4 rounded-lg mb-6">
          <div className="h-4 bg-gray-300 w-5/6 rounded animate-pulse mb-2"></div>
          <div className="h-4 bg-gray-300 w-2/3 rounded animate-pulse"></div>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2 h-6 bg-gray-300 w-1/4 rounded animate-pulse">
            {" "}
          </h2>
          <ul className="list-disc list-inside text-yellow-100">
            <li className="text-sm text-green-600 h-4 bg-gray-300 w-3/4 rounded animate-pulse mb-2"></li>
            <li className="text-sm text-green-600 h-4 bg-gray-300 w-2/3 rounded animate-pulse"></li>
          </ul>
        </div>
        <a
          href="/"
          className="inline-block bg-slate-900 rounded-lg px-6 py-1 mt-4 text-yellow-500 shadow-sm text-center shadow-yellow-50 hover:underline"
        >
          View Site
        </a>
      </div>
    </div>
  );
};

export default ProjectDetailsSkeleton;
