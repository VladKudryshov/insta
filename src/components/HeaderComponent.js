import React, {Component} from 'react';

import {Link} from 'react-router'
import AccountHeaderComponent from "./AccountHeaderComponent";
import SimpleBasketContainer from "../containers/SimpleBasketContainer";
import SimpleNotificationContainer from "../containers/SimpleNotificationContainer";
import MobileMenuComponent from "./menus/MobileMenuComponent";
import DesktopMenuComponent from "./menus/DesktopMenuComponent";


class HeaderComponent extends Component {

    render() {

        return (
            <header>
                <MobileMenuComponent/>
                <div className="logo">
                    <Link to="/"><img src="/images/logo.png" alt="Logo"/></Link>
                </div>
                <DesktopMenuComponent/>
                <div className="notifications">
                    <SimpleBasketContainer/>
                    <SimpleNotificationContainer/>
                    <AccountHeaderComponent/>
                </div>
            </header>
        );
    }
}


export default HeaderComponent;