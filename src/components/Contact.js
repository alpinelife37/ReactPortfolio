import React from "react";

function Contact() {
  return (
    <body className="main-body">
      <div id="main" className="container">
        <section className="main-section">
          <h1>Contact</h1>

          <form id="contact-form">
            <ul>
              <li>
                <label for="email">Phone</label>
                <div>(509) 991-6273</div>
              </li>

              <li>
                <label for="email">Email</label>
                <div>Alpinelife37@gmail.com</div>
              </li>

              <li>
                <label for="message">Linkedin</label>
                <a href="https://www.linkedin.com/in/pnw-web-dev/">
                  https://www.linkedin.com/in/pnw-web-dev/
                </a>
              </li>
              <li>
                <label for="message">Github</label>
                <a href="https://github.com/alpinelife37/">
                  https://github.com/alpinelife37/
                </a>
              </li>

              <li>
                <label for="message">PDF Resume</label>
                <a href="https://github.com/alpinelife37/Portfolio/blob/master/assets/Files/resume.pdf">
                  James Nelson
                </a>
              </li>
            </ul>
          </form>
        </section>
      </div>
    </body>
  );
}

export default Contact;
