import React, {useState} from 'react';
import axios from 'axios';

//const url = `https://api.openweathermap.org/data/2.5/weather?lat=27&lon=77&appid=d694536b035ba20c9b164f10caf2a3a3`

function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Mumbai</p>
          </div>
          <div className="temp">
            <h1>86°F</h1>
          </div>
          <div className="description">
            <p>Rains</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p>90°F</p>
          </div>
          <div className="humidity">
            <p>85%</p>
          </div>
          <div className="wind">
            10 MPH
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
