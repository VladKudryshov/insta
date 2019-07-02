import React, {Component} from 'react';
import BasketComponent from "./BasketComponent";
import ContactsOrderContainer from "../containers/contacts/ContactsOrderContainer";
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
        const {basket: {basket, contact},actions:{createOrder}} = this.props;
        createOrder(basket, contact);
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
                                ? <button className="btn netral" onClick={this.prevStep}>Назад</button>
                                :
                                <button className="btn netral" onClick={this.handleClearBasket}>Очистить корзину</button>}
                        </li>
                        <li>
                            {tabs === currentPosition ?
                                <button className="btn primary" onClick={this.createOrder}>Заказать</button> :
                                <button className="btn primary" onClick={this.nextStep}>Далее</button>}
                        </li>
                    </ul>
                }
            </div>
        );
    }

}


export default OrderStepperComponent;