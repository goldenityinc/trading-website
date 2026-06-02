import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold font-display text-copper">404</h1>
        <h2 className="text-3xl font-display">Page Not Found</h2>
        <p className="text-lg text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          to="/" 
          className="inline-block px-6 py-3 bg-copper text-background font-semibold rounded-lg hover:bg-copper-light transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
