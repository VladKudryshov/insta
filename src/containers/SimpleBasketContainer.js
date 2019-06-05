import {connect} from 'react-redux';

import React, {Component} from "react";
import {Link} from "react-router-dom";


class SimpleBasketContainer extends Component {

    render() {
        const {basket} = this.props
        return (
            <li>
                <Link to="/basket">
                    <i className="fas fa-shopping-basket hover center"><span className="not-empty">{basket.length}</span></i>
                </Link>
            </li>
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
