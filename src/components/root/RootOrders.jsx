import React from 'react';
import OrdersComponent from "../order/OrdersComponent";


const RootOrders = ({children}) => (
    <div className="wrapper auto1fr ">
        <OrdersComponent/>
        {children}
    </div>
);


RootOrders.defaultProps = {
    children: null,
};

export default RootOrders;
