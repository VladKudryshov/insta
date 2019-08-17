import React, {Component} from 'react';
import {Link} from "react-router";


class AdminPanelMenuComponent extends Component {

    render() {
        return (
            <div className="admin-card">
                <div className="account-menu-list">
                    <Link to="/admin/catalog" className="account-menu-link" activeClassName="active"><i
                        className="far fa-user tc"/>Продукты</Link>
                    <Link to="/admin/stock" className="account-menu-link" activeClassName="active"><i
                        className="fas fa-map-marker-alt tc"/>Остатки</Link>
                    <Link to="/admin/orders" className="account-menu-link" activeClassName="active"><i
                        className="far fa-sticky-note tc"/>Заказы</Link>
                    <Link to="/admin/blog" className="account-menu-link" activeClassName="active"><i
                        className="far fa-sticky-note tc"/>Новости</Link>
                    <Link to="/admin/users" className="account-menu-link" activeClassName="active"><i
                        className="fas fa-cog tc"/>Пользователи</Link>
                </div>
            </div>
        );
    }
}


export default AdminPanelMenuComponent;