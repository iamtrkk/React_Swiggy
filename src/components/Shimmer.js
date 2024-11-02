import React from "react";

const Shimmer = () => {
  return (
    <div className="flex flex-wrap ml-10">
      {Array.from({ length: 30 }).map((_, i) => (
        <div key={i} className="w-32 h-52 mr-3 mb-3 bg-slate-200"></div>
      ))}
    </div>
  );
};

export default Shimmer;
