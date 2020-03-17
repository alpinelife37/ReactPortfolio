import React from "react";
// import { Link } from "react-router";
function Index() {
  return (
    <body class="main-body">
      <div id="main" class="container">
        <section class="main-section">
          <div class="row">
            <div class="col-md-12">
              <div class="page-header">
                <h1>About Me</h1>
              </div>
              <div class="row">
                <div id="imgdiv">
                  <img
                    src="../Images/studentAvatar.jpg"
                    class="profile-pic"
                    alt="student avatar"
                  />
                </div>
                <div class="col-md-9">
                  <p class="firsttext">
                    Where I started to how I arrived here... I have managed a
                    large retail store for the last 19 years with 140+
                    employees. During that time I increased the net income 860%.
                    While the work was rewarding, the pay was very good, it
                    didn't allow for enough family time which is very important
                    to me.
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <p>
                    I have always had interest in computers and growing up I was
                    taught by my aunt how to physically build pcs starting with
                    my first processor speed of a 256 MHz. I also learned the
                    DOS commands to navigate the C:/ prompt. Later, I went to
                    college for web design and networking but never got a job in
                    that field. I'm currently enrolled at University of Oregon's
                    coding bootcamp and enjoying their learning platform. I am
                    also enrolled in a secondary school (Frontend Masters) to
                    also grow my coding profile. Hopefully between the two I can
                    find a position that is both challenging and that allows for
                    a positive home life.
                  </p>

                  <p>
                    When I'm not at school, I enjoy spending time with my wife
                    and three boys. We love the many outdoor activities that our
                    PNW has to offer including hiking, skiing, and fishing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </body>
  );
}

export default Index;
