import React from 'react';
import {get, isArray, isEmpty} from 'lodash';
import CardProductComponent from "./CardProductComponent";

import LoaderContainer from "../../../containers/LoaderContainer";

const ListProducts = ({products}) => (
    <LoaderContainer>
        <div className="content">
            <div className="products">
                {products.map(product => (<CardProductComponent key={get(product, 'id', '')} product={product}/>))}
            </div>
        </div>
    </LoaderContainer>

)


export default ListProducts;