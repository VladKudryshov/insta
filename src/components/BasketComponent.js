import React, {Component} from "react";


import {productService} from "../services/productService";
import connect from "react-redux/es/connect/connect";
import {bindActionCreators} from "redux";
import {changeQuantityProductInBasket, deleteProductFromBasket, saveProducts} from "../actions/action";

class BasketComponent extends Component {

    state = {
        loading: true
    };

    componentDidMount() {
        const {basket:{basket}, actions: {saveProducts}} = this.props;
        if (basket && basket.length > 0) {
            let ids = basket.map(it => it.id);
            productService.getProductsByIds(ids)
                .then(data => {
                    setTimeout(()=>{this.setState({loading: false})}, 500)
                    saveProducts(data)
                })
        }else {
            setTimeout(()=>{this.setState({loading: false})}, 500)
        }

    }

    getQuantityById = (id) => {
        const {basket:{basket}} = this.props;
        let find = basket.find(f=>f.id === id);
        return find ? find.quantity : 0;
    };

    deleteProductByID = (e, id) => {
        e.preventDefault();
        const {actions: {changeQuantityProductInBasket, deleteProductFromBasket}} = this.props;
        changeQuantityProductInBasket(id, 0);
        deleteProductFromBasket(id);
    };

    render() {
        const {basket, basket: {products}} = this.props;
        const {loading} = this.state;

        if(loading){
            return <div className="spinners">
                <div className="spinner-2"/>
                <div className="spinner"/>
            </div>
        }

        if (!products || products.length === 0) {
            return <div className="basket-box tc">Your basket is empty</div>
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
        saveProducts,
        deleteProductFromBasket,
    }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(BasketComponent);

