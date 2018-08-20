import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Search from '../search';
import { fetchPhones } from '../../actions';

class PhonesList extends Component {
  componentDidMount() {
    this.props.fetchPhones();
  }

  renderPhone(phone, index) {
    const shortDescription = `${phone.description.substring(0, 60)}...`;
    console.log(shortDescription);

    return (
      <div className="card mb-3" key={index}>
        <img className="card-img-top" src={phone.image} alt={phone.name} />
        <div className="card-body">
          <h4 className="card-title">
            <h4 className="pull-right">${phone.price}</h4>
            <h4>
              <Link to={`/phones/${phone.id}`}>{phone.name}</Link>
            </h4>
          </h4>
          <p className="card-text">{shortDescription}</p>
          <Link to={`/phones/${phone.id}`} className="btn btn-info btn-block">
            More info
          </Link>
        </div>
      </div>
    );
  }

  render() {
    const phones = this.props.phones;
    if (
      phones === undefined ||
      (Object.keys(phones).length === 0 && phones.constructor === Object)
    ) {
      return <div>Loading .....</div>;
    }

    return (
      <div class="container d-flex flex-wrap justify-content-around row-hl text-dark">
        {phones.map((phone, index) => this.renderPhone(phone, index))}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    phones:
      Object.keys(state.filteredPhones).length === 0
        ? state.phones
        : state.filteredPhones
  };
}

export default connect(
  mapStateToProps,
  { fetchPhones }
)(PhonesList);
