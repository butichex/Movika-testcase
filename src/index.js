import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App time={10} videos={["video1.mp4", "video3.mp4", "video2.mp4"]} />
  </React.StrictMode>
);



