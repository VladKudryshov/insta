import React, {Component} from "react";


import {productService} from "../services/productService";

class BasketComponent extends Component {

    state = {products: []}


    componentDidMount() {
        this.setState({isLoading: true});
        let item = JSON.parse(localStorage.getItem("order"));
        if (item && item.length > 0) {
            let id = item.map(it => it.id);
            productService.getProductsByIds(id)
                .then(data => this.setState({products: data}))

        }
    }

    getQuantityById = (id) => {
        let item = JSON.parse(localStorage.getItem("order"));
        return item.filter(f => f.id === id).map(f => f.quantity)[0];
    };

    deleteProductByID = (e, id) => {
        e.preventDefault();
        const {products} = this.state;
        this.setState({products: products.filter(f => f.id !== id)})
        let order = JSON.parse(localStorage.getItem('order'));
        let oldItem = order ? order.find(i => i.id === id) : {};
        if (order && oldItem) {
            order.splice(order.indexOf(oldItem), 1);
            localStorage.setItem('order', JSON.stringify(order))
        }
        this.props.changeBasketSize();
    };

    handleClearBasket = (e) => {
        e.preventDefault();

        this.setState({products: []})
        return localStorage.removeItem("order");
    }

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
                    <li>Actions</li>
                </ul>
                {
                    products.map(product => <ul key={product.id} className=''>
                        <li>{product.name}</li>
                        <li>{product.category}</li>
                        <li>{product.price}</li>
                        <li>{this.getQuantityById(product.id)}</li>
                        <li onClick={(event) => this.deleteProductByID(event, product.id)} className="tx-l"><i
                            className="fas fa-trash"></i></li>
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

export default BasketComponent