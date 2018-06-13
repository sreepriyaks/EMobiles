import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import { savePhone } from '../../actions';

class NewPhone extends Component {

    constructor(props, context) {
        super(props, context);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.savePhone(event.target)
            .then(result => {
                this.props.history.push('/admin');
            });
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className='col-md-3 col-sm-3 col-lg-3'>
                    </div>
                    <div className="col-md-6 col-dm-6 col-lg-6">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <input type="text" className="form-control" id="name" name="name" placeholder="Phone Name" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" id="description" name="description" placeholder="Description" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" id="price" name="price" placeholder="Price" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" id="cpu" name="cpu" placeholder="CPU" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" id="camera" name="camera" placeholder="Camera" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" id="size" name="size" placeholder="Size" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" id="weight" name="weight" placeholder="Weight" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" id="display" name="display" placeholder="Display" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" id="battery" name="battery" placeholder="Battery" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" id="memory" name="memory" placeholder="Memory" />
                            </div>
                            <div className="form-group">
                                <input type="file" className="form-control-file" id="image" name="image" placeholder="Upload Image" />
                            </div>
                            <div className="checkbox">
                            </div>
                            <button type="submit App-margin-10" className="btn btn-primary">
                                Submit
				            </button>
                        </form>
                    </div>
                    <div className='col-md-3 col-sm-3 col-lg-3'>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return state;
}

export default withRouter(connect(mapStateToProps, { savePhone })(NewPhone));