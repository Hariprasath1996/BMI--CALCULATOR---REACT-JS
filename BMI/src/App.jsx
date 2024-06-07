const App = () => {
  return (
    <>
      <div className="Container">
        <div className="Section-1">
          <img className="bg-img" src="./src/assets/bmi.png" alt="" />
        </div>
        <div className="section-2">
          <h1>BMI CALCULATOR</h1>
          <div className="height-box">
            <div className="box-1" >
              <label  htmlFor="height">Height (cm) :</label>
            </div>
            <div>
              <input placeholder="Enter your Height..." type="text" id="height" />
            </div>
          </div>
          <div className="weight-box">
            <div>
              <label className="box-2"  htmlFor="weight">Weight (kg) : </label>
            </div>
            <div>
              <input placeholder="Enter your Weight..."  type="text" id="weight" />
            </div>
          </div>
          <div className="btn">
            <button>
              Calculate BMI
            </button>
          </div>
          <div className="footer">
            <h4>Your BMI is : 20 </h4>
            <p> Status : Over Weight</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;