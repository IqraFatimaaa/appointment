import logo from './logo.svg';
import './App.css';
import React from 'react';
import displaytime from './displaytime';
import booktimeslots from './booktimeslots';
import avilabletime from './avilabletime'

function App() {
  return (
    <div className="App">
    <div class='div1'>
    <avilabletime/>
    </div>
    <div class='div2'> <displaytime/></div>
     <div class='div3'><booktimeslots/></div>

    </div>
  );
}

export default App;
