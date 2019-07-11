import React, {Component} from 'react';
import NewContactContainer from "./NewContactContainer";
import ListContactsContainer from "./ListContactsContainer";
import {bindActionCreators} from "redux";
import {chooseAddress, editContactOrder, getAddresses} from "../../actions/action";
import connect from "react-redux/es/connect/connect";
import LoaderContainer from "../LoaderContainer";

class ContactsOrderContainer extends Component {

    state = {
        visible: true
    };


    componentDidMount() {
        const {actions: {getAddresses}} = this.props
        getAddresses();
    }

    handleNewContact = () => {
        const {visible} = this.state
        this.setState({visible: !visible})
        this.props.actions.editContactOrder({})
    };

    handleEditAddress = (address) => {
        const {visible} = this.state;
        this.setState({visible: !visible})

        this.props.actions.editContactOrder(address)
    };

    render() {
        const {visible} = this.state;
        const {address: {addresses}} = this.props;
        return (
            <div className="order-contacts card">
                <LoaderContainer>
                    <div className="header-card">Адрес доставки</div>

                    {
                        addresses.length > 0 && visible
                            ?
                            < ListContactsContainer {...this.props} handleContact={this.handleNewContact}
                                                                        editAddress={this.handleEditAddress}/>
                            :
                            <NewContactContainer {...this.props} handleContact={this.handleNewContact}/>
                    }
                </LoaderContainer>
            </div>
        );
    }

}


const mapStateToProps = (state) => {
    const {basket: {contact}, loader, address} = state;
    return {
        contact,
        address,
        loader
    };
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        editContactOrder,
        getAddresses,
        chooseAddress
    }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsOrderContainer);