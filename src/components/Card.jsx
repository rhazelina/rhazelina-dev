import React from "react";

const Card = ({ title, description }) => {
  return (
    <div className={`bg-white dark:bg-[#2f2f2f] rounded-lg p-4 flex flex-col md:flex-row items-start md:items-center gap-4 shadow-sm border border-gray-200 dark:border-gray-600 transition-all hover:shadow-md animate-fade-in-up`}>
      <div className="w-full md:w-40 h-40 bg-gray-200 dark:bg-gray-500 rounded-lg border border-gray-300 dark:border-gray-600" />
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default Card;