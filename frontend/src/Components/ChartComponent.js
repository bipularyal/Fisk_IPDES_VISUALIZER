import React from 'react';
import {
  Bar,
  Pie,
  Line,
  // add other chart types you need
} from 'react-chartjs-2';
import 'chart.js/auto'; // Chart.js >= 3 requires this import

// Function to generate chart datasets
const generateChartDataset = (data, chartType,params) => {
  const backgroundColors = {
    bar: ['#FF6384', '#36A2EB', '#FFCE56', '#E7E9ED', '#71B37C'],
    pie: ['#FF6384', '#36A2EB', '#FFCE56', '#E7E9ED', '#71B37C'],
    line: ['#FF6384', '#36A2EB', '#FFCE56', '#E7E9ED', '#71B37C'],
    // Add more or customize as needed
  };

  const borderColors = {
    bar: ['#FF6384', '#36A2EB', '#FFCE56', '#E7E9ED', '#71B37C'],
    pie: ['#FF6384', '#36A2EB', '#FFCE56', '#E7E9ED', '#71B37C'],
    line: ['#FF6384', '#36A2EB', '#FFCE56', '#E7E9ED', '#71B37C'],
    // Add more or customize as needed
  };

  if (params == "range"){
    const datasetKeys = Object.keys(data[0]).filter(key => key.toLowerCase() !== 'year');
    const labels = Object.keys(data[0]).filter(key => key.toLowerCase() == 'year');
    const datasets = datasetKeys.map((key,idx) =>({
          label: key,
          data: data.map(d => parseFloat(d[key])),
          backgroundColor: backgroundColors[chartType][idx],
          borderColor: borderColors[chartType][idx],
          borderWidth: 1,
    }))

    return {
      labels: data.map(d => d[labels]),
      datasets: datasets
    };
  }
  else{
    const entry = data[0];
    const labels = Object.keys(entry);
    const dataPoints = Object.values(entry).map(value => parseFloat(value)); // Convert string to number  
    const datasets =  [{
      label: 'Total', // Customize this label as needed
      backgroundColor: chartType == "pie"? backgroundColors[chartType]:backgroundColors[chartType][0],
      borderColor: chartType == "pie"? borderColors[chartType]:borderColors[chartType][0],
      data: dataPoints,
      borderWidth: 1
    }]
    console.log(datasets)
    return {
      labels: labels,
      datasets: datasets
    };
  }
};

const ChartComponent = ({ values, type }) => {
  // Assuming 'data' is an array with items like: { year: 2020, value: 10 }
  console.log(values,type, " inside chart")
  const chartData = generateChartDataset(values, 'bar',type);

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    // Additional options can be added here
  };

  // Render the appropriate chart based on 'type'
  switch ('bar') {
    case 'bar':
      return <Bar data={chartData} options={chartOptions} className='graphWidthAdjuster'/>;
    case 'pie':
      return <Pie data={chartData} options={chartOptions}  className='graphWidthAdjuster'/>;
    case 'line':
      return <Line data={chartData} options={chartOptions}  className='graphWidthAdjuster'/>;
    // Add more cases for other chart types if needed
    default:
      return <div>Unsupported chart type</div>;
  }
};

export default ChartComponent;
