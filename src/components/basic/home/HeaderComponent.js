import React, {Component} from 'react';
import AccountHeaderComponent from "../account/AccountHeaderComponent";
import SimpleBasketContainer from "../../../containers/SimpleBasketContainer";
import SimpleNotificationContainer from "../../../containers/SimpleNotificationContainer";
import MobileMenuComponent from "../menus/MobileMenuComponent";
import DesktopMenu from "../menus/DesktopMenu";
import Notification from "../../notification/Notifications";


class HeaderComponent extends Component {

    render() {

        return (
            <>
                <Notification/>
                <header>
                    <MobileMenuComponent/>
                    <div className="logo">
                        {/*<Link to="/"><img src="/images/logo.png" alt="Logo"/></Link>*/}
                    </div>
                    <DesktopMenu/>
                    <div className="notifications">
                        {/*<SimpleBasketContainer/>*/}
                        <SimpleNotificationContainer/>
                        <AccountHeaderComponent/>
                    </div>
                </header>
            </>
        );
    }
}


export default HeaderComponent;