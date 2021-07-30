import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div id="navbarHP" name="pill-nav">
        <nav className="navbar navbar-expand-lg navbar-light bg-gray">
          <h2 className="titleHeading"> Caffeine Paradise</h2>

          <nav className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/yourorder" className="navR">
                  <span>Your Order</span>
                </Link>
              </li>

              <li className="nav-item active">
                <a href="/contact" className="navR">
                  <span>Contact</span>
                </a>
              </li>

              <li className="nav-item">
                <a href="/signup.html" className="navR">
                  <i className="fas fa-sign-out-alt"></i> log out
                </a>
              </li>
            </ul>
          </nav>
        </nav>
      </div>

      <br></br>
    </>
  );
}

export default Navbar;
