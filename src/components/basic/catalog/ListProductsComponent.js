import React, {Component} from 'react';
import {get} from 'lodash';
import CardProductComponent from "./CardProductComponent";

import LoaderContainer from "../../../containers/LoaderContainer";

class ListProductsComponent extends Component {


    render() {

        const {products} = this.props;

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