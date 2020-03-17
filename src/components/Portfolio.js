import React from "react";

function Portfolio() {
  return (
    <body class="main-body">
      <div class="container" id="main">
        <section class="main-section">
          <div class="row">
            <div class="col-md-12">
              <h1>Portfolio</h1>
            </div>
          </div>

          <div class="row">
            <div class="col-md-5 tile">
              <h6>Wanderlust App</h6>
              <a href="https://alpinelife37.github.io/Homework07/">
                <img src="assets/images/wanderlust.png" alt="wanderlust logo" />
              </a>
            </div>

            <div class="col-md-5 tile">
              <h6>Password Generator App</h6>
              <a href="https://alpinelife37.github.io/Homework3/">
                <img
                  src="assets/images/password_generator.png"
                  alt="password generator"
                />
              </a>
            </div>
          </div>

          <div class="row">
            <div class="col-md-5 tile">
              <h6>Weather Dashboard App</h6>
              <a href="https://alpinelife37.github.io/Homework6/">
                <img
                  src="assets/images/weather_dashboard.png"
                  alt="weather dashboard"
                />
              </a>
            </div>

            <div class="col-md-5 tile">
              <h6>Day Planner App</h6>
              <a href="https://alpinelife37.github.io/Homework5/">
                <img src="assets/images/day_planner.png" alt="day planner" />
              </a>
            </div>
          </div>

          <div class="row">
            <div class="col-md-5 tile">
              <h6>Taco App</h6>
              <a href="https://aqueous-dusk-93036.herokuapp.com/">
                <img src="assets/images/taco.png" alt="coding quiz" />
              </a>
            </div>

            <div class="col-md-5 tile">
              <h6>Github Profile Generator Node App</h6>
              <a href="https://github.com/alpinelife37/Project-09.git">
                <img src="assets/images/profile.png" alt="profile generator" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </body>
  );
}
export default Portfolio;