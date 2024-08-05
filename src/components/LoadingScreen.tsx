import React from 'react';
import logo from '../assets/images/logo-en.svg';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-blue-600 z-50">
      <div className="bg-white p-4 rounded-full">
        <img src={logo} alt="Logo" className="h-24 w-24" />
      </div>
    </div>
  );
}

export default LoadingScreen;
