import React, { useEffect, useState } from "react";

const LoadingScreen = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((old) => {
        if (old >= 100) {
          clearInterval(timer);
          setTimeout(() => onFinish(), 400); // small delay after 100%
          return 100;
        }
        return old + 3; // speed of loading
      });
    }, 50);
    return () => clearInterval(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white z-50 transition-all duration-500">
      {/* Animated Name */}
      <h1 className="text-5xl md:text-6xl font-signature text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 mb-8 tracking-wide animate-pulse">
        &lt;Mohd Aman /&gt;
      </h1>

      {/* Loading Progress */}
      <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 transition-all duration-100 ease-linear"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Percentage Count */}
      <p className="mt-4 text-lg text-gray-300 font-mono tracking-widest">
        {progress}%
      </p>
    </div>
  );
};

export default LoadingScreen;
