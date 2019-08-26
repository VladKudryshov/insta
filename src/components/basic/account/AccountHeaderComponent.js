import React, {Component} from 'react';

import {storageUtils} from "../../../utils/StorageUtils";
import AccountMenu from "../menus/AccountMenu";
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
                <AccountMenu close={this.handleAccountMenu} open={open}/>
            </>
        );
    }

}


export default AccountHeaderComponent;