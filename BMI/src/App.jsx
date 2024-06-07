const App = () => {
  return (
    <>
      <div className="Container">
        <div className="Section-1">
          <img src="" alt="" />
        </div>
        <div className="section-2">
          <h1>BMI CALCULATOR</h1>
          <div className="height-box">
            <label htmlFor="height">Height (cm)</label>
            <input type="text" id="height" />
          </div>
          <div className="weight-box">
            <label htmlFor="weight">Weight (kg)</label>
            <input type="text" id="weight" />
          </div>
          <div>
            <button>
              Calculate BMI
            </button>
          </div>
          <div>
            <h4>Your BMI is : 20 </h4>
            <p> Status : Over Weight</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;