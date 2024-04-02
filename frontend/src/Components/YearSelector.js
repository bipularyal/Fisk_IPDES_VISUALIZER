// YearSelectorForm.js
import React, { useState } from 'react';
import FormSelector from './FormSelector';
import './css/YearSelector.scss'; // Ensure this contains styles for the form layout

function YearSelectorForm() {
  const years = Array.from({ length: 2022 - 2010 + 1 }, (v, k) => k + 2010);
  const [dataType, setDataType] = useState("Enrollment");
  const dataOptions = ["Enrollment", "Income", "Expenses", "Ep2"];
  const detailOptions = {
    Enrollment: ["Race", "Male", "Female"],
    Income: ["Grants", "Donations"],
    Expenses: ["Total", "Instruction"]
  };

  return (
    <form className="range-selector-form">
        <div className='range_data'>
          <FormSelector label="Year" options={years} />
        </div>
      <FormSelector label="Data Type" options={dataOptions} onChange={(e) => setDataType(e.target.value)} />

      <FormSelector label="Details" options={detailOptions[dataType]} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default YearSelectorForm;
