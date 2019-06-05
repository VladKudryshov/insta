import React, {Component} from 'react';
import ProductAction from '../../containers/ProductActionContainer'


class ProductComponent extends Component {

    render() {

        return (
            <div className="product card">
                <div className="product-content">
                    <div className="product-title">{this.props.product.name}</div>
                    <div className="product-price">
                        <div className="number">{this.props.product.price}</div>
                        <div className="currency">BYN</div>
                    </div>
                    <div className="product-image"><img
                        src={this.props.product.image} alt=""/></div>
                    <ProductAction id = {this.props.product.id}/>
                </div>

            </div>
        );
    }


}


export default ProductComponent;