import React, {Component} from 'react';
import BasketComponent from "./BasketComponent";
import ContactsOrderContainer from "../containers/ContactsOrderContainer";
import {orderService} from "../services/orderService";

class OrderStepperComponent extends Component {


    state = {
        currentPosition: 1,
        tabs: 2
    };


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


    handleClearBasket =() =>{
        const {actions: {clearBasket}} = this.props;
        clearBasket();
        this.setState({currentPosition: 1, visibleActions: false})
    }

    render() {
        const {currentPosition, tabs} = this.state;
        const {loader, basket} = this.props;

        console.log(basket)

        let flag = !basket || basket.length === 0;
        if (flag) {
            return <div className="basket-box tc">Корзина пуста</div>
        }

        return (
            <div className="container">

                {currentPosition === 1 ? <BasketComponent/> : <ContactsOrderContainer change={this.handleChangeOrderContacts}/>}
                {
                    !loader && !flag && <ul className="order-action fl-r">
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
                    </ul>
                }
            </div>
        );
    }

}


export default OrderStepperComponent;