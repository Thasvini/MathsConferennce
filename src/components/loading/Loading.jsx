import React from 'react';
import './Loading.css'; // Ensure this path is correct
import loadingGif from './loading.gif'; // Adjust the path according to your project structure

const Loading = () => {
  return (
    <div className="loading-container">
      <img src={loadingGif} alt="Loading..." className="loading-gif" />
    </div>
  );
};

export default Loading;
