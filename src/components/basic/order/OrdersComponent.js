import React, {Component} from 'react';
import {get} from 'lodash';
import {orderService} from "../../../services/orderService";
import moment from 'moment';
import {Link} from "react-router";

class OrdersComponent extends Component {


    state = {
        orders: []
    };

    componentDidMount() {
        orderService.getUserOrders()
            .then(user => this.setState({orders: user}))
    }


    getDate = (f) => {
        let date = new Date(f);
        return moment(date).format('DD/MM/YYYY');
    }

    render() {

        const {orders} = this.state;


        let map = orders.map(f => {
            return (
                <Link className="order-simple-item" to={{pathname: `/orders/${f.id}`}} key={f.id}
                      activeClassName="active">
                    <li>
                        <div className="order-id">Заказ №{f.id}</div>
                        <div className="date"><i className="far fa-calendar-alt"/> {this.getDate(f.created)}
                        </div>
                    </li>
                    <li className="order-status">{f.status}</li>
                </Link>
            )
        });

        return (
            <ul className="order-list card">{map}</ul>
        );
    }


}

export default OrdersComponent;