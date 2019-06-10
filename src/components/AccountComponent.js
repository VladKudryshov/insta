import React, {Component} from 'react';
import ListProductsComponent from "./catalog/ListProductsComponent";
import {productService} from "../services/productService";
import ProfileComponent from "./account/ProfileComponent";
import {NavLink, Route} from "react-router-dom";
import BasketComponent from "./BasketComponent";


class AccountComponent extends Component {

    render() {

        return (
            <>
                <div className="card">
                        <div className="account-menu-list">
                            <NavLink exact to="/account/profile" className="account-menu-link" activeClassName="active"><i className="far fa-user mr10"></i>Profile</NavLink>
                            <NavLink exact to="/account/messages" className="account-menu-link" activeClassName="active"><i className="far fa-envelope mr10"></i>Messages</NavLink>
                            <NavLink exact to="/account/settings" className="account-menu-link" activeClassName="active"><i className="fas fa-cog mr10"></i>Settings</NavLink>
                            <NavLink exact to="/account/settings" className="account-menu-link" activeClassName="active">

                                <i className="fas fa-shopping-cart mr10"></i>
                                Orders</NavLink>
                        </div>
                </div>
                <Route exact path="/account/profile" render={() => <ProfileComponent/>}/>
            </>
        );
    }
}


export default AccountComponent;