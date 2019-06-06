import React, {Component} from 'react';
import ListProductsComponent from "./catalog/ListProductsComponent";
import {productService} from "../services/productService";
import SelectorContainer from "../containers/SelectorContainer";


class MainComponent extends Component {
    state = {
        test: 'Fruit',
        products: []
    }


    componentDidMount() {
        productService.getProducts('')
            .then(data => this.setState({products: data['content'], isLoading: false}));
    }

    handleChange = (val) => {
        let {target: {value}} = val;
        if (value === 'Empty') {
            value = '';
        }
        productService.getProducts(value)
            .then(data => this.setState({products: data['content'], isLoading: false}))
    }


    render() {

        const {products} = this.state;

        return (
            <>
                <div className="admin-menu">
                    <SelectorContainer change = {this.handleChange}/>
                </div>
                <ListProductsComponent products={products}/>
            </>
        );
    }
}


export default MainComponent;