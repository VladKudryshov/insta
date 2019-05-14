import React, {Component} from 'react';
import {BrowserRouter as Router, NavLink, Route, Switch} from 'react-router-dom';
import LoginComponent from "./LoginComponent";
import MenuComponent from "./MenuComponent";
import ReportsComponent from "./ReportsComponent";
import ListPostComponent from "./ListPostComponent";


class PrimarySearchAppBar extends Component {
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
                    <div className="AppBar">
                        <header>
                            <ul className="menu">
                                <li><NavLink exact to="/posts">Posts</NavLink></li>
                                <li><NavLink to="/reports" activeClassName="active">Reports</NavLink></li>

                                <li>{this.isAuth()
                                    ? <button className="btn" onClick={this.handleOpenLoginComponent}>Sign in</button>
                                    : <button className="btn"
                                              onClick={this.handleOpenMenuComponent}>{localStorage.getItem('user')}</button>
                                }
                                </li>
                            </ul>
                            <div>
                                <LoginComponent open={loginComponent} close={this.handleLoginClose}> </LoginComponent>
                                <MenuComponent open={menuComponent} close={this.handleMenuClose}> </MenuComponent>
                            </div>
                        </header>
                    </div>
                    <div>
                        <Switch>
                            <Route path="/reports" component={ReportsComponent}/>
                            <Route path="/posts" component={ListPostComponent}/>
                        </Switch>
                    </div>
                </Router>

            </>
        );
    }
}


export default PrimarySearchAppBar;