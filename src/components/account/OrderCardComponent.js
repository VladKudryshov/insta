import React, {Component} from 'react';
import {get} from 'lodash';
import {userService} from "../../services/userService";
import {orderService} from "../../services/orderService";

const OrderCardComponent = (props) => {

        console.log()
        return <div className="order-info card">{props.params.id}</div>
};


export default OrderCardComponent;