import React from "react";

function Navbar() {
  return (
    <>
      <div id="navbarHP" className Name="pill-nav">
        <nav className="navbar navbar-expand-lg navbar-light bg-gray">
          <h2 className="titleHeading"> Caffeine Paradise</h2>

          <nav class="collapse navbar-collapse" id="navbarNav">
            <ulNav class="navbar-nav ml-auto">
              <li class="nav-item active">
                <a href="/contact" class="navR">
                  <span>Contact</span>
                </a>
              </li>

              <li class="nav-item">
                <a href="/signup.html" class="navR">
                  <i class="fas fa-sign-out-alt"></i> log out
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
