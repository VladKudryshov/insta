import React, {Component} from 'react';
import {BrowserRouter as Router, Link, NavLink, Route, Switch} from 'react-router-dom';
import LoginComponent from "./LoginComponent";
import MenuComponent from "./MenuComponent";
import HomeComponent from "./HomeComponent";
import CatalogComponent from "./CatalogComponent";
import BasketComponent from "./BasketComponent";
import {basketService} from "../services/basketService";
import AccountComponent from "./AccountComponent";
import SimpleBasketContainer from "../containers/SimpleBasketContainer";
import SimpleNotificationContainer from "../containers/SimpleNotificationContainer";


class MainComponent extends Component {
    state = {
        loginComponent: false,
        menuComponent: false,
        mobileMoreAnchorEl: null,
        size: 0
    };

    handleOpenLoginComponent = event => {
        const {loginComponent} = this.state;
        this.setState({loginComponent: !loginComponent})
    };

    handleOpenMenuComponent = event => {
        const {menuComponent} = this.state;
        this.setState({menuComponent: !menuComponent})
    };

    handleLoginClose = () => {
        this.setState({loginComponent: false});
    };

    handleMenuClose = () => {
        this.setState({menuComponent: false});
    };


    isAuth() {
        return localStorage.getItem('token') === null
    }

    render() {

        const {loginComponent, menuComponent} = this.state;

        return (
            <>
                <Router>
                    <div className="wrapper">
                        <header>
                            <div className="logo">
                                <img src="/images/logo.png" alt="Logo"/>
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
                            <ul className="notifications">
                                <SimpleBasketContainer/>
                                <SimpleNotificationContainer/>
                            </ul>

                            {this.isAuth()
                                ? <button className="sing-in" onClick={this.handleOpenLoginComponent}>Sign in</button>
                                : <div className="account"
                                       onClick={this.handleOpenMenuComponent}>{localStorage.getItem('user')}</div>
                            }

                            <LoginComponent open={loginComponent} close={this.handleLoginClose}> </LoginComponent>
                            <MenuComponent open={menuComponent} close={this.handleMenuClose}> </MenuComponent>
                        </header>

                        <Switch>
                            <Route exact path="/" component={HomeComponent}/>
                            <Route path="/catalog"
                                   render={() => <CatalogComponent/>}/>
                            <Route path="/basket"
                                   render={() => <BasketComponent/>}/>
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