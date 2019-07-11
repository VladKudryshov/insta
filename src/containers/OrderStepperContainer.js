import React, {Component} from 'react';
import OrderStepperComponent from "../components/basic/OrderStepperComponent";
import {bindActionCreators} from "redux";
import {clearBasket, createOrder} from "../actions/action";
import {connect} from "react-redux";

class OrderStepperContainer extends Component {

    render() {
        return (
            <OrderStepperComponent {...this.props}/>
        );
    }

}

const mapStateToProps = (state) => {
    const {basket, loader} = state;
    return ({
        basket,
        loader
    });
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        createOrder,
        clearBasket
    }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderStepperContainer);