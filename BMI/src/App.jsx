import { useState } from "react";

const App = () => {
  // State variables created here 
  const [height, setHeight] = useState()
  const [weight, setWeight] = useState()
  const [bmi, setBmi] = useState(null)
  const [bmiStatus, setBmiStatus] = useState("")

  // create a component here exactly what we gonna do

  const calculateBmi = () => {
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters)
      setBmi(bmiValue.toFixed(2));
      if (bmiValue < 18.5) {
        setBmiStatus("underWeight")
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setBmiStatus("Normal Weight")
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        setBmiStatus("Over Weight")
      } else {
        setBmiStatus("Obese")
      };

    } else {
      setBmi(null);
      bmiStatus("")
    }
  }

  return (
    <>
      <div className="Container">

        <div className="Section-1">
          <img className="bg-img" src="./src/assets/bmi.png" alt="" />
        </div>
        <div className="section-2">
          <h1>BMI CALCULATOR</h1>
          <p className="error">Please Enter Valid Numeric Value height and Weight.</p>
          <div className="height-box">
            <div className="box-1" >
              <label htmlFor="height">Height (cm) :</label>
            </div>
            <div>
              <input value={height} onChange={(e) => { setHeight(e.target.value) }} placeholder="Enter your Height..." type="text" id="height" />
            </div>
          </div>
          <div className="weight-box">
            <div>
              <label className="box-2" htmlFor="weight">Weight (kg) : </label>
            </div>
            <div>
              <input value={weight} onChange={(e) => { setWeight(e.target.value) }} placeholder="Enter your Weight..." type="text" id="weight" />
            </div>
          </div>
          <div className="btn">
            <button onClick={calculateBmi} >
              Calculate BMI
            </button>
          </div>
          {bmi !== null && (<div className="footer">
            <h4>Your BMI is : {bmi}</h4>
            <p> Status : {bmiStatus}</p>
          </div>)}
        </div>
      </div>
    </>
  );
}

export default App;