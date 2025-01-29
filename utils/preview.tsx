// Preview.tsx
import React from 'react';

interface PreviewProps {
  children: React.ReactNode;
}

const Preview: React.FC<PreviewProps> = ({ children }) => {
  return (
    <div className="min-h-[500px] w-full  bg-red-300 flex justify-center items-center">
      {children}
    </div>
  );
};

export default Preview;