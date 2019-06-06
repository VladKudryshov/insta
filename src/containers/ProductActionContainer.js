import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {addProductToBasket, changeQuantityProductInBasket} from '../actions/action'
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

    changeQuantityIntoOrder = (quantity) => {
        const {id, actions: {changeQuantityProductInBasket}} = this.props;
        changeQuantityProductInBasket(id, quantity);
        if (quantity < 1) {
            this.setState({open: false})
        }
    };

    decrease = () => {
        let newValue = this.getQuantityProduct() - 1;
        this.changeQuantityIntoOrder(newValue)
    };

    increase = () => {
        let newValue = this.getQuantityProduct() + 1;
        this.changeQuantityIntoOrder(newValue)
    };

    test = (id, quantity) => {
        const {actions: {addProductToBasket}} = this.props;
        addProductToBasket(id, ++quantity)
        this.setState({open: true})
    };

    render() {
        const {id} = this.props;
        const {open} = this.state;


        return (
            <div className="product-action">
                <i className="fas fa-receipt left p14 sml"></i>

                {
                    open ? <div className="quantity card">
                            <div className="quantity-action primary-c" onClick={this.decrease}>
                                <i className="fas fa-minus"></i>
                            </div>
                            <span className="quantity-number">{this.getQuantityProduct()}</span>
                            <div className="quantity-action default-c" onClick={this.increase}>
                                <i className="fas fa-plus"></i>
                            </div>
                        </div>
                        :
                        <i className="fas fa-shopping-basket basket p14 sml"
                           onClick={() => this.test(id, this.getQuantityProduct())}></i>
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
