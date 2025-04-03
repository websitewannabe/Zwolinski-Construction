
import React from 'react';
import { Link, useRouteError, isRouteErrorResponse } from 'react-router-dom';
import { Home } from 'lucide-react';

const Error = () => {
  const error = useRouteError();
  const is404 = isRouteErrorResponse(error) && error.status === 404;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <h1 className="text-9xl font-bold text-zwolinski-burgundy mb-4">
          {is404 ? '404' : '500'}
        </h1>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          {is404 
            ? 'Page Not Found' 
            : 'Something went wrong'}
        </h2>
        <p className="text-gray-600 mb-8">
          {is404
            ? "We couldn't find the page you're looking for."
            : "We're having some trouble processing your request. Please try again later."}
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 bg-zwolinski-burgundy text-white rounded-md hover:bg-opacity-90 transition-colors"
        >
          <Home className="w-5 h-5 mr-2" />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
