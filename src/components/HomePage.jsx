import { useLoaderData } from 'react-router-dom';

const HomePage = () => {
  const projects = useLoaderData() || []; // Fallback to empty array
  
  return (
    <div className="p-4 space-y-4 overflow-auto">
      {projects.map((project) => (
        <div key={project.id} className="bg-white dark:bg-[#2f2f2f] rounded-lg p-4 shadow">
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default HomePage;