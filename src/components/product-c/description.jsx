import React from "react";

function Description({ description, roast, profile, grind }) {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Coffee Description Section */}
      <div className="mb-10">
        <h1 className="text-3xl font-serif font-bold text-amber-900 mb-6 pb-2 border-b border-amber-200">
          Coffee Profile
        </h1>
        
        {profile ? (
          <div className="space-y-4">
            <p className="text-lg text-amber-800 leading-relaxed">
              {description}
            </p>
            
            <div className="bg-amber-50 p-5 rounded-lg border border-amber-100">
              <h2 className="font-medium text-amber-900 mb-2">Tasting Notes</h2>
              <div className="flex flex-wrap gap-2">
                {profile.map((value, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium"
                  >
                    {value}
                  </span>
                ))}
              </div>
              
              <div className="mt-4 pt-4 border-t border-amber-100">
                <p className="text-amber-700">
                  <span className="font-medium">Roast Level:</span> {roast}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="h-40 flex items-center justify-center">
            <p className="text-amber-600 animate-pulse">Brewing the details...</p>
          </div>
        )}
      </div>

      {/* Grind Options Section */}
      <div>
        <h1 className="text-3xl font-serif font-bold text-amber-900 mb-6 pb-2 border-b border-amber-200">
          Grind Options
        </h1>
        
        {grind ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {grind.map((value, index) => (
              <div 
                key={index}
                className="flex items-center p-4 bg-white border border-amber-100 rounded-lg hover:shadow-sm transition-all"
              >
                <div className="w-8 h-8 flex items-center justify-center bg-amber-100 text-amber-800 rounded-full mr-4 font-medium">
                  {index+1}
                </div>
                <span className="text-amber-800 font-medium">{value}</span>
              </div>
            ))}
          </div>
        ) : (
          <div className="h-20 flex items-center justify-center">
            <p className="text-amber-600 animate-pulse">Grinding the options...</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Description;