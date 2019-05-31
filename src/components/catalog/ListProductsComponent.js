import React, {Component} from 'react';
import ProductComponent from "./ProductComponent";
import { get } from 'lodash';
import {productService} from "../../services/productService";

class ListProductsComponent extends Component {


    constructor(props) {
        super(props);
        this.state = {products: [], isLoading: true};
    }

    componentDidMount() {
        this.setState({isLoading: true});

        productService.getProducts()
            .then(data => this.setState({products: data['content'], isLoading: false}))
    }


    render() {
        const {products, isLoading} = this.state;

        const productList = products.map(product => {
            console.log(product)
            return <ProductComponent key={get(product, 'id', '')} product = {product}/>
        });

        return (
            <div className="content">
                <div className="products">
                    {productList}
                </div>
            </div>
        );
    }
}


export default ListProductsComponent;