import React from "react";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className={`bg-[#9B845D] dark:bg-[#3f3f3f] text-white h-16 flex items-center justify-between px-4 md:px-6 shadow transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      <h2 className="text-lg md:text-xl font-bold tracking-wide">Ini Navbar</h2>
      <div className="flex items-center gap-4">
        <div className="w-32 md:w-56 h-8 bg-gray-300/60 dark:bg-gray-600/40 rounded-md border border-gray-400/30" />
        <button
          onClick={toggleDarkMode}
          className={`bg-white/20 dark:bg-black/30 border border-white/30 text-sm px-3 py-1 rounded-md hover:bg-white/30 dark:hover:bg-black/50 transition ${darkMode ? 'dark' : ''}`}
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {darkMode ? "☀️ L" : "🌙 D"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;


// import React from "react";

// const Navbar = ({ darkMode, toggleDarkMode }) => {
//   return (
//     <div className={`bg-[#9B845D] dark:bg-[#3f3f3f] text-white h-16 flex items-center justify-between px-4 md:px-6 shadow transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
//       <h2 className="text-lg md:text-xl font-bold tracking-wide">Ini Navbar</h2>
//       <div className="flex items-center gap-4">
//         <div className="w-32 md:w-56 h-8 bg-gray-300/60 dark:bg-gray-600/40 rounded-md border border-gray-400/30" />
//         {/* <h1 className="text-lg font-bold px-3 py-2"> Ini Placeholder</h1> */}
//         <button
//           onClick={toggleDarkMode}
//           className={`bg-white/20 dark:bg-black/30 border border-white/30 text-sm px-3 py-1 rounded-md hover:bg-white/30 dark:hover:bg-black/50 transition ${darkMode ? 'dark' : ''}`}
//           aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
//         >
//           {darkMode ? "☀️ L" : "🌙 D"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Navbar;