// App.js
import React from 'react';
import { DataProvider } from './DataContext'; // Adjust the path to your DataContext.js
import Sidebar from './Sections/Sidebar';
import ChartArea from './Sections/ChartArea';
import './App.css'; // Your CSS file to style the components

function App() {
  return (
    <DataProvider>
    <div className="app-container">
      <Sidebar />
      <ChartArea />
    </div>
    </DataProvider>
  );
}

export default App;
