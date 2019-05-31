import React, {Component} from 'react';

class ProductComponent extends Component {


    constructor(props) {
        super(props);
        console.log(props)
    }


    render() {
        return (
            <div className="product card">
                <div className="product-title">{this.props.product.name}</div>
                <div className="product-price">
                    <div className="number">{this.props.product.price}</div>
                    <div className="currency">BYN</div>
                </div>
                <div className="product-image"><img
                    src={this.props.product.image} alt=""/></div>

            <div className="product-action">
                    <i className="fas fa-receipt left p14 sml"></i>
                    <i className="fas fa-shopping-basket basket p14 sml"></i>
                    <i className="far fa-bookmark right p14 sml"></i>
                </div>
            </div>
        );
    }
}


export default ProductComponent;