import React, { useState } from 'react';

function Dropdown() {
  const [selectedOption, setSelectedOption] = useState('');
  const months = [
    'Jan 2023', 'Feb 2023', 'Mar 2023', 'Apr 2023',
    'May 2023', 'June 2023', 'July 2023', 'Aug 2023',
    'Sept 2023', 'Oct 2023', 'Nov 2023', 'Dec 2023'
  ];

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <select value={selectedOption} onChange={handleSelectChange} style={{padding : '10px'}}>
        {months.map((month, index) => (
          <option key={index} value={month}>
            {month}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
