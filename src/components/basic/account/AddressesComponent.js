import React, {Component} from 'react';

import {bindActionCreators} from "redux";
import {getAddresses} from "../../../actions/action";
import connect from "react-redux/es/connect/connect";

class AddressesComponent extends Component {

    componentDidMount() {
        const {actions: {getAddresses}} = this.props;
        getAddresses();
    }

    render() {

        const {address: {addresses}} = this.props;
        const listAddress = addresses.map(f => {

            return (
                <div className="item" key={f.id}>
                    <div className="next-radio-wrapper">
                        <span className="next-radio-content">
                            <div>
                                <b>
                                    {f.userName} {f.userSecondName} {f.userPhone}
                                </b>
                                <ul>
                                    {f.city} {f.street} {f.house} {f.flat}
                                </ul>
                            </div>
                            {f.default && <div className="default-address">Адрес по умолчанию</div>}
                            <button className="btn-empty"
                                    onClick={() => this.props.editAddress(f)}>Редактировать</button>
                        </span>
                    </div>
                </div>
            )
        });

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

export default connect(mapStateToProps, mapDispatchToProps)(AddressesComponent);