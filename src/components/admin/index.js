import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchPhones } from '../../actions';
import Search from '../search';
import NewPhone from '../newPhone';

class Admin extends Component {

    constructor(props) {
        super(props);

        this.state = {
            phones: []
        };
    }

    componentDidMount() {
        this.props.fetchPhones();
    }

    renderPhone(phone, index) {
        const shortDescription = `${phone.description.substring(0, 60)}...`;

        return (
            <div className='col-sm-4 col-lg-4 col-md-4 book-list' key={index}>
                <div className='thumbnail'>
                    <img
                        className='img-thumbnail App-borderLess'
                        src={phone.image}
                        alt={phone.name} />
                    <div className='caption'>
                        <h4 className='pull-right'>${phone.price}</h4>
                        <h4>
                            <Link to={`/phones/${phone.id}`}>
                                {phone.name}
                            </Link>
                        </h4>
                        <p>{shortDescription}</p>
                        <p className='itemButton'>
                            <Link
                                to={`/phones/${phone.id}`}
                                className='btn btn-default'>
                                More info
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        );
    };

    render() {
        const phones = this.props.phones;

        if (phones === undefined || (Object.keys(phones).length === 0 && phones.constructor === Object)) {
            return (
                <div>
                    Loading .....
                </div>
            );
        }

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className='col-sm-1 col-lg-1 col-md-1'>
                    </div>
                    <div className="col-md-10 col-sm-10 col-lg-10">
                        <div className="tabbable" id="tabs-253076">
                            <ul className="nav nav-tabs">
                                <li className="nav-item">
                                    <a className="nav-link active show" href="#panel-608699" data-toggle="tab">Available Phones</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#panel-893674" data-toggle="tab">Add New Phone</a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane in active" id="panel-608699">
                                    <p />
                                    <Search />
                                    <div className='col-sm-1 col-lg-1 col-md-1'>
                                    </div>
                                    <div className='col-sm-10 col-lg-10 col-md-10'>
                                        <div className='books row'>
                                            {this.props.phones.map((phone, index) => this.renderPhone(phone, index))}
                                        </div>
                                    </div>

                                    <div className='col-sm-1 col-lg-1 col-md-1'>
                                    </div>
                                </div>
                                <div className="tab-pane" id="panel-893674">
                                    <p />
                                    <NewPhone />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-1 col-lg-1 col-md-1'>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        phones: (Object.keys(state.filteredPhones).length === 0) ? state.phones : state.filteredPhones
    }
}

export default connect(mapStateToProps, { fetchPhones })(Admin);