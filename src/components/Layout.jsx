// components/Layout.jsx
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Layout = ({ children, darkMode, toggleDarkMode }) => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Sidebar darkMode={darkMode} />
      <div className="flex-1 flex flex-col">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main className="flex-1 p-4 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
};