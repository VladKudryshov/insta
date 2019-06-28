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

    constructor(props) {
        super(props);

        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleCloseAccountMenu = this.handleCloseAccountMenu.bind(this);
    }


    handleLoginComponent = () => {
        const {loginComponent} = this.state;
        this.setState({loginComponent: !loginComponent})
    };

    componentDidMount() {
        document.addEventListener('mousedown', this.handleCloseAccountMenu);
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    handleCloseAccountMenu(event) {
        const {open} = this.state;
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.setState({open: !open})
        }
    }


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