import React, {Component} from "react";
import connect from "react-redux/es/connect/connect";
import {bindActionCreators} from "redux";
import {changeQuantityProductInBasket, deleteProductFromBasket, loadProductsBag} from "../../../actions/action";
import QuantityContainer from "../../../containers/QuantityContainer";
import {getPriceWithDiscount} from "../../../utils/other";
import LoaderContainer from "../../../containers/LoaderContainer";

class BasketComponent extends Component {

    state = {
        loading: true
    };

    componentDidMount() {
        const {basket: {basket}, actions: {loadProductsBag}} = this.props;
        if (basket && basket.length > 0) {
            let ids = basket.map(it => it.id);
            loadProductsBag(ids)
        }
    }

    getQuantityById = (id) => {
        const {basket: {basket}} = this.props;
        let find = basket.find(f => f.id === id);
        let number = find ? find.quantity : 0;
        return Number(Number(number).toFixed(2));
    };

    deleteProductByID = (e, id) => {
        e.preventDefault();
        const {actions: {changeQuantityProductInBasket, deleteProductFromBasket}} = this.props;
        changeQuantityProductInBasket(id, 0);
        deleteProductFromBasket(id);
    };


    render() {
        const {basket: {products}} = this.props;

        return (
            <LoaderContainer>

                <div className="basket-box card">
                    <ul className=" ">
                        <ul key="-1" className=''>
                            <li>Название</li>
                            <li>Категория</li>
                            <li>Скидка</li>
                            <li>Цена</li>
                            <li>Количество</li>
                            <li>Итого</li>
                            <li/>
                        </ul>
                        {
                            products.map(product => <ul key={product.id} className=''>
                                <li>{product.name}</li>
                                <li>{product.category}</li>
                                <li>{product.discount} %</li>
                                <li>{getPriceWithDiscount(product)} BYN за {product.unitName}</li>

                                <li>
                                    <QuantityContainer product={product}/>
                                </li>
                                <li>{(getPriceWithDiscount(product) * this.getQuantityById(product.id)).toFixed(2)} BYN</li>
                                <li onClick={(event) => this.deleteProductByID(event, product.id)} className="tx-l">
                                    <i className="fas fa-trash"/>
                                </li>
                            </ul>)
                        }
                    </ul>
                </div>
            </LoaderContainer>
        )

    }


}

const mapStateToProps = (state) => {
    const {basket, loader} = state;
    return ({
        basket,
        loader
    });
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        changeQuantityProductInBasket,
        deleteProductFromBasket,
        loadProductsBag
    }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(BasketComponent);

