import React from 'react';
import {
  Bar,
  Pie,
  Line,
  // add other chart types you need
} from 'react-chartjs-2';
import 'chart.js/auto'; // Chart.js >= 3 requires this import

// Function to generate chart datasets
const generateChartDataset = (data, chartType,dataType) => {
  const backgroundColors = {
    bar: ['#FF6384', '#36A2EB', '#FFCE56', '#E7E9ED', '#71B37C'],
    pie: ['#FF6384', '#36A2EB', '#FFCE56', '#E7E9ED', '#71B37C','#F464F4', '70B309C', '#000E56', '#E7EDFF', '#717CB5','#0652b5', '#d57c3d', '#94b43f', '#67736f', '#954785','#1a423c', '#f113fa', '#48d6bb', '#27ed0c', '#55ecfb','#e1f0da', '#b15b46', '#30e203', '#c0d3ff', '#d52cbc'],
    line: ['#FF6384', '#36A2EB', '#FFCE56', '#E7E9ED', '#71B37C'],
    // Add more or customize as needed
  };

  const borderColors = {
    bar: ['#FF6384', '#36A2EB', '#FFCE56', '#E7E9ED', '#71B37C'],
    pie: ['#FF6384', '#36A2EB', '#FFCE56', '#E7E9ED', '#71B37C','#F46464', '70B3F9C', '#00CE56', '#E7EDE9', '#717CB5','#0652b5', '#d57c3d', '#94b43f', '#67736f', '#954785','#1a423c', '#f113fa', '#48d6bb', '#27ed0c', '#55ecfb','#e1f0da', '#b15b46', '#30e203', '#c0d3ff', '#d52cbc'],
    line: ['#FF6384', '#36A2EB', '#FFCE56', '#E7E9ED', '#71B37C'],
    // Add more or customize as needed
  };

  if (dataType == "range"){
    const datasetKeys = Object.keys(data[0]).filter(key => key.toLowerCase() !== 'year');
    const labels = Object.keys(data[0]).filter(key => key.toLowerCase() == 'year');
    const datasets = datasetKeys.map((key,idx) =>({
          label: key,
          data: data.map(d => parseFloat(d[key])),
          backgroundColor: chartType == "pie"? backgroundColors[chartType]:backgroundColors[chartType][idx],
          borderColor: chartType == "pie"? borderColors[chartType]:borderColors[chartType][idx],
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
    return {
      labels: labels,
      datasets: datasets
    };
  }
};

const ChartComponent = ({ values, dataType,chartType }) => {
  // Assuming 'data' is an array with items like: { year: 2020, value: 10 }
  console.log(values,dataType, " inside chart")
  const chartData = generateChartDataset(values, chartType,dataType);

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
  switch (chartType) {
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
