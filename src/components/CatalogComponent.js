import React, {Component} from 'react';
import ListProductsComponent from "./catalog/ListProductsComponent";
import {productService} from "../services/productService";
import SelectorContainer from "../containers/SelectorContainer";


class CatalogComponent extends Component {
    state = {
        test: 'Fruit'
    };


    componentDidMount() {
        const {actions: {loadData}} = this.props;
        loadData('')
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
        return (
            <div className="wrapper auto1fr">
                <div className="">
                    <SelectorContainer change = {this.handleChange}/>
                </div>
               <ListProductsComponent {...this.props}/>
            </div>
        );
    }
}


export default CatalogComponent;