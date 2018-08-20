import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
  render() {
    return (
      <div className="login bg-dark">
        <nav
          className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top"
          id="main-nav"
        >
          <div className="container">
            <Link to={'/'} className="navbar-brand text-light">
              E-Mobiles
            </Link>
            <button
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav ml-auto" />
            </div>
          </div>
        </nav>

        <div className=" container card bg-dark text-center card-form">
          <div className="card-body">
            <h3>Login</h3>
            <form>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control"
                  placeholder="Username"
                />
              </div>

              <div className="form-group">
                <input
                  type="password"
                  className="form-control form-control"
                  placeholder="Password"
                />
              </div>

              <input
                type="submit"
                value="Submit"
                className="btn btn-outline-light btn-block"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
