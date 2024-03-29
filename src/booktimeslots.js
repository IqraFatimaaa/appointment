import { useState } from "react";
import ReactDOM from "react-dom/client";

function booktimeslots() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Enter your gmail:
        <input 
          type="gmail" 
          name="gmail" 
          value={inputs.gmail || ""} 
          onChange={handleChange}
        />
        </label>
        <input type="submit" />
    </form>
  )
}

export default booktimeslots;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);