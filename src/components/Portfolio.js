import React from "react";

function Portfolio() {
  return (
    <body className="main-body">
      <div className="container" id="main">
        <section className="main-section">
          <div className="row">
            <div className="col-md-12">
              <h1>Portfolio</h1>
            </div>
          </div>

          <div className="row">
            <div className="col-md-5 tile">
              <h6>Wanderlust App</h6>
              <a href="https://alpinelife37.github.io/Homework07/">
                <img src="./images/wanderlust.png" alt="wanderlust logo" />
              </a>
              <a href="https://github.com/alpinelife37/Homework07" id="github">
                Github Repo:
              </a>
            </div>

            <div className="col-md-5 tile">
              <h6>Password Generator App</h6>
              <a href="https://alpinelife37.github.io/Homework3/">
                <img
                  src="./images/password_generator.png"
                  alt="password generator"
                />
              </a>
              <a href="https://github.com/alpinelife37/Homework3">
                Github Repo:
              </a>
            </div>
          </div>

          <div className="row">
            <div className="col-md-5 tile">
              <h6>Weather Dashboard App</h6>
              <a href="https://alpinelife37.github.io/Homework6/">
                <img
                  src="./images/weather_dashboard.png"
                  alt="weather dashboard"
                />
              </a>
              <a href="https://github.com/alpinelife37/Homework6">
                Github Repo:
              </a>
            </div>

            <div className="col-md-5 tile">
              <h6>Day Planner App</h6>
              <a href="https://alpinelife37.github.io/Homework5/">
                <img src="./images/day_planner.png" alt="day planner" />
              </a>
              <a href="https://github.com/alpinelife37/Homework5">
                Github Repo:
              </a>
            </div>
          </div>

          <div className="row">
            <div className="col-md-5 tile">
              <h6>Taco App</h6>
              <a href="https://aqueous-dusk-93036.herokuapp.com/">
                <img src="./images/taco.png" alt="coding quiz" />
              </a>
              <a href="https://github.com/alpinelife37/Taco">Github Repo:</a>
            </div>

            <div className="col-md-5 tile">
              <h6>Github Profile Generator Node App</h6>
              <a href="https://github.com/alpinelife37/Project-09.git">
                <img src="/images/profile.png" alt="profile generator" />
              </a>
              <a href="https://github.com/alpinelife37/Project-09">
                Github Repo:
              </a>
            </div>
          </div>
        </section>
      </div>
    </body>
  );
}
export default Portfolio;
