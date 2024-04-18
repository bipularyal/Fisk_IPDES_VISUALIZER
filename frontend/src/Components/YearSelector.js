// YearSelectorForm.js
import React, { useState,useEffect,useContext } from 'react';
import FormSelector from './FormSelector';
import './css/YearSelector.scss'; // Ensure this contains styles for the form layout
import { individualData } from './data'; // Adjust the path as necessary
import { DataContext } from '../DataContext'; // Adjust the path to your DataContext.js


function YearSelectorForm() {
  const dataOptions = Object.keys(individualData);
  const [dataType, setDataType] = useState(dataOptions[0]); // Default to first key
  const years = Array.from({ length: 2022 - 2010 + 1 }, (_, k) => 2010 + k);
  const [detailsOptions, setDetailsOptions] = useState(individualData[dataType]); // Initial details/options based on default dataType
  const [year, setYear] = useState('2010');
  const [detail, setDetail] = useState('');
  const { setData } = useContext(DataContext);
  const chartOptions = ["bar","pie"]
  const [chartType, setChartType] = useState(chartOptions[0]);

  useEffect(() => {
    // Update details/options when dataType changes
    const initialDetailsOptions = individualData[dataType] || [];
    setDetailsOptions(initialDetailsOptions);
    if (initialDetailsOptions.length > 0) {
      setDetail(initialDetailsOptions[0]);
    }
  }, [dataType]);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
  const queryParams = new URLSearchParams({
    year,
    dataType,
    detail,
    chartType
  }).toString();

  // The base URL for your GET request
  const url = `http://localhost:4000/api/year?${queryParams}`;
    try {
      const response = await fetch(url); // Send the GET request
      const data = await response.json(); // Assuming the server responds with JSON
      setData(data); // Set the fetched data in context
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  return (
    <form className="range-selector-form" onSubmit={handleSubmit}>
        <div className='range_data'>
          <FormSelector label="Year" options={years} onChange={(e) => setYear(e.target.value)}/>
        </div>
        <FormSelector 
        label="Data Type" 
        options={dataOptions} 
        onChange={(e) => setDataType(e.target.value)} />
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
      <button className="form-button" type="submit">Submit</button>
    </form>
  );
}

export default YearSelectorForm;
