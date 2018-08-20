import React, { Component } from 'react';
import Modal from 'react-modal';
import Search from '../search';
import PhoneList from '../phonesList';

class Admin extends Component {
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
                    onClick={this.openModal}
                  >
                    Add New
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div>
          <Modal
            className="Modal__Bootstrap modal-dialog text-dark custommodal"
            closeTimeoutMS={150}
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.handleModalCloseRequest}
          >
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Add New Phone</h4>
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
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Phone Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="description"
                    name="description"
                    placeholder="Description"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="price"
                    name="price"
                    placeholder="Price"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="cpu"
                    name="cpu"
                    placeholder="CPU"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="camera"
                    name="camera"
                    placeholder="Camera"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="size"
                    name="size"
                    placeholder="Size"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="weight"
                    name="weight"
                    placeholder="Weight"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="display"
                    name="display"
                    placeholder="Display"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="battery"
                    name="battery"
                    placeholder="Battery"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="memory"
                    name="memory"
                    placeholder="Memory"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="file"
                    className="form-control-file"
                    id="image"
                    name="image"
                    placeholder="Upload Image"
                  />
                </div>
                <div className="checkbox" />
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
export default Admin;
