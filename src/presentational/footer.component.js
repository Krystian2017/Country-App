import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";

const Footer = props => {
  return (
    <div>
      <footer className="navbar navbar-default">
        <div className="container-fluid">
          <p>
            Copyright © 2019 <strong>Państwa.js</strong> | Route 66, 1234 Warsow
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
