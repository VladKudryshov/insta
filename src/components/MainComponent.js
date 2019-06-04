import React, {Component} from 'react';
import {BrowserRouter as Router, Link, NavLink, Route, Switch} from 'react-router-dom';
import LoginComponent from "./LoginComponent";
import MenuComponent from "./MenuComponent";
import HomeComponent from "./HomeComponent";
import CatalogComponent from "./CatalogComponent";
import BasketComponent from "./BasketComponent";
import {basketService} from "../services/basketService";
import AccountComponent from "./AccountComponent";


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

    componentDidMount() {
        basketService.getBasket();
        this.changeSizeBasket();
    }

    changeSizeBasket = () => {
        let order = JSON.parse(localStorage.getItem("order"));
        if (order) {
            this.setState({size: order.length});
            return;
        }
        this.setState({size: 0});
    };

    getCountProductsInBasket = () => {
        const {size} = this.state;
        if (size < 1) return '';
        let quantity = size > 9 ? '9+' : size;
        return <span className="not-empty">{quantity}</span>;
    };

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
                                <li><Link to="/basket"><i
                                    className="fas fa-shopping-basket hover center">{this.getCountProductsInBasket()}</i></Link>
                                </li>
                                <li><Link to="/basket"><i className="far fa-bell "></i></Link></li>
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
                                   render={() => <CatalogComponent changeBasketSize={this.changeSizeBasket}/>}/>
                            <Route path="/basket"
                                   render={() => <BasketComponent changeBasketSize={this.changeSizeBasket}/>}/>
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