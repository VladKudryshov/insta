import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {addProductToBasket, changeQuantityProductInBasket} from '../../actions/action'
import React, {Component} from "react";


class ProductAction extends Component {

    state = {
        open: false
    }

    getQuantityProduct() {
        const {basket:{basket}, id} = this.props;
        let product = basket ? basket.find(i => i.id === id) : undefined;
        return product ? product.quantity : 0
    }

    componentDidMount() {
        if (this.getQuantityProduct() > 0) {
            this.setState({open: true})
        }
    }

    test = (id) => {
        const {actions: {addProductToBasket}} = this.props;
        const {open} = this.state;
        addProductToBasket(id, 1)
        this.setState({open: !open})
    };

    render() {
        const {id} = this.props;
        const {open} = this.state;


        return (
            <div className="product-action">
                <i className="fas fa-receipt left p14 sml"></i>

                {
                        <i className={!open ? "fas fa-shopping-basket basket p14 sml" : 'fas fa-shopping-basket p14 sml basket-active'}
                           onClick={() => this.test(id)}></i>
                }


                <i className="far fa-bookmark right p14 sml"></i>
            </div>
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
        addProductToBasket,
        changeQuantityProductInBasket
    }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductAction);
