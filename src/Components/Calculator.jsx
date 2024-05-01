import React, { useState } from "react";
import "./Style.css";

function Calculator() {
  const [principle, setPrinciple] = useState("0");
  const [rate, setRate] = useState("0");
  const [time, setTime] = useState("0");
  const [result, setResult] = useState("");

  const calculation = (e) => {
    e.preventDefault();
    if (principle == 0 || rate == 0 || time == 0) {
      alert("Please provide all information");
    }
    let result = principle * (rate / 100) * time;
    setResult(result.toFixed(2));
  };

  const reset = (e) => {
    e.preventDefault();
    setResult("");
    window.location.reload();
  };

  return (
    <div className="container">
      <div className="headline_div">
        <h1>Simple Interest Calculator</h1>
        <p>(Calculate your Simple Interest easily)</p>
      </div>
      <div className="result_div">
        <h3> ৳ {result}</h3>
        <p>Total Simple Interest</p>
      </div>

      <form className="form_div" onSubmit={calculation}>
        <div className="principle_div">
          <label>Principle Amount</label>
          <br />
          <input className="input_1"
            onChange={(e) => setPrinciple(e.target.value)}
            placeholder="Write your principle amount"
            type="number"
          />
        </div>

        <div>
          <label>Rate of Interest (p.a.)%</label> <br />
          <input
            onChange={(e) => setRate(e.target.value)}
            placeholder="Write rate of Interest"
            type="number"
          />
        </div>

        <div>
          <label>Time Period (Y)</label> <br />
          <input
            onChange={(e) => setTime(e.target.value)}
            placeholder="Write time period"
            type="number"
          />
        </div>

        <div className="btn_div">
          <button type="submit">Generate</button>
          <button onClick={reset}>Reset</button>
        </div>
      </form>
    </div>
  );
}

export default Calculator;
