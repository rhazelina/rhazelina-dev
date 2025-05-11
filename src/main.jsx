import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import ProjectDetail from './components/ProjectDetail';
import HomePage from './components/HomePage';
import ErrorPage from './components/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "projects/:projectId",
        element: <ProjectDetail />,
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

// import { createRoot } from 'react-dom/client';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import App from './App';
// import ProjectDetail from './components/ProjectDetail';
// import HomePage from './components/HomePage';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         index: true,
//         element: <HomePage />,
//       },
//       {
//         path: "projects/:projectId",
//         element: <ProjectDetail />,
//       }
//     ]
//   }
// ]);

// createRoot(document.getElementById('root')).render(
//   <RouterProvider router={router} />
// );



// // import React, { Suspense } from 'react';
// // import { createRoot } from 'react-dom/client';
// // import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// // import App from './App';
// // import ProjectDetail from './components/ProjectDetail';
// // import HomePage from './components/HomePage';
// // import ErrorPage from './components/ErrorPage';
// // import LoadingSpinner from './components/LoadingSpinner'; // Buat komponen loading

// // // Mock data untuk development
// // const mockProjects = [
// //   { id: 1, title: "Portfolio Website", description: "Sample project 1" },
// //   { id: 2, title: "Task Manager", description: "Sample project 2" }
// // ];

// // const router = createBrowserRouter([
// //   {
// //     path: "/",
// //     element: <App />,
// //     errorElement: <ErrorPage />,
// //     children: [
// //       {
// //         index: true,
// //         element: (
// //           <Suspense fallback={<LoadingSpinner />}>
// //             <HomePage />
// //           </Suspense>
// //         ),
// //         loader: () => {
// //           // Untuk sementara gunakan mock data
// //           console.warn("Using mock data - replace with real API call");
// //           return mockProjects;
          
// //           /* Uncomment untuk API real:
// //           try {
// //             const response = await fetch('/api/projects');
// //             if (!response.ok) throw new Error(`HTTP ${response.status}`);
// //             const contentType = response.headers.get('content-type');
// //             if (!contentType?.includes('application/json')) {
// //               throw new Error('Invalid content type');
// //             }
// //             return await response.json();
// //           } catch (error) {
// //             console.error('API Error:', error);
// //             // Kembalikan mock data jika API gagal di development
// //             if (process.env.NODE_ENV === 'development') {
// //               console.warn("Falling back to mock data");
// //               return mockProjects;
// //             }
// //             throw error;
// //           }
// //           */
// //         }
// //       },
// //       {
// //         path: "projects/:projectId",
// //         element: <ProjectDetail />,
// //         loader: ({ params }) => {
// //           const project = mockProjects.find(p => p.id === Number(params.projectId));
// //           if (!project) throw new Error("Project not found");
// //           return project;
// //         }
// //       }
// //     ]
// //   }
// // ]);

// // const root = createRoot(document.getElementById('root'));
// // root.render(
// //   <React.StrictMode>
// //     <RouterProvider router={router} />
// //   </React.StrictMode>
// // );