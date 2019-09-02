import React, {Component} from "react";
import connect from "react-redux/es/connect/connect";
import {bindActionCreators} from "redux";
import {changeQuantityProductInBasket, deleteProductFromBasket, loadProductsBag} from "../../../actions/action";
import QuantityContainer from "../../../containers/QuantityContainer";
import {getPriceWithDiscount} from "../../../utils/other";
import LoaderContainer from "../../../containers/LoaderContainer";
import TableView from "../../admin/TableView";
import {get, isEmpty, reduce} from "lodash";

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

        const headers = {
            image: {
                name: ""
            },
            name: {
                name: "Название",
                style: {
                    textAlign: "left"
                }
            },
            category: {
                name: "Категория",
                style: {
                    textAlign: "left"
                }
            },
            price: {
                name: "Цена",
                style: {
                    textAlign: "right"
                }
            },
            count: {
                name: "Количество",
                style: {
                    textAlign: 'center'
                }
            },
            discount: {
                name: "Скидка",
                style: {
                    textAlign: 'right'
                }
            },
            total: {
                name: "Итого",
                style: {
                    textAlign: 'right'
                }
            }
        };

        let map = [];
        if (!isEmpty(products)) {
            map = products.map(product => {
                return {
                    ...product,
                    image: <img src={product.image} alt="" className="basket-product-image"/>,
                    total: (getPriceWithDiscount(product) * this.getQuantityById(product.id)).toFixed(2),
                    count: <QuantityContainer product={product}/>
                }
            });
        }

        let actions = {
            removeAction: this.deleteProductByID
        };
        let total = reduce(products, (prev, curr) => (Number.parseFloat((getPriceWithDiscount(prev) * this.getQuantityById(prev.id)).toFixed(2))
            + Number.parseFloat((getPriceWithDiscount(curr) * this.getQuantityById(curr.id)).toFixed(2))));
        let cost = reduce(products, (prev, curr) => prev.price * this.getQuantityById(prev.id) + curr.price * this.getQuantityById(curr.id));
        return (
            <LoaderContainer>
                <div>
                    <TableView headers={headers} data={map} actions={actions}
                               columnSize={{gridTemplateColumns: '8% 23% 16% 10% 15% 10% 10% 10%'}}/>
                    <table className="order-summary card">
                        <tbody>
                        <tr className="cost">
                            <td>Стоимость заказа</td>
                            <td>{cost ? Number(cost).toFixed(2) : 0} BYN</td>
                        </tr>
                        <tr className="discount">
                            <td>Скидка</td>
                            <td>{(cost - total).toFixed(2)} BYN</td>
                        </tr>
                        <tr className="total">
                            <td>Итого</td>
                            <td>{total ? Number(total).toFixed(2) : 0} BYN</td>
                        </tr>
                        </tbody>
                    </table>
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

