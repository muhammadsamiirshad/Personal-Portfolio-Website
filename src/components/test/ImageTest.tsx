'use client';

import React from 'react';

const ImageTest: React.FC = () => {
  const images = [
    "/images/projects/pharmasynx.png",
    "/images/projects/threat-dashboard.jpg",
    "/images/projects/index-recommandation-system.png",
    "/images/projects/secure-gateway.jpg",
    "public/images/projects/pharmasynx.png",
    "public/images/projects/threat-dashboard.jpg",
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Image Test</h1>
      <div className="grid grid-cols-2 gap-4">
        {images.map((src, index) => (
          <div key={index} className="border p-4">
            <p className="mb-2">Path: {src}</p>
            <p className="mb-2">After replace: {src.replace(/^public/, '')}</p>
            <img 
              src={src.replace(/^public/, '')} 
              alt={`Test image ${index}`}
              className="w-full h-64 object-contain bg-gray-800"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageTest;
