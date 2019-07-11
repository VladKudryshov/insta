import React, {Component} from 'react';
import {userService} from "../../../services/userService";
import {Link, NavLink} from "react-router";
import {storageUtils} from "../../../utils/StorageUtils";
import LoginComponent from "../LoginComponent";

class AccountMenuComponent extends Component {


    constructor(props) {
        super(props);
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleCloseAccountMenu = this.handleCloseAccountMenu.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleCloseAccountMenu);
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    handleCloseAccountMenu(event) {

        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.props.close()
        }
    }

    handleLogout = () => {
        userService.logout();
    };

    render() {
        const {open} = this.props;
        return (

            open &&
            <div className="account-menu card" ref={this.setWrapperRef}>
                <div className="account-menu-list">
                    <Link to="/account" className="account-menu-link"
                          onClick={this.props.close}><i className="far fa-user tc"/>Аккаунт</Link>
                    <Link to="/orders" className="account-menu-link"
                          onClick={this.props.close}><i className="fas fa-shopping-cart tc"/>Заказы</Link>
                    <Link to="/account/messages" className="account-menu-link"
                          onClick={this.props.close}><i className="far fa-envelope tc"/>Сообщения</Link>
                    <Link to="/account/settings" className="account-menu-link"
                          onClick={this.props.close}><i className="fas fa-cog tc"/>Настройки</Link>
                    <Link className="account-menu-link"
                          onClick={this.handleLogout}><i className="fas fa-sign-out-alt tc"/>Выйти</Link>
                </div>
            </div>
        );
    }

}


export default AccountMenuComponent;