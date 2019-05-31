import React, {Component} from 'react';
import {BrowserRouter as Router, NavLink, Route, Switch} from 'react-router-dom';
import LoginComponent from "./LoginComponent";
import MenuComponent from "./MenuComponent";
import HomeComponent from "./HomeComponent";
import CatalogComponent from "./CatalogComponent";
import BasketComponent from "./BasketComponent";


class MainComponent extends Component {
    state = {
        loginComponent: false,
        menuComponent: false,
        mobileMoreAnchorEl: null,
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
                                    <li><NavLink exact to="/">Home</NavLink></li>
                                    <li><NavLink exact to="/catalog">Catalog</NavLink></li>
                                    <li>Blog</li>
                                    <li>Delivery</li>
                                    <li>About us</li>
                                </ul>
                            </div>
                            <ul className="notifications">
                                <li className="fas fa-shopping-basket hover"><NavLink exact to="/basket"/></li>
                                <li className="far fa-bell hover"></li>
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
                            <Route path="/catalog" component={CatalogComponent}/>
                            <Route path="/basket" component={BasketComponent}/>
                        </Switch>
                        <footer></footer>
                    </div>
                </Router>

            </>
        );
    }
}


export default MainComponent;