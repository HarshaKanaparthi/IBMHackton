import React, { useState } from "react";
import BMIbg from '../images/BmiBg.png';
import './BMI.css'
import { useHistory } from "react-router";
const BMI = () => {
  const history = useHistory();
  const [height, setHeight] = useState(0);
  const [mass, setMass] = useState(0);
  const [bmi, setBmi] = useState(0);

  const calculate = (e) => {
    e.preventDefault();
    const formValid = +height > 0 && +mass > 0;
    if (!formValid) {
      return;
    }
    const bmi = +mass / (+height) ** 2;
    setBmi(bmi);
  };
 return (
    <>
    <p id="back" onClick={()=>{history.push('/Features')}}>Back</p>
    <img src={BMIbg} alt="" className="bmibg" />
    <div className="BMIAPp">
      <form onSubmit={calculate}>
        <div>
          <label>height in meters</label>
          <input value={height} onChange={(e) => setHeight(e.target.value)} />
        </div>

        <div>
          <label>mass in kg</label>
          <input value={mass} onChange={(e) => setMass(e.target.value)} />
        </div>

        <button type="submit">calculate</button>
      </form>
      <p>bmi: {bmi}</p>
    </div>
    </>
  );
}


export default BMI;