// ChartArea.js
import React, { useContext } from 'react';
import { Bar } from 'react-chartjs-2';
import ChartComponent from '../Components/ChartComponent';

import { DataContext } from '../DataContext'; // Adjust the path to your DataContext.js
import './css/ChartArea.scss'; // Your CSS for the chart area

function ChartArea() {
  const {data} = useContext(DataContext)

  return (
    <div className="chart-area">
      {data ? <div><h2>Visualized section: {data.section} </h2> <h2>Visualized data: {data.subSection}</h2></div> : <h2>This section will show the graph when data is available</h2>}
      {data && data.values && <ChartComponent values={data.values} type={data.type}/>}
    </div>
  );
}

export default ChartArea;