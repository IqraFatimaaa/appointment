import logo from './logo.svg';
import './App.css';
import React from 'react';
import displaytime from './displaytime';
import booktimeslots from './booktimeslots';
import avilabletime from './avilabletime'

function App() {
  return (
    <div className="App">
    <avilabletime/>
     <displaytime/>
     <booktimeslots/>

    </div>
  );
}

export default App;
