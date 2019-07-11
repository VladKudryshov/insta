import React, {Component} from 'react';

import {storageUtils} from "../../utils/StorageUtils";
import AccountMenuComponent from "./menus/AccountMenuComponent";
import {Link} from "react-router";

class AccountHeaderComponent extends Component {

    state = {
        open: false
    };

    handleAccountMenu = () => {
        const {open} = this.state;
        this.setState({open: !open})
    };

    render() {
        const {open} = this.state;
        return (
            <>
                {storageUtils.isAuth()
                    ? <div className="account"
                           onClick={this.handleAccountMenu}>{localStorage.getItem('user')}</div>
                    : <Link className="sing-in" to="login">Войти</Link>

                }
                <AccountMenuComponent close={this.handleAccountMenu} open={open}/>
            </>
        );
    }

}


export default AccountHeaderComponent;