import React, {Component} from 'react';
import {NavLink} from "react-router";
import {storageUtils} from "../utils/StorageUtils";
import LoginComponent from "./LoginComponent";
import AccountMenuComponent from "./menus/AccountMenuComponent";

class AccountHeaderComponent extends Component {

    state = {
        open: false,
        loginComponent: false
    };

    handleLoginComponent = () => {
        const {loginComponent} = this.state;
        this.setState({loginComponent: !loginComponent})
    };




    handleAccountMenu = () => {
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
                           onClick={this.handleAccountMenu}>{localStorage.getItem('user')}</div>
                }
                <AccountMenuComponent close={this.handleAccountMenu} open={open}/>
                <LoginComponent open={loginComponent} close={this.handleLoginComponent}> </LoginComponent>
            </>
        );
    }

}


export default AccountHeaderComponent;