import React, { Component } from 'react';
import Modal from 'react-modal';
import Search from '../search';
import PhoneList from '../phonesList';
import { Link } from 'react-router-dom';
class User extends Component {
  constructor(props) {
    super(props);
    this.state = { modalIsOpen: false };
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  handleModalCloseRequest = () => {
    // opportunity to validate something and keep the modal open even if it
    // requested to be closed
    this.setState({ modalIsOpen: false });
  };

  handleSaveClicked = e => {
    alert('Save button was clicked');
  };

  render() {
    return (
      <div>
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
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a
                    href="#"
                    className="nav-link text-light"
                    onClick={this.openModal}
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div>
          <Modal
            className="Modal__Bootstrap modal-dialog text-dark mg-t"
            closeTimeoutMS={150}
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.handleModalCloseRequest}
          >
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Contact Us</h4>
                <button
                  type="button"
                  className="close"
                  onClick={this.handleModalCloseRequest}
                >
                  <span aria-hidden="true">&times;</span>
                  <span className="sr-only">Close</span>
                </button>
              </div>
              <div className="modal-body">
                <div class="form-group">
                  <label for="name">Name</label>
                  <input type="text" class="form-control" placeholder="Name" />
                </div>
                <div class="form-group">
                  <label for="email">E-Mail</label>
                  <input type="email" class="form-control" placeholder="Name" />
                </div>
                <div class="form-group">
                  <label for="message">Message</label>
                  <textarea class="form-control" placeholder="Message" />
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn btn-success" data-dismiss="modal">
                  Submit
                </button>
              </div>
            </div>
          </Modal>
        </div>

        <Search />
        <PhoneList />
      </div>
    );
  }
}
export default User;
