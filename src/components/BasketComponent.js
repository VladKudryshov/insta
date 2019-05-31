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
        let id = JSON.parse(item).map(it => it.id);
        productService.getProductsByIds(id)
            .then(data => this.setState({products: data}))
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
    }

    render() {
        const {products} = this.state;

        return <>
            {
                products.map(product => <div key={product.id}>
                    <div>{product.name}</div>
                    <div>{product.category}</div>
                    <div>{product.price}</div>
                    <div>{this.getQuantityById(product.id)}</div>
                </div>)
            }
        </>
    }
}

export default BasketComponent