import React, {Component} from 'react';
import NewContactContainer from "./NewContactContainer";
import ListContactsContainer from "./ListContactsContainer";
import {bindActionCreators} from "redux";
import {chooseAddress, editContactOrder, getAddresses} from "../../actions/action";
import connect from "react-redux/es/connect/connect";
import LoaderContainer from "../LoaderContainer";

class ContactsOrderContainer extends Component {

    state = {
        visible: true,
        address: {}
    };


    componentDidMount() {
        const {address:{addresses},actions: {getAddresses}} = this.props
        console.log(addresses)
        getAddresses();

    }

    handleNewContact = () => {
        const {visible} = this.state
        this.setState({visible: !visible})
        this.props.actions.editContactOrder({})

    };

    handleEditAddress = (address) => {
        const {visible} = this.state
        this.setState({visible: !visible})
        this.props.actions.editContactOrder(address)
    };

    render() {
        const {visible, address} = this.state;
        return (
            <div className="order-contacts card">
                <LoaderContainer>
                    <div className="header-card">Адрес доставки</div>

                    <NewContactContainer {...this.props} visible={!visible} handleContact={this.handleNewContact}
                                         oldAddress={address}/>
                    <ListContactsContainer {...this.props} visible={visible} handleContact={this.handleNewContact}
                                           editAddress={this.handleEditAddress}/>
                </LoaderContainer>
            </div>
        );
    }

}


const mapStateToProps = (state) => {
    const {basket: {contact}, address} = state;
    return {
        contact,
        address
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