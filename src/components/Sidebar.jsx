import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBook, FaPalette, FaCamera, FaDoorOpen } from "react-icons/fa";

const Sidebar = ({ darkMode }) => {
  const [imgError, setImgError] = useState(false);
  
  const profilePhoto = "https://avatars.githubusercontent.com/u/198774902?v=4";
  const defaultAvatar = (
    <div className="w-full h-full flex items-center justify-center bg-gray-300 dark:bg-gray-600">
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
      href: "https://arshiku.vercel.app/"
    },
    {
      id: 2,
      name: "Kiirohana ",
      icon: <FaPalette className="text-white text-lg" />,
      colorFrom: "from-blue-400",
      colorTo: "to-blue-600",
      href: ""
    },
    {
      id: 3,
      name: "undefined",
      icon: <FaCamera className="text-white text-lg" />,
      colorFrom: "from-purple-400",
      colorTo: "to-purple-600",
      href: "/projects/kmina"
    },
    {
      id: 4,
      name: "undefined",
      icon: <FaDoorOpen className="text-white text-lg" />,
      colorFrom: "from-green-400",
      colorTo: "to-green-600",
      href: "/projects/znm"
    }
  ];
  // tanpa library
//   const projects = [
//     {
//       id: 1,
//       name: "Arsiku Project",
//       icon: "📚",
//       colorFrom: "from-amber-400",
//       colorTo: "to-amber-600",
//       href: "https://arshiku.vercel.app/"
//     },
//     {
//       id: 2,
//       name: "Helvetica Design",
//       icon: "🎨",
//       colorFrom: "from-blue-400",
//       colorTo: "to-blue-600",
//       href: "/projects/helvetica"
//     },
//     {
//       id: 3,
//       name: "Kmina Studio",
//       icon: "📷",
//       colorFrom: "from-purple-400",
//       colorTo: "to-purple-600",
//       href: "/projects/kmina"
//     },
//     {
//       id: 4,
//       name: "ZnM Portal",
//       icon: "🚪",
//       colorFrom: "from-green-400",
//       colorTo: "to-green-600",
//       href: "/projects/znm"
//     }
//   ];
  
//   // Di dalam komponen, ganti {project.initials} dengan:
//   <span className="text-lg">{project.icon}</span>

  return (
    <div className={`w-full md:w-64 bg-[#745F3C] dark:bg-[#2d2d2d] text-white flex flex-col py-6 px-4 transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
        <div className="flex flex-col items-center mb-6">
        <div className="w-20 h-20 rounded-full border-2 border-white/30 shadow-md mb-3 overflow-hidden">
          {imgError ? (
            defaultAvatar
          ) : (
            <img 
              src={profilePhoto} 
              alt="Profile" 
              className="w-full h-full object-cover"
              onError={() => setImgError(true)}
              loading="lazy"
            />
          )}
        </div>
        <h1 className="text-lg font-bold">Arie Helvetica | Rhazel1na </h1>
        <p className="text-xs text-white/70">ꦫꦄꦗ꦳ꦺꦭꦶꦤ</p>
      </div>
      <div className="mb-6 px-2">
        <p className="text-sm text-white/80 italic">
        Hi. I'am Rhazelina. Just ordinary human. I'm the same person as you, who wants to live a long and happy life. May we meet each other even though we are already different realms.
        </p>
      </div>
      
      <div className="mt-auto px-2">
        <div className="border-t border-white/20 pt-4">
          <h3 className="text-xs font-semibold text-white/60 mb-2 uppercase tracking-wider">My Projects</h3>
          
          <div className="space-y-2">
            {projects.map((project) => (
              <Link 
                to={project.href} 
                key={project.id}
                className="block group"
              >
                <div className="flex items-center justify-between bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10 group-hover:border-white/30 transition-colors duration-200">
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded flex items-center justify-center bg-gradient-to-br ${project.colorFrom} ${project.colorTo}`}>
                      {project.icon}
                    </div>
                    <span className="font-medium text-sm">{project.name}</span>
                  </div>
                  <div className="text-xs bg-white/10 group-hover:bg-white/20 px-2 py-1 rounded transition-colors">
                    View
                  </div>
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








