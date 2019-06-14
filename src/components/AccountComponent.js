import React, {Component} from 'react';
import {Link} from "react-router";


class AccountComponent extends Component {

    render() {

        return (
                <div className="card">
                        <div className="account-menu-list">
                            <Link  to="/account/profile" className="account-menu-link" activeClassName="active"><i className="far fa-user mr10"></i>Profile</Link>
                            <Link  to="/account/orders" className="account-menu-link" activeClassName="active"><i className="fas fa-shopping-cart mr10"></i>Orders</Link>
                        </div>
                </div>
        );
    }
}


export default AccountComponent;