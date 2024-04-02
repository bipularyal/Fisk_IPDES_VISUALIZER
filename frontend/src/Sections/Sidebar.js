import React from 'react';
import YearSelectorForm from '../Components/YearSelector';
import RangeSelectorForm from '../Components/RangeSelector';
import './css/Sidebar.scss'; // Your CSS file to style the sidebar

// Assuming this is inside your Sidebar.js or a similar component

class Sidebar extends React.Component {
  state = {
    selectionType: 'single', // 'single' or 'range'
  };

  handleSelection = (type) => {
    this.setState({ selectionType: type });
  };

  render() {
    const { selectionType } = this.state;

    return (
      <div className="sidebar">
        <h1>Fisk Data Visualizer</h1>
        <div className="selection-buttons">
          <button onClick={() => this.handleSelection('single')} className={selectionType === 'single' ? 'active' : ''}>Single Year</button>
          <button onClick={() => this.handleSelection('range')} className={selectionType === 'range' ? 'active' : ''}>Range</button>
        </div>
        {selectionType === 'single' ? (
          <div className="formSelector">
            {<YearSelectorForm/>}
          </div>
        ) : (
          <div className="formSelector">
            {<RangeSelectorForm/>}
          </div>
        )}
      </div>
    );
  }
}

export default Sidebar;

