import React, {Component} from 'react';
import ListProductsComponent from "./catalog/ListProductsComponent";
import {productService} from "../services/productService";
import SelectorContainer from "../containers/SelectorContainer";


class MainComponent extends Component {
    state = {
        test: 'Fruit',
        products: [],
        loading: true
    }


    componentDidMount() {
        productService.getProducts('')
            .then(data => {
                this.setState({products: data['content']});
                setTimeout(()=>{this.setState({loading: false})}, 500)
            });
    }

    handleChange = (val) => {
        this.setState({loading: true})
        let {target: {value}} = val;
        if (value === 'Empty') {
            value = '';
        }
        productService.getProducts(value)
            .then(data => {
                this.setState({products: data['content']});
                setTimeout(()=>{this.setState({loading: false})}, 500)
            })
    }


    render() {

        const {products, loading} = this.state;

        return (
            <>
                <div className="">
                    <SelectorContainer change = {this.handleChange}/>
                </div>
                {loading
                    ? <div className="spinners">
                        <div className="spinner-2"/>
                        <div className="spinner"/>
                    </div>
                    : <ListProductsComponent products={products}/>}
            </>
        );
    }
}


export default MainComponent;