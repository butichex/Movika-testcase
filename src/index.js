import React from 'react';
import ReactDOM from 'react-dom/client';
import Interactive from '../src/components/Interactive/Interactive';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Interactive time={10} videos={["demo.mp4"]} />
  </React.StrictMode>
);



