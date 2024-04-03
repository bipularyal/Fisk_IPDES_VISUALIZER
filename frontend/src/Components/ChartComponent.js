import React from 'react';
import {
  Bar,
  Pie,
  Line,
  // add other chart types you need
} from 'react-chartjs-2';
import 'chart.js/auto'; // Chart.js >= 3 requires this import

// Function to generate chart datasets
const generateChartDataset = (data, chartType) => {
  const backgroundColors = {
    bar: 'rgba(255, 99, 132, 0.2)',
    pie: ['#FF6384', '#36A2EB', '#FFCE56', '#E7E9ED', '#71B37C'],
    line: 'rgba(75,192,192,0.4)',
    // Add more or customize as needed
  };

  const borderColors = {
    bar: 'rgba(255,99,132,1)',
    pie: ['#FF6384', '#36A2EB', '#FFCE56', '#E7E9ED', '#71B37C'],
    line: 'rgba(75,192,192,1)',
    // Add more or customize as needed
  };
  const datasetKeys = Object.keys(data[0]).filter(key => key !== 'year');
  return {
    labels: data.map(d => d.year),
    datasets: [
      {
        label: 'Dataset',
        data: data.map(d => {
            return (d[datasetKeys[0]])}),
        backgroundColor: backgroundColors[chartType],
        borderColor: borderColors[chartType],
        borderWidth: 1,
      },
    ],
  };
};

const ChartComponent = ({ data, type }) => {
  // Assuming 'data' is an array with items like: { year: 2020, value: 10 }
  console.log(data,type, " inside chart")
  const chartData = generateChartDataset(data, type);

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
  switch (type) {
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
