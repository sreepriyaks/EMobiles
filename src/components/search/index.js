import React, { Component } from 'react';
import { connect } from 'react-redux';

import { searchPhones } from '../../actions';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keywords: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.searchPhones(this.state.keywords);
  }

  handleChange(event) {
    this.setState({
      keywords: event.target.value
    });

    this.props.searchPhones(this.state.keywords);
  }

  render() {
    return (
      <div class="searchbar container">
        <div class="input-group">
          <input
            value={this.props.keywords}
            onChange={this.handleChange}
            type="text"
            className="form-control"
          />
          <div class="input-group-append">
            <button
              class="btn btn-info"
              onClick={this.handleSubmit}
              type="button"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    filteredPhones: state.filteredPhones
  };
}

export default connect(
  mapStateToProps,
  { searchPhones }
)(Search);
