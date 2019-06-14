import React, {Component} from 'react';

import {Link} from 'react-router'
import MenuComponent from "./MenuComponent";
import SimpleBasketContainer from "../containers/SimpleBasketContainer";
import SimpleNotificationContainer from "../containers/SimpleNotificationContainer";
import MobileMenuContainer from "../containers/MobileMenuContainer";
import {storageUtils} from "../utils/StorageUtils";


class HeaderComponent extends Component {

    render() {

        return (
            <header>
                <MobileMenuContainer/>
                <div className="logo">
                    <Link to="/"><img src="/images/logo.png" alt="Logo"/></Link>
                </div>
                <div className="menu">
                    <ul className="horizontal">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/catalog">Catalog</Link></li>
                        <li>Blog</li>
                        <li>Delivery</li>
                        <li>About us</li>
                    </ul>
                </div>
                <div className="notifications">
                    <SimpleBasketContainer/>

                    {storageUtils.isAuth() ? '' : <SimpleNotificationContainer/>}
                    <MenuComponent/>
                </div>
            </header>
        );
    }
}


export default HeaderComponent;