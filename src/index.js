import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {Provider} from 'react-redux'
import {browserHistory, IndexRoute, Route, Router} from "react-router";
import Root from "./components/basic/root/Root";
import HomeComponent from "./components/basic/home/HomeComponent";
import ProfileComponent from "./components/basic/account/ProfileComponent";
import RootAccount from "./components/basic/root/RootAccount";
import OrderStepperContainer from "./containers/order/OrderStepperContainer";
import OrderCard from "./containers/order/OrderCardContainer";
import RootOrders from "./components/basic/root/RootOrders";
import configureStore from "./configureStore";
import CatalogContainer from "./containers/products/CatalogContainer";
import LoginComponent from "./components/basic/LoginComponent";
import MessagesComponent from "./components/basic/account/MessagesComponent";
import BlogContainer from "./containers/blog/BlogContainer";
import PostContainer from "./containers/blog/PostContainer";
import AddressesComponent from "./components/basic/account/AddressesComponent";
import RootPanel from "./components/admin/root/RootPanel";
import AdminPanelProductsComponent from "./components/admin/AdminPanelProductsComponent";
import AdminStockProductsComponent from "./components/admin/AdminStockProductsComponent";
import AdminEmployeesComponent from "./components/admin/AdminEmployeesComponent";
import AdminOrdersProductsComponent from "./components/admin/AdminOrdersProductsComponent";
import AdminPanelProductComponent from "./components/admin/AdminPanelProductComponent";
import AdminPanelBlogComponent from "./components/admin/AdminPanelBlogComponent";
import ProductContainer from "./containers/products/ProductContainer";
import AdminPanelUsersComponent from "./components/admin/AdminPanelUsersComponent";

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Root}>
                <IndexRoute component={HomeComponent}/>
                <Route path="login" component={LoginComponent}/>
                <Route path="blog">
                    <IndexRoute component={BlogContainer}/>
                    <Route path=":id" component={PostContainer}/>
                </Route>
                <Route path="catalog">
                    <IndexRoute component={CatalogContainer}/>
                    <Route path=":id" component={ProductContainer}/>
                </Route>
                <Route path="basket" component={OrderStepperContainer}/>
                <Route path="account" component={RootAccount}>
                    <Route path="profile" component={ProfileComponent}/>
                    <Route path="messages" component={MessagesComponent}/>
                    <Route path="address" component={AddressesComponent}/>
                </Route>
                <Route path="orders" component={RootOrders}>
                    <Route path=":id" component={OrderCard}/>
                </Route>
            </Route>
            <Router path="/admin" component={RootPanel}>
                <Route path="catalog" component={AdminPanelProductsComponent}/>
                <Route path="catalog/new" component={AdminPanelProductComponent}/>
                <Route path="catalog/edit/:id" component={AdminPanelProductComponent}/>
                <Route path="stock" component={AdminStockProductsComponent}/>
                <Route path="employees" component={AdminEmployeesComponent}/>
                <Route path="orders" component={AdminOrdersProductsComponent}/>
                <Route path="orders/:id" component={OrderCard}/>
                <Route path="blog" component={AdminPanelBlogComponent}/>
                <Route path="users" component={AdminPanelUsersComponent}/>
            </Router>
        </Router>
    </Provider>,
    document.getElementById('root')
);
