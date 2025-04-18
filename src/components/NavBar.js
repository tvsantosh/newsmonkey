import React, { Component } from "react";
import { Link } from 'react-router-dom';
export class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-dark bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand">NewsMonkey</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><Link className="nav-link active" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/general">General</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
            </ul>

            <div className="dropdown  ms-7">
  <button className="btn dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Countries
  </button>
  <ul className="dropdown-menu">
    <li><Link className="dropdown-item" to="#">United States</Link></li>
    <li><Link className="dropdown-item" to="#">India</Link></li>
  </ul>
</div>
            
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
