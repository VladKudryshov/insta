import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import MenuComponent from "./MenuComponent";
import HomeComponent from "./HomeComponent";
import CatalogComponent from "./CatalogComponent";
import AccountComponent from "./AccountComponent";
import SimpleBasketContainer from "../containers/SimpleBasketContainer";
import SimpleNotificationContainer from "../containers/SimpleNotificationContainer";
import MobileMenuContainer from "../containers/MobileMenuContainer";
import {storageUtils} from "../utils/StorageUtils";
import OrderStepperComponent from "./OrderStepperComponent";


class MainComponent extends Component {

    render() {

        return (
            <>
                <Router>
                    <div className="wrapper">
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

                        <Switch>
                            <Route exact path="/" component={HomeComponent}/>
                            <Route path="/catalog"
                                   render={() => <CatalogComponent/>}/>
                            <Route path="/basket"
                                   render={() => <OrderStepperComponent/>}/>
                            <Route path="/account" component={AccountComponent}/>
                        </Switch>
                        <footer></footer>
                    </div>
                </Router>

            </>
        );
    }
}


export default MainComponent;