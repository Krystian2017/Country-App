import React from "react";
import { Link } from "react-router";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";

const Navigation = props => {
  return (
    <div>
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">
              Państwa.js
            </Link>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/countries">
                  Countries
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/continents">Continents</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container-fluid">{props.children}</div>
    </div>
  );
};

export default Navigation;
