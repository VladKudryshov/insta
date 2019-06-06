import React, {Component} from "react";


import {productService} from "../services/productService";
import connect from "react-redux/es/connect/connect";
import {bindActionCreators} from "redux";
import {addProductToBasket, changeQuantityProductInBasket, clearBasket} from "../actions/action";

class BasketComponent extends Component {

    state = {products: []}


    componentDidMount() {
        const {basket} = this.props;
        if (basket && basket.length > 0) {
            let ids = basket.map(it => it.id);
            productService.getProductsByIds(ids)
                .then(data => {
                    this.setState({products: data})
                })
        }
    }

    getQuantityById = (id) => {
        let item = JSON.parse(localStorage.getItem("order"));
        return item.filter(f => f.id === id).map(f => f.quantity)[0];
    };

    deleteProductByID = (e, id) => {
        e.preventDefault();
        const {products} = this.state;
        this.setState({products: products.filter((item) => item.id !== id)})
        const {actions: {changeQuantityProductInBasket}} = this.props;
        changeQuantityProductInBasket(id, 0);

    };

    handleClearBasket = (e) => {
        e.preventDefault();
        this.setState({products: []})
        const {actions: {clearBasket}} = this.props;
        return clearBasket([]);
    };

    render() {
        const {products} = this.state;

        if (products.length === 0) {
            return <div className="basket-box">Your basket is empty</div>
        }

        return <div className="basket-box">
            <ul className=" card">
                <ul key="-1" className=''>
                    <li>Name</li>
                    <li>Category</li>
                    <li>Price</li>
                    <li>Quantity</li>
                    <li></li>
                </ul>
                {
                    products.map(product => <ul key={product.id} className=''>
                        <li>{product.name}</li>
                        <li>{product.category}</li>
                        <li>{product.price}</li>


                        <li>
                            {this.getQuantityById(product.id)}
                        </li>
                        <li onClick={(event) => this.deleteProductByID(event, product.id)} className="tx-l">
                            <i className="fas fa-trash"/>
                        </li>
                    </ul>)
                }

            </ul>

            <ul className="order-action fl-r">
                <li>
                    <button className="btn primary" onClick={this.handleClearBasket}>Clear basket</button>
                </li>
                <li>
                    <button className="btn netral">Order</button>
                </li>
            </ul>
        </div>

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
        changeQuantityProductInBasket,
        clearBasket
    }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(BasketComponent);

