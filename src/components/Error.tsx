import React from "react";
import { Link, useRouteError, isRouteErrorResponse } from "react-router-dom";
import { Home } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Error = () => {
  const error = useRouteError();
  const is404 = isRouteErrorResponse(error) && error.status === 404;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-black">
        <div className="max-w-md text-center px-4">
          {/* Assuming AlertTriangle is imported correctly */}
          {/* <AlertTriangle className="mx-auto h-24 w-24 text-zwolinski-secondary mb-6" /> */}
          <h1 className="text-9xl font-bold text-zwolinski-secondary mb-4">
            {is404 ? "404" : "500"}
          </h1>
          <h2 className=" text-3xl font-semibold text-white mb-4">
            {is404 ? "Page Not Found" : "Something went wrong"}
          </h2>
          <p className="text-zwolinski-accent mb-8 text-lg">
            {is404
              ? "We couldn't find the page you're looking for. It might have been moved or deleted."
              : "We're having some trouble processing your request. Please try again later."}
          </p>
          <Link
            to="/"
            className="inline-flex items-center px-8 py-4 bg-zwolinski-secondary text-black rounded-md hover:bg-zwolinski-accent transition-colors font-semibold"
          >
            <Home className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Error;
