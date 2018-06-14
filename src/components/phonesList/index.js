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
                            <button className='btn btn-primary App-margin-10'>
                                Buy Now!
                            </button>
                            <Link
                                to={`/phones/${phone.id}`}
                                className='btn btn-default App-margin-10'>
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
            <div className='row'>
                <Search />
                <div className='col-sm-1 col-lg-1 col-md-1'>
                </div>
                <div className='col-sm-10 col-lg-10 col-md-10'>
                    <div className='books row'>
                        {phones.map((phone, index) => this.renderPhone(phone, index))}
                    </div>
                </div>
                
                <div className='col-sm-1 col-lg-1 col-md-1'>
                </div>
            </div>
        );
    };
}

function mapStateToProps(state, ownProps) {
    return {
        phones: (Object.keys(state.filteredPhones).length === 0) ? state.phones : state.filteredPhones 
    }
}

export default connect(mapStateToProps, { fetchPhones })(PhonesList);
