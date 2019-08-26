import React from 'react';
import {Link} from "react-router";
import ProductAction from "../../../containers/products/ProductActionContainer";

const Product = ({product}) => (
    <div className="product card">
        <div className="product-content">
            <div className="product-title">
                <Link to={{pathname: `/products/${product.id}`}}> {product.name}</Link>
                <div className="units">{product.unitNumber} {product.unitName}</div>
            </div>
            <div className="product-price card">
                <div className="price">{product.price} BYN</div>
                <div className="discount">
                    <div>{product.discount}%</div>
                </div>
                <div
                    className="new-price">{(product.price / 100 * (100 - product.discount)).toFixed(2)} BYN
                </div>
            </div>
            <div className="product-image"><img
                src={product.image} alt={product.name}/></div>
            <ProductAction id={product.id}/>
        </div>
    </div>
);


export default Product;