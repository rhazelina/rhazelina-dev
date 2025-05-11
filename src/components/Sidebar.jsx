import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBook, FaPalette, FaCamera, FaDoorOpen, FaExternalLinkAlt } from "react-icons/fa";

const Sidebar = ({ darkMode }) => {
  const [imgError, setImgError] = useState(false);
  
  const profilePhoto = "https://avatars.githubusercontent.com/u/198774902?v=4";
  const defaultAvatar = (
    <div className="w-full h-full flex items-center justify-center bg-gray-300 dark:bg-gray-600 rounded-full">
      <span className="text-4xl">👤</span>
    </div>
  );

  const projects = [
    {
      id: 1,
      name: "Arsiku | Blog",
      icon: <FaBook className="text-white text-lg" />,
      colorFrom: "from-amber-400",
      colorTo: "to-amber-600",
      href: "https://arshiku.vercel.app/",
      external: true
    },
    {
      id: 2,
      name: "Kiirohana",
      icon: <FaPalette className="text-white text-lg" />,
      colorFrom: "from-blue-400",
      colorTo: "to-blue-600",
      href: "",
      disabled: true
    },
    {
      id: 3,
      name: "Kmina Studio",
      icon: <FaCamera className="text-white text-lg" />,
      colorFrom: "from-purple-400",
      colorTo: "to-purple-600",
      // href: "/projects/kmina"
      disabled: true
    },
    {
      id: 4,
      name: "ZnM Portal",
      icon: <FaDoorOpen className="text-white text-lg" />,
      colorFrom: "from-green-400",
      colorTo: "to-green-600",
      // href: "/projects/znm"
      disabled: true
    }
  ];

  return (
    <div className={`w-full md:w-72 bg-[#745F3C] dark:bg-[#1e1e1e] text-white flex flex-col py-6 px-4 transition-colors duration-300 h-full ${darkMode ? 'dark' : ''}`}>
      <div className="flex flex-col items-center mb-8">
        <div className="w-24 h-24 rounded-full border-2 border-white/30 shadow-lg mb-4 overflow-hidden relative group">
          {imgError ? (
            defaultAvatar
          ) : (
            <>
              <img 
                src={profilePhoto} 
                alt="Profile" 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                onError={() => setImgError(true)}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-xs font-medium bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">View Profile</span>
              </div>
            </>
          )}
        </div>
        <h1 className="text-xl font-bold tracking-tight">Arie Helvetica | Rhazel1na</h1>
        <p className="text-sm text-white/80 mt-1">ꦫꦄꦗ꦳ꦺꦭꦶꦤ</p>
      </div>
      
      <div className="mb-8 px-3">
        <p className="text-sm text-white/80 leading-relaxed">
          Hi, I'm Rhazelina. Just an ordinary human. I'm the same as you, wanting to live a long and happy life. 
          May we meet each other even in different realms.
        </p>
      </div>
      
      <div className="mt-auto px-2">
        <div className="border-t border-white/10 pt-5">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xs font-semibold text-white/70 uppercase tracking-wider">My Projects</h3>
            <span className="text-xs text-white/50">{projects.length} projects</span>
          </div>
          
          <div className="space-y-3">
            {projects.map((project) => (
              <Link 
                key={project.id}
                to={project.href} 
                onClick={(e) => project.disabled ? e.preventDefault() : null}
                className="block group"
              >
                <div className={`flex items-center justify-between rounded-lg p-3 border transition-all duration-200
                  ${project.disabled 
                    ? "bg-white/5 border-white/5 cursor-not-allowed" 
                    : "bg-white/5 backdrop-blur-sm border-white/10 group-hover:border-white/30 group-hover:bg-white/10"}
                  `}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center bg-gradient-to-br ${project.colorFrom} ${project.colorTo}`}>
                      {project.icon}
                    </div>
                    <div>
                      <span className={`font-medium text-sm ${project.disabled ? "text-white/60" : ""}`}>
                        {project.name}
                      </span>
                      {project.disabled && (
                        <span className="block text-xs text-white/40">Coming soon</span>
                      )}
                    </div>
                  </div>
                  {!project.disabled && (
                    <div className={`flex items-center text-xs px-2 py-1 rounded transition-colors
                      ${project.external ? "bg-blue-500/20 text-blue-300" : "bg-white/10 text-white/70"}
                      group-hover:${project.external ? "bg-blue-500/30" : "bg-white/20"}
                    `}>
                      {project.external ? (
                        <>
                          <span className="mr-1">External</span>
                          <FaExternalLinkAlt className="text-xs" />
                        </>
                      ) : "View"}
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
