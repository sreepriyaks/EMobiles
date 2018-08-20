import React, { Component } from 'react';
import Search from '../search';
import PhoneList from '../phonesList';
class User extends Component {
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top"
          id="main-nav"
        >
          <div className="container">
            <a href="index.html" className="navbar-brand text-light">
              E-Mobiles
            </a>
            <button
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a
                    href="#"
                    className="nav-link text-light"
                    data-toggle="modal"
                    data-target="#contactUsModal"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Search />
        <PhoneList />
      </div>
    );
  }
}
export default User;
