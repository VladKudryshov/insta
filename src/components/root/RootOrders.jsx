import React from 'react';
import AccountComponent from "../AccountComponent";
import OrdersComponent from "../account/OrdersComponent";


const RootOrders = ({ children }) => (
    <div className="wrapper auto1fr ">
        <OrdersComponent/>
        {children}
    </div>
);


RootOrders.defaultProps = {
  children: null,
};

export default RootOrders;
