import React, {Component} from 'react';
import OrderStepperComponent from "../components/OrderStepperComponent";
import {bindActionCreators} from "redux";
import {clearBasket} from "../actions/action";
import {connect} from "react-redux";

class OrderStepperContainer extends Component {

    render() {
        return (
            <OrderStepperComponent {...this.props}/>
        );
    }

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

export default connect(mapStateToProps, mapDispatchToProps)(OrderStepperContainer);