import React from 'react';

const LoadingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <div className="w-full max-w-screen-lg p-4">
        <div className="animate-pulse">
          <div className="h-10 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-md mb-4"></div>
          <div className="h-64 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-md"></div>
          <div className="flex flex-wrap justify-center mt-4 space-x-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="h-48 w-48 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-md"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
