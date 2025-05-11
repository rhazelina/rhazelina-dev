import { useLoaderData, Link, useNavigate } from 'react-router-dom';
import { ArrowLeftIcon, CalendarIcon } from '@heroicons/react/24/outline';

const ProjectDetail = () => {
  const project = useLoaderData();
  const navigate = useNavigate();
  
  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center h-[50vh]">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-500">Loading project...</h2>
          <div className="mt-4 h-2 w-48 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse mx-auto"></div>
        </div>
      </div>
    );
  }

  // Calculate project completion percentage
  const completionPercentage = project.timeline 
    ? Math.min(100, Math.floor((project.completedMilestones / project.timeline.length) * 100))
    : 0;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Header with back button */}
      <div className="flex items-center mb-6">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 transition-colors mr-4"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-1" />
          Back
        </button>
        <h1 className="text-3xl font-bold">{project.title}</h1>
      </div>

      {/* Project meta */}
      <div className="flex flex-wrap gap-4 mb-8">
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
          <CalendarIcon className="h-4 w-4 mr-1" />
          <span>Started: {project.startDate}</span>
        </div>
        {project.deadline && (
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <CalendarIcon className="h-4 w-4 mr-1" />
            <span>Deadline: {project.deadline}</span>
          </div>
        )}
      </div>

      {/* Progress bar */}
      <div className="mb-8">
        <ProgressBar percentage={completionPercentage} />
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          {completionPercentage}% completed ({project.completedMilestones || 0} of {project.timeline?.length || 0} milestones)
        </p>
      </div>

      {/* Description */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm mb-8">
        <h2 className="text-xl font-semibold mb-3">Project Overview</h2>
        <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
      </div>

      {/* Timeline */}
      <div className="space-y-8">
        <h2 className="text-2xl font-bold">Project Timeline</h2>
        
        {(project.timeline || []).map((item, index) => (
          <div key={index} className="flex group">
            {/* Timeline indicator */}
            <div className="flex flex-col items-center mr-4">
              <div className={`w-4 h-4 rounded-full ${
                item.completed 
                  ? 'bg-green-500' 
                  : index === 0 
                    ? 'bg-blue-500' 
                    : 'bg-gray-300 dark:bg-gray-600'
              } group-hover:bg-blue-400 transition-colors`}></div>
              {index !== project.timeline.length - 1 && (
                <div className="flex-1 w-0.5 bg-gray-300 dark:bg-gray-600 my-1"></div>
              )}
            </div>
            
            {/* Timeline content */}
            <div className={`pb-8 flex-1 ${item.completed ? 'opacity-75' : ''}`}>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                  {item.date}
                </div>
                {item.completed && (
                  <span className="text-xs bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 px-2 py-1 rounded-full">
                    Completed
                  </span>
                )}
              </div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
              
              {item.notes && (
                <div className="mt-2 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border-l-4 border-yellow-400">
                  <p className="text-sm text-yellow-700 dark:text-yellow-300">{item.notes}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Action buttons */}
      <div className="flex justify-end gap-4 mt-8">
        <Link 
          to={`/projects/${project.id}/edit`}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Edit Project
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetail;