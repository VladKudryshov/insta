import React, {Component} from 'react';
import ProductAction from '../../containers/ProductActionContainer'


class CardProductComponent extends Component {

    render() {

        return (
            <div className="product card">
                <div className="product-content">
                    <div className="product-title">
                        <div> {this.props.product.name}</div>
                        <div className="units">{this.props.product.unitNumber} {this.props.product.unitName}</div>
                    </div>
                    <div className="product-price card">
                        <div className="price">{this.props.product.price} BYN</div>
                        <div className="discount">
                            <div>{this.props.product.discount}%</div>
                        </div>
                        <div
                            className="new-price">{(this.props.product.price / 100 * (100 - this.props.product.discount)).toFixed(2)} BYN
                        </div>
                    </div>
                    <div className="product-image"><img
                        src={this.props.product.image} alt=""/></div>
                    <ProductAction id={this.props.product.id}/>
                </div>

            </div>
        );
    }


}


export default CardProductComponent;