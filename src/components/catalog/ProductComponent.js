import React, {Component} from 'react';

class ProductComponent extends Component {

    state = {
        quantity: 0,
        open: false,
        inBasket: false,
    };


    handleSubmit = (e) => {
        e.preventDefault();
        this.openDialog();
        this.setState({quantity: 1})
        const {product: {id}} = this.props;
        let item = {id, quantity: 1};
        let order = JSON.parse(localStorage.getItem('order'));
        let oldItem = order ? order.find(i => i.id === id) : {};
        if (!oldItem && order) {
            order.push(item);
            localStorage.setItem('order', JSON.stringify(order));
            this.props.changeBasketSize()
            return;
        }
        localStorage.setItem('order', JSON.stringify([item]))
        this.props.changeBasketSize()
    };

    componentDidMount(){
        const {product: {id}} = this.props;

        let order = JSON.parse(localStorage.getItem('order'));
        let product = order ? order.find(i => i.id === id) : undefined;
        if(product){
            this.setState({quantity: product.quantity, open: true})
        }

    }

    changeQuantityIntoOrder = (quantity) => {
        const {product: {id}} = this.props;
        let order = JSON.parse(localStorage.getItem('order'));
        let oldItem = order ? order.find(i => i.id === id) : {};
        if (order && oldItem) {
            oldItem.quantity = quantity;
            if (quantity < 1) {
                order.splice(order.indexOf(oldItem), 1);
            }
            localStorage.setItem('order', JSON.stringify(order))
            this.props.changeBasketSize()
        }
    };

    decrease = () => {
        const {quantity} = this.state;
        let newValue = quantity - 1;
        this.setState({quantity: newValue})
        if (newValue < 1) {
            this.setState({open: false})
        }
        this.changeQuantityIntoOrder(newValue)
    };

    increase = () => {
        const {quantity} = this.state;
        let newValue = quantity + 1;
        this.setState({quantity: newValue});
        this.changeQuantityIntoOrder(newValue)
    };

    openDialog = () => {
        const {open} = this.state;
        this.setState({open: !open})
    }

    render() {
        const {quantity, open} = this.state;

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

                    <div className="product-action">
                        <i className="fas fa-receipt left p14 sml"></i>
                        {
                            open ? <div className="quantity card">
                                    <div className="quantity-action primary-c" onClick={this.decrease}>
                                        <i className="fas fa-minus"></i>
                                </div>
                                    <span className="quantity-number">{quantity}</span>
                                    <div className="quantity-action default-c" onClick={this.increase}>
                                        <i className="fas fa-plus"></i>
                                    </div>
                                </div>
                                :
                                <i className="fas fa-shopping-basket basket p14 sml" onClick={this.handleSubmit}></i>
                        }
                        <i className="far fa-bookmark right p14 sml"></i>
                    </div>
                </div>

            </div>
        );
    }


}


export default ProductComponent;