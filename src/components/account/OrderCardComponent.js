import React, {Component} from 'react';
import {get} from 'lodash';
import {orderService} from "../../services/orderService";

class OrderCardComponent extends Component {

    state = {
        order: {
            orderContact: {},
            productOrder: []
        }
    };

    componentDidMount(){
        orderService.getOrderById(this.props.params.id)
            .then(order => this.setState({order: order}));

        console.log("test")
    }

    render() {
        const {order: {orderContact, productOrder, orderStatus}} = this.state;


        let products = productOrder.map(product => <ul key={product.id}>
                <li>{product.name}</li>
                <li className="tx-l">{product.discount}%</li>
                <li className="tx-l">{product.priceWithDiscount} BYN</li>
                <li className="tx-l">{product.totalPrice} BYN</li>
            </ul>
        );
        return (
            <div className="order-component" key={this.props.params.id}>
                <div className="order-info">
                    <ul className="order-info-title card">
                        <li>Заказ №{this.props.params.id}</li>
                        <li className="tx-l">Статус: {orderStatus}</li>
                    </ul>
                    <div className="card cl2-rw1 order-info-contacts">
                        <table className="order-info-person">
                            <tbody>
                            <tr>
                                <td>Имя:</td>
                                <td>{orderContact.userName}</td>
                            </tr>
                            <tr>
                                <td>Фамилия:</td>
                                <td>{orderContact.userSecondName}</td>
                            </tr>
                            <tr>
                                <td>Телефон:</td>
                                <td>{orderContact.userPhone}</td>
                            </tr>
                            </tbody>
                        </table>
                        <table className="order-info-address">
                            <tbody>
                            <tr>
                                <td>Город:</td>
                                <td>{orderContact.city}</td>
                            </tr>
                            <tr>
                                <td>Улица:</td>
                                <td>{orderContact.street}</td>
                            </tr>
                            <tr>
                                <td>Дом:</td>
                                <td>{orderContact.house}</td>
                            </tr>
                            <tr>
                                <td>Квартира:</td>
                                <td>{orderContact.flat}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="order-info-products card">
                        <ul>
                            <li>Название</li>
                            <li className="tx-l">Скидка</li>
                            <li className="tx-l">Цена со скидкой</li>
                            <li className="tx-l">Итого</li>
                        </ul>
                        {products}
                    </div>
                </div>
            </div>
        )
    }
}


export default OrderCardComponent;