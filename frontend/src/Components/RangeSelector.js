import React, { useState, useEffect,useContext } from 'react';
import { rangeData } from './data'; // Adjust the path as necessary
import FormSelector from './FormSelector';
import { DataContext } from '../DataContext'; // Adjust the path to your DataContext.js

import './css/RangeSelector.scss'; // Ensure this contains styles for the form layout


function RangeSelectorForm() {
  const [startYear, setStartYear] = useState('2010');
  const [endYear, setEndYear] = useState('2010');
  const [dataType, setDataType] = useState(Object.keys(rangeData)[0]);
  const [detail, setDetail] = useState('');
  const [detailsOptions, setDetailsOptions] = useState([]);
  const { setData } = useContext(DataContext);
  const chartOptions = ["bar","line"]
  const [chartType, setChartType] = useState(chartOptions[0]);

  useEffect(() => {
    // Update details/options when dataType changes
    const initialDetailsOptions = rangeData[dataType] || [];
    setDetailsOptions(initialDetailsOptions);
    if (initialDetailsOptions.length > 0) {
      setDetail(initialDetailsOptions[0]);
    }
  }, [dataType]);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
  console.log(startYear,endYear,dataType,detail);
  const queryParams = new URLSearchParams({
    startYear,
    endYear,
    dataType,
    detail,
    chartType
  }).toString();

  // The base URL for your GET request
  const url = `http://localhost:4000/api/range?${queryParams}`;

  try {
    const response = await fetch(url); // Send the GET request
    const data = await response.json(); // Assuming the server responds with JSON
    
    setData(data); // Set the fetched data in context
    // console.log(data); // Process the data as needed, e.g., updating state to re-render the chart
  } catch (error) {
    console.error('Error:', error);
  }
  };

  const years = Array.from({ length: 2022 - 2010 + 1 }, (_, k) => 2010 + k);

  return (
    <form className="range-selector-form" onSubmit={handleSubmit}>
      <div className='range-data'>
        <FormSelector label="Start Year" options={years} onChange={(e) => setStartYear(e.target.value)} />
        <FormSelector label="End Year" options={years} onChange={(e) => setEndYear(e.target.value)} />
      </div>
      <FormSelector 
        label="Data Type" 
        options={Object.keys(rangeData)} 
        onChange={(e) => setDataType(e.target.value)} 
      />
      <FormSelector 
        label="Details" 
        options={detailsOptions} 
        onChange={(e) => setDetail(e.target.value)}
      />
      <FormSelector 
        label="Chart Type" 
        options={chartOptions}
        onChange={(e) => setChartType(e.target.value)}
        />
      <button type="submit" className="form-button">Submit</button>
    </form>
  );
}

export default RangeSelectorForm;
