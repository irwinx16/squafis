import React from "react";

export const NavBar = () => {
  return (
    <div className="">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand d-lg-none d-xl-none" href="#">
          Navbar
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav nav-fill w-100">
            {/* <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li> */}
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="navbar-brand" href="#">
                <img src="https://placeimg.com/30/30/any" width="30" height="30" alt="" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
