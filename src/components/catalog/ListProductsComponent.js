import React, {Component} from 'react';
import CardProductComponent from "./CardProductComponent";
import {get} from 'lodash';
import LoaderContainer from "../../containers/LoaderContainer";

class ListProductsComponent extends Component {


    render() {

        const {products, loader} = this.props;

        const productList = products.map(product => {
            return <CardProductComponent key={get(product, 'id', '')} product={product}/>
        });

        return (
            <LoaderContainer>
                <div className="content">
                    <div className="products">
                        {productList}
                    </div>
                </div>
            </LoaderContainer>
        );
    }
}


export default ListProductsComponent;