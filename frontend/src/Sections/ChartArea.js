// ChartArea.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import './css/ChartArea.scss'; // Your CSS for the chart area

function ChartArea() {
  const data = {
    // Your chart data
  };

  const options = {
    // Your chart options
  };

  return (
    <div className="chart-area">
      <h2>Graduation Data</h2>
      {/* <Bar data={data} options={options} /> */}
    </div>
  );
}

export default ChartArea;