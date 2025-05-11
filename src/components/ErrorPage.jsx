import { useRouteError, Link } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-red-500 mb-4">Oops!</h1>
      <p className="text-xl mb-2">Something went wrong:</p>
      <p className="text-lg mb-6 bg-gray-100 p-4 rounded">
        {error.message || error.statusText || 'Unknown error'}
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        Return Home
      </Link>
    </div>
  );
}