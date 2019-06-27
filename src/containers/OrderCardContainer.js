import {bindActionCreators} from "redux";
import {loadDataById} from "../actions/action";
import connect from "react-redux/es/connect/connect";
import React, {Component} from "react";
import OrderCardComponent from "../components/account/OrderCardComponent";


class OrderCardContainer extends Component {

    render() {
        return (
            <OrderCardComponent {...this.props}/>
        );
    }

}


const mapStateToProps = (state) => {
    const {order, loader} = state;
    return {
        order,
        loader
    };
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        loadDataById
    }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderCardContainer);