// App.js
import React from 'react';
import Sidebar from './Sections/Sidebar';
import ChartArea from './Sections/ChartArea';
import './App.css'; // Your CSS file to style the components

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <ChartArea />
    </div>
  );
}

export default App;
