import React, {Component} from 'react';

class ProductComponent extends Component {


    handleSubmit = (e) => {
        e.preventDefault();

        const {product: {id}, quantity} = this.props;
        let item  = {id, quantity}
        let oreder = JSON.parse(localStorage.getItem('order'));
        let oldItem = oreder ? oreder.find(i => i.id === id) : [];
        if(oreder && oldItem){
            oldItem.quantity = quantity;
            localStorage.setItem('order', JSON.stringify(oreder));
            return;
        }else if(!oldItem && oreder){
            oreder.push(item);
            console.log(oreder)
            localStorage.setItem('order', JSON.stringify(oreder));
            return;
        }

        localStorage.setItem('order', JSON.stringify([item]))

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
                    <i className="fas fa-shopping-basket basket p14 sml" onClick={this.handleSubmit}></i>
                    <i className="far fa-bookmark right p14 sml"></i>
                </div>
            </div>
        );
    }
}


export default ProductComponent;