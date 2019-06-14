import React, {Component} from 'react';
import {get} from 'lodash';
import {userService} from "../../services/userService";
import {orderService} from "../../services/orderService";

const OrderCardComponent = (props) => {

        orderService.getOrderById(props.params.id)
            .then(order => console.log(order))
        return <div className="order-info card">{props.params.id}</div>
};


export default OrderCardComponent;