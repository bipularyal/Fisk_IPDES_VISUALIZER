// ChartArea.js
import React, { useContext } from 'react';
import { Bar } from 'react-chartjs-2';
import ChartComponent from '../Components/ChartComponent';

import { DataContext } from '../DataContext'; // Adjust the path to your DataContext.js
import './css/ChartArea.scss'; // Your CSS for the chart area

function ChartArea() {
  const {data} = useContext(DataContext)
  console.log(data)
  const options = {
    // Your chart options
  };

  return (
    <div className="chart-area">
      {data ? <h2>{data.label}</h2> : <h2>This section will show the graph when data is available</h2>}
      {/* If you have a chart component, render it here conditionally as well */}
      {data && <ChartComponent data={data.data} type={data.type}/>}
    </div>
  );
}

export default ChartArea;