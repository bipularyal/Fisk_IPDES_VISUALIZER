// Selector.js
import React from 'react';
import './css/FormSelector.scss'; // Your CSS for this new selector component

function Selector({ label, options, onChange }) {

  return (
    <div className="selector-container">
      {label && <label>{label}</label>}
      <select onChange={onChange} disabled = {!options}>
        {options && options.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}

export default Selector;
