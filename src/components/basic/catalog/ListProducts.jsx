import React from 'react';
import {get, isEmpty} from 'lodash';

import LoaderContainer from "../../../containers/LoaderContainer";
import Product from "./Product";

const ListProducts = ({products}) => (
    <LoaderContainer>
        {!isEmpty(products) && <div className="content">
            <div className="products">
                {products.map(product => (<Product key={get(product, 'id', '')} product={product}/>))}
            </div>
        </div>}
    </LoaderContainer>

)


export default ListProducts;