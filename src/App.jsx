import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) return storedTheme === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50 dark:bg-[#1a1a1a]">
      <Sidebar darkMode={darkMode} />
      <div className="flex-1 flex flex-col">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Outlet context={{ darkMode }} />
      </div>
    </div>
  );
};

export default App;

// import { useState, useEffect } from 'react';
// import { Outlet } from 'react-router-dom';
// import Sidebar from './components/Sidebar';
// import Navbar from './components/Navbar';

// const App = () => {
//   // Definisikan state darkMode di sini
//   const [darkMode, setDarkMode] = useState(() => {
//     const storedTheme = localStorage.getItem('theme');
//     return storedTheme ? storedTheme === 'dark' : 
//       window.matchMedia('(prefers-color-scheme: dark)').matches;
//   });

//   // Efek untuk mengaplikasikan dark mode
//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add('dark');
//       localStorage.setItem('theme', 'dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//       localStorage.setItem('theme', 'light');
//     }
//   }, [darkMode]);

//   // Fungsi toggle
//   const toggleDarkMode = () => setDarkMode(!darkMode);

//   return (
//     <div className="flex flex-col md:flex-row min-h-screen bg-gray-50 dark:bg-[#1a1a1a]">
//       <Sidebar darkMode={darkMode} />
//       <div className="flex-1 flex flex-col">
//         <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default App;


// // import React, { useState, useEffect } from "react";
// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import Sidebar from "./components/Sidebar";
// // import Navbar from "./components/Navbar";
// // import HomePage from "./components/HomePage"; 
// // import ProjectDetail from "./components/ProjectDetail"; 

// // const App = () => {
// //       // const [darkMode, setDarkMode] = useState(() => {
// //       //   const storedTheme = localStorage.getItem("theme");
// //       //   if (storedTheme) return storedTheme === "dark";
// //       //   return window.matchMedia("(prefers-color-scheme: dark)").matches;
// //       // });

// //       // useEffect(() => {
// //       //   if (darkMode) {
// //       //     document.documentElement.classList.add("dark");
// //       //     localStorage.setItem("theme", "dark");
// //       //   } else {
// //       //     document.documentElement.classList.remove("dark");
// //       //     localStorage.setItem("theme", "light");
// //       //   }
// //       // }, [darkMode]);

// //       // const toggleDarkMode = () => setDarkMode(prev => !prev);

// //   const projects = [
// //     {
// //       id: 1,
// //       title: "Portfolio Website",
// //       description: "A clean and responsive portfolio site",
// //       initials: "PW",
// //       colorFrom: "from-blue-400",
// //       colorTo: "to-blue-600",
// //       href: "/projects/1",
// //       timeline: [
// //         {
// //           date: "12/02/2025",
// //           title: "Kickoff",
// //           description: "Project kickoff description..."
// //         }
// //       ]
// //     }
// //     // Tambahkan project lain sesuai kebutuhan
// //   ];

// //   return (
// //     <Router>
// //       <div className="flex flex-col md:flex-row min-h-screen bg-gray-50 dark:bg-[#1a1a1a]">
// //         <Sidebar darkMode={darkMode} projects={projects} />
// //         <div className="flex-1 flex flex-col">
// //           <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
// //           <Routes>
// //             <Route 
// //               path="/" 
// //               element={<HomePage projects={projects} />} 
// //             />
// //             <Route 
// //               path="/projects/:projectId" 
// //               element={<ProjectDetail projects={projects} />} 
// //             />
// //           </Routes>
// //         </div>
// //       </div>
// //     </Router>
// //   );
// // };

// // export default App;