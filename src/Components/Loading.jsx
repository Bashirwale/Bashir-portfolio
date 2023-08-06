import React from "react";

const Loading = () => {
  return (
    <div className="absolute top-0 right-0 w-full h-screen bg-slate-900  flex items-center justify-center">
      <div className="flex items-center gap-2 animate-pulse transition-all duration-1000">
        <img
          src="https://avatars.githubusercontent.com/u/87895557?v=4"
          alt="logo"
          className="h-6 w-6 rounded-full "
        />
        <p className="text-yellow-100 text-base font-bold cursor-pointer tracking-wider">
          Bashirwale
        </p>
      </div>
    </div>
  );
};

export default Loading;
