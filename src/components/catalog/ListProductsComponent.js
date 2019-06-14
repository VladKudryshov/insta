import React, {Component} from 'react';
import CardProductComponent from "./CardProductComponent";
import {get} from 'lodash';

class ListProductsComponent extends Component {


    render() {

        const {products} = this.props;

        const productList = products.map(product => {
            return <CardProductComponent key={get(product, 'id', '')} product = {product}/>
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