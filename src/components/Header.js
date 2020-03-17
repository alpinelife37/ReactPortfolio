import React from "react";
import "../css/style.css";
//import { link } from "react-router";
function Header() {
  return (
    <header id="main-header">
      <div class="menu-bar container">
        <nav class="navbar navbar-expand-lg navbar-light">
          <div id="topbox">James Nelson</div>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link" href="index.html">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="portfolio.html">
                  Portfolio
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="contact.html">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
