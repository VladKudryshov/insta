import React, {Component} from 'react';
import {userService} from "../services/userService";
import {Link, NavLink} from "react-router";
import {storageUtils} from "../utils/StorageUtils";
import LoginComponent from "./LoginComponent";

class MenuComponent extends Component {

    handleLogout = () => {
        userService.logout();
    };

    state = {
        open: false,
        loginComponent: false
    };

    constructor(props) {
        super(props);

        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }


    handleLoginComponent = () => {
        const {loginComponent} = this.state;
        this.setState({loginComponent: !loginComponent})
    };

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    handleClickOutside(event) {
        const {open} = this.state;
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.setState({open: !open})
        }
    }


    handleMenuComponent = () => {
        const {open} = this.state;
        this.setState({open: !open})
    };

    render() {
        const {open, loginComponent} = this.state;
        return (
            <>
                {storageUtils.isAuth()
                    ?
                    <button className="sing-in" onClick={this.handleLoginComponent}>Sign in</button>
                    : <div className="account"
                           onClick={this.handleMenuComponent}>{localStorage.getItem('user')}</div>
                }
                {
                    open ?
                        <div className="account-menu card" ref={this.setWrapperRef}>
                            <div className="">
                                <div className="account-menu-list">
                                    <Link to="/account/profile" className="account-menu-link"   onClick={this.handleMenuComponent}><i className="far fa-user mr10"></i>Profile</Link>
                                    <Link to="/account/messages" className="account-menu-link"   onClick={this.handleMenuComponent}><i className="far fa-envelope mr10"></i>Messages</Link>
                                    <Link to="/account/settings" className="account-menu-link"   onClick={this.handleMenuComponent}><i className="fas fa-cog mr10"></i>Settings</Link>
                                    <span onClick={this.handleLogout} className="account-menu-link"><i className="fas fa-sign-out-alt mr10"></i>Logout</span>
                                </div>
                            </div>
                        </div>
                        : ''
                }
                <LoginComponent open={loginComponent} close={this.handleLoginComponent}> </LoginComponent>
            </>
        );
    }

}


export default MenuComponent;