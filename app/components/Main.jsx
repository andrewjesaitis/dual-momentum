import React from 'react';
import Home from './Home';
import * as styles from '../styles/styles';

function Navbar() {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#navbar-collapse-1"
            aria-expanded="false"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="/dual-momentum">
            dual-momentum
          </a>
        </div>
        <div className="collapse navbar-collapse" id="navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            <li className="dropdown">
              <a
                href="#" className="dropdown-toggle" data-toggle="dropdown"
                role="button" aria-haspopup="true" aria-expanded="false"
              >Settings <span className="caret"></span></a>
              <ul className="dropdown-menu">
                <li><a href="#">Replace with settings</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function Main() {
  return (
    <div className="main-container" style={styles.mainComponent}>
      <Navbar />
      <Home />
    </div>
  );
}

export default Main;
