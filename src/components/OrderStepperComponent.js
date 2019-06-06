import React, {Component} from 'react';
import BasketComponent from "./BasketComponent";
import ContactsOrderContainer from "../containers/ContactsOrderContainer";
import {bindActionCreators} from "redux";
import {changeQuantityProductInBasket, clearBasket} from "../actions/action";
import connect from "react-redux/es/connect/connect";

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
        console.log("create oreder")
    };

    render() {
        const {currentPosition, tabs} = this.state;

        return (
            <div>
                { currentPosition === 1 ? <BasketComponent /> : <ContactsOrderContainer />}
                <ul className="order-action fl-r">
                    <li>
                        {currentPosition!==1
                            ? <button className="btn netral" onClick={this.prevStep}>Prev</button>
                            : <button className="btn primary" onClick={this.handleClearBasket}>Clear basket</button>}
                    </li>
                    <li>
                        {tabs===currentPosition ?<button className="btn netral" onClick={this.createOrder}>Buy</button> : <button className="btn netral" onClick={this.nextStep}>Next</button>}
                    </li>
                </ul>
            </div>
        );
    }

    handleClearBasket = (e) => {
        e.preventDefault();
        const {actions: {clearBasket}} = this.props;
        return clearBasket();
    };
}


const mapStateToProps = (state) => {
    const basket = state.basket;
    return ({
        basket
    });
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        clearBasket
    }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderStepperComponent);