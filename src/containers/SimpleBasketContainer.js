import {connect} from 'react-redux';

import React, {Component} from "react";
import {Link} from "react-router";
import ToolTip from "../components/basic/tooltip/ToolTip";


class SimpleBasketContainer extends Component {

    render() {
        const {basket: {basket}} = this.props
        return (
            <ToolTip tooltipMessage={"Корзина"}>
                <Link to="/basket"><i className="fas fa-shopping-basket hover center p10"/></Link>
            </ToolTip>
        );
    }
}

const mapStateToProps = (state) => {
    const basket = state.basket;
    return ({
        basket
    });
};


export default connect(mapStateToProps, null)(SimpleBasketContainer);
