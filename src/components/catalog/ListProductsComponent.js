import React, {Component} from 'react';
import ProductComponent from "./ProductComponent";
import {get} from 'lodash';

class ListProductsComponent extends Component {


    render() {

        const {products} = this.props;

        const productList = products.map(product => {
            return <ProductComponent key={get(product, 'id', '')} product = {product} changeBasketSize = {this.props.changeBasketSize}/>
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