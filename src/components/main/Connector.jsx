import React from "react";

const Connector = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-amber-50">
      {/* Animated coffee steam logo */}
      <div className="relative w-48 h-48 mb-8">
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Coffee cup */}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#5C4033"
            strokeWidth="1.5"
            className="w-full h-full"
          >
            <path d="M6 3h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
            <path d="M8 21h8" />
            <path d="M12 17v4" />
          </svg>
          
          {/* Steam animation */}
          <div className="absolute top-0 w-full flex justify-center space-x-4">
            {[1, 2, 3].map((i) => (
              <div 
                key={i}
                className="w-2 h-6 bg-amber-200 rounded-full opacity-70"
                style={{
                  animation: `steam 2s infinite ease-in-out ${i * 0.3}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Branding */}
      <h1 className="text-5xl md:text-6xl font-serif font-bold text-center px-4 mb-4">
        <span className="text-amber-800">Wild Beans</span> <span className="text-amber-600">Coffee</span>
      </h1>
      
      <p className="text-lg text-amber-700 text-center px-4 max-w-md">
        Preparing your coffee experience...
      </p>

      {/* Subtle loading indicator */}
      <div className="mt-8 w-32 h-1 bg-amber-100 rounded-full overflow-hidden">
        <div 
          className="h-full bg-amber-600 rounded-full"
          style={{
            animation: 'loading 2s infinite ease-in-out',
          }}
        />
      </div>

      {/* CSS animations */}
      <style jsx>{`
        @keyframes steam {
          0%, 100% { 
            transform: translateY(0) scaleY(1); 
            opacity: 0.7;
          }
          50% { 
            transform: translateY(-15px) scaleY(1.5); 
            opacity: 0.2;
          }
        }
        @keyframes loading {
          0% { width: 0%; }
          50% { width: 100%; }
          100% { width: 0%; margin-left: 100%; }
        }
      `}</style>
    </div>
  );
};

export default Connector;