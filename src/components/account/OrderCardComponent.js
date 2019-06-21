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

    componentDidUpdate(){
        orderService.getOrderById(this.props.params.id)
            .then(order => this.setState({order: order}));
    }

    componentWillUnmount() {
        this.setState({order: {
                orderContact: {},
                productOrder: []
            }})
    }


    render() {
        const {order: {orderContact, productOrder}} = this.state;

        let products = productOrder.map(product => <ul key={product.id}>
                <li>{product.name}</li>
                <li>{product.discount}</li>
                <li>{product.priceWithDiscount}</li>
                <li>{product.totalPrice}</li>
            </ul>
        );
        return (
            <div className="order-component" key={this.props.params.id}>
                <div className="order-info">
                    <div className="order-info-title">
                        Order: {this.props.params.id}
                    </div>
                    <div className="card cl2-rw1 order-info-contacts">
                        <table className="order-info-person">
                            <tbody>
                            <tr>
                                <td>First Name:</td>
                                <td>{orderContact.userName}</td>
                            </tr>
                            <tr>
                                <td>Second Name:</td>
                                <td>{orderContact.userSecondName}</td>
                            </tr>
                            <tr>
                                <td>Phone:</td>
                                <td>{orderContact.userPhone}</td>
                            </tr>
                            </tbody>
                        </table>
                        <table className="order-info-address">
                            <tbody>
                            <tr>
                                <td>City:</td>
                                <td>{orderContact.city}</td>
                            </tr>
                            <tr>
                                <td>Street:</td>
                                <td>{orderContact.street}</td>
                            </tr>
                            <tr>
                                <td>House:</td>
                                <td>{orderContact.house}</td>
                            </tr>
                            <tr>
                                <td>Flat:</td>
                                <td>{orderContact.flat}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="order-info-products card">
                        <ul>
                            <li>Product NAme</li>
                            <li>Discount</li>
                            <li>Price</li>
                            <li>Total Price</li>
                        </ul>
                        {products}
                    </div>
                </div>
            </div>
        )
    }
}


export default OrderCardComponent;