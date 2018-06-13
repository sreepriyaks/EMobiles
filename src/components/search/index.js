import React, { Component } from 'react';
import { connect } from 'react-redux';

import { searchPhones } from '../../actions';

class Search extends Component {

    constructor(props) {
        super(props);

        this.state = {
            keywords: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleSubmit(event) {
        event.preventDefault();
        this.props.searchPhones(this.state.keywords);
    };


    handleChange(event) {
        this.setState({
            keywords: event.target.value
        });

        this.props.searchPhones(this.state.keywords);
    }

    render() {
        return (
            <div className='container'>
                <div className='col-md-12 col-sm-12 col-lg-12'>
                    <div className='well blosd'>
                        <div className='input-group'>
                                <input
                                    value={this.props.keywords}
                                    onChange={this.handleChange}
                                    type='text'
                                    className='form-control' />

                                <span className='input-group-btn'>
                                    <button className='btn btn-default' onClick={this.handleSubmit}>
                                        <span className='glyphicon glyphicon-search' />
                                    </button>
                                </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

function mapStateToProps(state) {
    return {
        filteredPhones: state.filteredPhones
    }
}

export default connect(mapStateToProps, { searchPhones })(Search);