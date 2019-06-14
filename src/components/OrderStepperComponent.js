import React, {Component} from 'react';
import BasketComponent from "./BasketComponent";
import ContactsOrderContainer from "../containers/ContactsOrderContainer";
import {orderService} from "../services/orderService";

class OrderStepperComponent extends Component {


    state = {
        currentPosition: 1,
        tabs: 2,
        visibleActions: false,
        orderContacts: {
            userName: "",
            userSecondName: "",
            userPhone: "",
            city: "",
            street: "",
            house: "",
            flat: ""
        }
    };

    componentDidMount() {
        const {basket: {basket}} = this.props;
        basket.length > 0 ? this.setState({visibleActions: true}) : this.setState({visibleActions: false})
    }

    nextStep = () => {
        const {currentPosition, tabs} = this.state;
        let newPosition = tabs === currentPosition ? 1 : currentPosition + 1;
        this.setState({currentPosition: newPosition})
    };

    prevStep = () => {
        const {currentPosition} = this.state;
        let newPosition = 1 === currentPosition ? 1 : currentPosition - 1;
        this.setState({currentPosition: newPosition})
    };

    createOrder = () => {
        const {basket: {basket},actions:{clearBasket}} = this.props;
        orderService.createOrder(basket, this.state.orderContacts)
        clearBasket();
        this.setState({currentPosition: 1, visibleActions: false})
    };

    handleChangeOrderContacts = (e) => {
        const {name, value} = e.target;
        this.setState({orderContacts: {...this.state.orderContacts, [name]: value}})
    };


    render() {
        const {currentPosition, tabs, visibleActions} = this.state;
        return (
            <div className="container">
                {currentPosition === 1 ? <BasketComponent/> :
                    <ContactsOrderContainer orderContacts={this.state.orderContacts}
                                            change={this.handleChangeOrderContacts}/>}
                {
                    visibleActions ? <ul className="order-action fl-r">
                        <li>
                            {currentPosition !== 1
                                ? <button className="btn netral" onClick={this.prevStep}>Prev</button>
                                :
                                <button className="btn primary" onClick={this.handleClearBasket}>Clear basket</button>}
                        </li>
                        <li>
                            {tabs === currentPosition ?
                                <button className="btn netral" onClick={this.createOrder}>Buy</button> :
                                <button className="btn netral" onClick={this.nextStep}>Next</button>}
                        </li>
                    </ul> : ''
                }
            </div>
        );
    }

    handleClearBasket =() =>{
        const {actions: {clearBasket}} = this.props;
        clearBasket();
        this.setState({currentPosition: 1, visibleActions: false})
    }
}


export default OrderStepperComponent;