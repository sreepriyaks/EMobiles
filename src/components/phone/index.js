import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as R from 'ramda';
import { Link } from 'react-router-dom';

import { fetchPhoneById } from '../../actions';

class Phone extends Component {
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
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-lg-12 App-margin-10">
              {phone && this.renderContent()}
            </div>
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
