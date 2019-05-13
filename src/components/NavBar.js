import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    NavLink
} from 'react-router-dom';
import LoginComponent from "./LoginComponent";
import {userService} from "../services/userService";


class PrimarySearchAppBar extends Component {
    state = {
        openComponent: false,
        mobileMoreAnchorEl: null,
    };

    handleProfileMenuOpen = event => {
        const {openComponent} = this.state;
        this.setState({openComponent: !openComponent})
    };

    handleMenuClose = () => {
        this.setState({openComponent: false});
    };

    handleLogout = () => {
        userService.logout();
    };

    isAuth() {
        return localStorage.getItem('token') === null
    }

    render() {

        const {openComponent} = this.state;

        return (
            <>
                <div className="AppBar">
                    <Router>
                        <header>
                            <ul className="menu">
                                <li><NavLink exact to="/">Главная</NavLink></li>
                                <li><NavLink to="/products" activeClassName="active">Продукты</NavLink></li>
                                <li><NavLink to="/cart" activeClassName="active">Новости</NavLink></li>

                                {this.isAuth()
                                    ? <button onClick={this.handleProfileMenuOpen}>Вход</button>
                                    : <button onClick={this.handleLogout}>Выход</button>
                                }

                            </ul>
                            <LoginComponent open={openComponent} close={this.handleMenuClose}> </LoginComponent>
                        </header>

                    </Router>

                </div>

            </>
        );
    }
}


export default PrimarySearchAppBar;