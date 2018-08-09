import React from 'react';
import { Link } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './country.css';

const Navigation = props => (
  <div>
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">Państwa.js</Link>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li><Link to="/countries" activeStyle={{color: '#48abee'}} onlyActiveOnIndex>Countries</Link></li>
            <li><Link to="/continents" activeStyle={{color: '#48abee'}} onlyActiveOnIndex>Continents</Link></li>
            <li><Link to="/contact" activeStyle={{color: '#48abee'}} onlyActiveOnIndex>Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
    <div className="container-fluid">
      {props.children}
    </div>
  </div>
);

export default Navigation;