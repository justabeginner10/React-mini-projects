import React, {useState} from "react";

function App() {
  const initialValue = 10;
  const [temperatureValue,  setTemperatureValue] = useState(initialValue);
  const [temperatureColor,  setTemperatureColor] = useState("cold");
  
  const increaseTemperature = () => {
    if(temperatureValue === 30) return;

    const newTemperature = temperatureValue + 1;

    if(newTemperature >= 15){
      setTemperatureColor('hot');
    }

    setTemperatureValue(newTemperature);
  }
  
  const decreaseTemperature = () => {
    if(temperatureValue === 0) return;

    const newTemperature = temperatureValue - 1;

    if(newTemperature < 15){
      setTemperatureColor('cold');
    }

    setTemperatureValue(newTemperature);
  }

  return (
    <div className="app-container">
    <div className="temperature-display-container">
      <div className={`temperature-display ${temperatureColor}`}>{temperatureValue}° C</div>
    </div>
    <div className="button-container">
      <button onClick={() => increaseTemperature()}>+</button>
      <button onClick={() => decreaseTemperature()}>-</button>
      {/* <button onClick={() => setTemperatureValue(initialValue)}>O</button> */}
    </div>
  </div>

  )
  
}

export default App;
