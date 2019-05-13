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
                                <li>{this.isAuth()
                                    ? <button className="btn" onClick={this.handleProfileMenuOpen}>Вход</button>
                                    : <button className="btn" onClick={this.handleLogout}>Выход</button>
                                }
                                </li>
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