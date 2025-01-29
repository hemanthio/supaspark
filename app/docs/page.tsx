// App.tsx
import React from 'react';
import Preview from '../../utils/preview';
import Button from '../docs/button';

const App: React.FC = () => {
  return (
    <div className='h-[500px]  bg-red-400 flex justify-center items-center'>
      <Preview>   
        <Button />
        <p className="mt-4 text-gray-600">This is a centered button!</p>
      </Preview>
    </div>
  );
};

export default App;