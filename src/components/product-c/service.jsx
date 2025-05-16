import React from "react";

function Service({ handelService, service }) {
    const options = ["Courier", "Drive Thru", "In-Store"];
    
    return (
        <div className="w-full space-y-6">
            <h2 className="text-3xl font-serif font-bold text-amber-900 border-b border-amber-200 pb-2">
                Delivery Options
            </h2>
            
            <div className="flex flex-wrap gap-3" onChange={handelService}>
                {options.map((value, index) => {
                    const isSelected = value === service;
                    return (
                        <div key={index} className="relative">
                            <input
                                type="radio"
                                name="service"
                                id={`service-${index}`}
                                value={value}
                                className="absolute opacity-0 w-0 h-0"
                            />
                            <label 
                                htmlFor={`service-${index}`}
                                className={`flex items-center justify-center px-6 py-3 rounded-lg border-2 cursor-pointer transition-all duration-200
                                    ${isSelected 
                                        ? "bg-amber-700 border-amber-800 text-white shadow-md" 
                                        : "bg-white border-amber-200 text-amber-800 hover:bg-amber-50"}`}
                            >
                                <span className="font-medium whitespace-nowrap">
                                    {value}
                                </span>
                                {isSelected && (
                                    <svg 
                                        className="w-5 h-5 ml-2"
                                        viewBox="0 0 20 20" 
                                        fill="currentColor"
                                    >
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                )}
                            </label>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Service;