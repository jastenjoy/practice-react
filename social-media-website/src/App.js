import './App.css';
import { useState } from "react";
import Axios from "axios"

function App() {
  const [excuse, setExcuse] = useState("");

  const generate = (type) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${type}`).then((res) => {
      setExcuse(res.data[0].excuse);
    });
  };
  
  return (
    <div className="App">
      <button onClick={() => generate('party')}>Party</button>
      <button onClick={() => generate('family')}>Family</button>
      <button onClick={() => generate('office')}>Office</button>
      <h1> {excuse}</h1>
    </div>
  );
}

export default App;
