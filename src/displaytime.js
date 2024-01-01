

import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function displaytime() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your Start time:
      <input 
        type="number" 
        name="StartTime" 
        value={inputs.StartTime || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Enter your End Time:
        <input 
          type="number" 
          name="EndTime" 
          value={inputs.EndTime || ""} 
          onChange={handleChange}
        />
        </label>
        <input type="submit" />
    </form>
  )
}