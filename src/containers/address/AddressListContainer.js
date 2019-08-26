import React, {Component} from 'react';

import {bindActionCreators} from "redux";
import {getAddresses} from "../../actions/action";
import connect from "react-redux/es/connect/connect";
import Address from "../../components/basic/account/Address";

class AddressListContainer extends Component {

    componentDidMount() {
        const {actions: {getAddresses}} = this.props;
        getAddresses();
    }

    render() {

        const {address: {addresses}} = this.props;
        const listAddress = addresses.map(address => (<Address address = {address} editAddress = {this.props.editAddress}/>));

        return (
            <>
                <div className="list card">
                    {listAddress}
                </div>

            </>
        );
    }
}

const mapStateToProps = (state) => {
    const {loader, address} = state;
    return {
        address,
        loader
    };
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        getAddresses
    }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddressListContainer);