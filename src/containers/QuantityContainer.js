import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {changeQuantityProductInBasket, deleteProductFromBasket} from "../actions/action";
import connect from "react-redux/es/connect/connect";

class QuantityContainer extends Component {

    state = {
        value: ''
    };


    componentDidMount() {
        this.setState({value: this.format(this.getQuantityById(this.props.product.id))})
    }

    getQuantityById = (id) => {
        const {basket: {basket}} = this.props;
        let find = basket.find(f => f.id === id);
        let number = find ? find.quantity : 0;
        return Number(number);
    };


    changeQuantityIntoOrder = (id, quantity) => {
        quantity = Number.parseFloat(quantity).toFixed(2);
        const {actions: {changeQuantityProductInBasket, deleteProductFromBasket}} = this.props;
        changeQuantityProductInBasket(id, Number.parseFloat(quantity));
        if (Number.parseFloat(quantity) === 0) {
            deleteProductFromBasket(id)
        }
    };

    format = (number) => {
        return Number(Number(number).toFixed(2)).toLocaleString(navigator.language, {minimumFractionDigits: 2});
    }

    handleOnChangeInput = (e, id) => {
        const {target: {value}} = e;
        this.setState({value: value})
        // this.changeQuantityIntoOrder(id, Number(value))
    }

    decrease = (id) => {
        // let newValue = this.getQuantityById(id) - 0.05;
        let newValue = Number(this.state.value) - 0.05;
        if(newValue>=0){
            this.setState({value: this.format(newValue)})
        }
        // this.changeQuantityIntoOrder(id, newValue)
    };

    increase = (id) => {
        // let newValue = Number(this.getQuantityById(id)) + 0.05;
        let newValue = Number(this.state.value) + 0.05;
        this.setState({value: this.format(newValue)})
        // this.changeQuantityIntoOrder(id, newValue)
    };

    render() {
        const {product} = this.props;
        const {value} = this.state;

        return <div className="quantity">
            <div className="quantity-action" onClick={() => this.decrease(product.id)}>
                <i className="fas fa-minus"></i>
            </div>
            <div className="quantity-number">
                <input className="" value={value}
                       onChange={(e) => this.handleOnChangeInput(e, product.id)}/>
            </div>
            <div className="quantity-action" onClick={() => this.increase(product.id)}>
                <i className="fas fa-plus"></i>
            </div>
        </div>

    }


}

const mapStateToProps = (state) => {
    const basket = state.basket;
    return ({
        basket
    });
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        changeQuantityProductInBasket,
        deleteProductFromBasket
    }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuantityContainer);

