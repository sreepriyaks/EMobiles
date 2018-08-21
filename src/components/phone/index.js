import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as R from 'ramda';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

import { fetchPhoneById } from '../../actions';

class Phone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      alertClass: 'dark-overlay d-none'
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleModalCloseRequest = this.handleModalCloseRequest.bind(this);
  }

  showAlert = () => {
    this.setState({
      alertClass: 'dark-overlay d-block'
    });
  };

  hideAlert = () => {
    this.setState({
      alertClass: 'dark-overlay d-none'
    });
  };

  handleOpenModal = () => {
    this.setState({ modalIsOpen: true });
  };

  handleCloseModal = () => {
    this.setState({ modalIsOpen: false });
  };

  handleModalCloseRequest = () => {
    // opportunity to validate something and keep the modal open even if it
    // requested to be closed
    this.setState({ modalIsOpen: false });
  };

  componentDidMount() {
    this.props.fetchPhoneById(this.props.match.params.id);
  }

  renderFields() {
    const { phone } = this.props;
    const columnFields = R.compose(
      R.toPairs,
      R.pick([
        'cpu',
        'camera',
        'size',
        'weight',
        'display',
        'battery',
        'memory'
      ])
    )(phone);

    return columnFields.map(([key, value]) => (
      <div className="column" key={key}>
        <div className="ab-details-title">
          <p>{key}</p>
        </div>
        <div className="ab-details-info">{value}</div>
      </div>
    ));
  }

  renderContent() {
    const { phone } = this.props;

    return (
      <div className="mg-t text-dark">
        <div className="row">
          <div className="col-md-6 col-sm-6 col-lg-6">
            <img className="img-thumbnail" src={phone.image} alt={phone.name} />
          </div>
          <div className="col-md-6 col-sm-6 col-lg-6">
            {this.renderFields()}
          </div>
        </div>
        <div className="caption-full">
          <h4 className="pull-right">${phone.price}</h4>
          <h4>{phone.name}</h4>
          <p>{phone.description}</p>
        </div>
      </div>
    );
  }

  render() {
    const { phone } = this.props;
    console.log(phone.name);
    return (
      <div className="view-container">
        <nav
          className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top"
          id="main-nav"
        >
          <div className="container">
            <a href="" className="navbar-brand text-light">
              E-Mobiles
            </a>
            {/* <Link to={'/'} className="navbar-brand text-light">
              E-Mobiles
            </Link> */}
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

        <div>
          <Modal
            className="Modal__Bootstrap modal-dialog text-dark mg-t"
            closeTimeoutMS={150}
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.handleModalCloseRequest}
          >
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Edit Phone</h4>
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
                    defaultValue={phone.name}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    id="description"
                    name="description"
                    placeholder="Description"
                    defaultValue={phone.description}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="price"
                    name="price"
                    placeholder="Price"
                    defaultValue={phone.price}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="cpu"
                    name="cpu"
                    placeholder="CPU"
                    defaultValue={phone.cpu}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="camera"
                    name="camera"
                    placeholder="Camera"
                    defaultValue={phone.camera}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="size"
                    name="size"
                    placeholder="Size"
                    defaultValue={phone.size}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="weight"
                    name="weight"
                    placeholder="Weight"
                    defaultValue={phone.weight}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="display"
                    name="display"
                    placeholder="Display"
                    defaultValue={phone.display}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="battery"
                    name="battery"
                    placeholder="Battery"
                    defaultValue={phone.battery}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="memory"
                    name="memory"
                    placeholder="Memory"
                    defaultValue={phone.memory}
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

        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-lg-12 App-margin-10">
              {phone && this.renderContent()}
              <div className="float-right">
                <button
                  className="btn btn-outline-success mr-3"
                  onClick={this.handleOpenModal}
                >
                  Edit
                </button>
                <button
                  className="btn btn-outline-danger mr-3"
                  onClick={this.showAlert}
                >
                  Delete
                </button>
                <button className="btn btn-outline-info mr-3">Back</button>
              </div>
            </div>
          </div>
        </div>
        <div className={this.state.alertClass}>
          <div
            className="container alert alert-danger alert-dismissible fixed-top"
            id="confirmDelete"
          >
            <button className="close" type="button" onClick={this.hideAlert}>
              <span>&times;</span>
            </button>
            <h4 className="alert-heading my-3">Are you sure?</h4>
            <p className="my-3">Continue Deleting the Phone?</p>
            <hr />
            <button className="btn btn-danger mt-2">Yes</button>
            <button className="btn btn-info mt-2" onClick={this.hideAlert}>
              No
            </button>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    phone: state.phone
  };
}

export default connect(
  mapStateToProps,
  { fetchPhoneById }
)(Phone);
