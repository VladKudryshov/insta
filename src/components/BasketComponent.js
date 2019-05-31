import React, {Component} from "react";


import {productService} from "../services/productService";

class BasketComponent extends Component {


    constructor(props) {
        super(props);
        this.state = {products: []};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.setState({isLoading: true});
        let item = localStorage.getItem("order");
        if (item) {
            let id = JSON.parse(item).map(it => it.id);
            productService.getProductsByIds(id)
                .then(data => this.setState({products: data}))
        }
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    handleChange(e) {
        const {name, value} = e.currentTarget;
        this.setState({[name]: value});
    }

    getQuantityById = (id) => {
        let item = JSON.parse(localStorage.getItem("order"));
        return item.filter(f => f.id === id).map(f => f.quantity)[0];
    };

    handleClearBasket = (e) => {
        e.preventDefault();

        this.setState({products: []})
        return localStorage.removeItem("order");
    }

    render() {
        const {products} = this.state;

        if(products.length === 0){
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
                        <li className="tx-l"><i className="fas fa-trash"></i></li>
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