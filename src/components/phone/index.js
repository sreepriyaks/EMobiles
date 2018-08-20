import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as R from 'ramda';

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
      <div className="thumbnail text-dark">
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
