import React from "react";

function Navbar() {
  return (
    <>
      <div id="navbarHP" className Name="pill-nav">
        <nav className="navbar navbar-expand-lg navbar-light bg-gray">
          <h2 className="titleHeading"> Caffeine Paradise</h2>

          <nav className="collapse navbar-collapse" id="navbarNav">
            <ulNav className="navbar-nav ml-auto">
              <li className="nav-item">
                <a href="/yourorder" className="navR">
                  <span>Your Order</span>
                </a>
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
            </ulNav>
          </nav>
        </nav>
      </div>

      <br></br>
    </>
  );
}

export default Navbar;
