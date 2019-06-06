import {connect} from 'react-redux';

import React, {Component} from "react";
import {Link} from "react-router-dom";


class SimpleBasketContainer extends Component {

    render() {
        const {basket} = this.props
        return (
            <Link to="/basket">
                <i className="fas fa-shopping-basket hover center p1020">{
                    <span className={basket.length > 0 ? "not-empty" : 'not-empty none'}>{basket.length}</span>
                }</i>
            </Link>
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
