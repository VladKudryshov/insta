import React, {Component} from 'react';
import {BrowserRouter as Router, NavLink, Route, Switch} from 'react-router-dom';
import LoginComponent from "./LoginComponent";
import MenuComponent from "./MenuComponent";
import SliderComponent from "./SliderComponent";


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
                    <div className="wrapper">
                        <header>
                            <div className="logo">
                                <img src="/images/logo.png" alt="Logo"/>
                            </div>
                            <div className="menu">
                                <ul className="horizontal">
                                    {/*<li><NavLink exact to="/posts">Posts</NavLink></li>*/}
                                    <li>Home</li>
                                    <li>Catalog</li>
                                    <li>Blog</li>
                                    <li>Delivery</li>
                                    <li>About us</li>
                                </ul>
                            </div>
                            <ul className="notifications">
                                <li className="fas fa-shopping-basket hover"></li>
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


                        <SliderComponent/>
                        <div className="information">
                            <div className="card small-box">
                                <div className="some-img">
                                    <img src="images/vegetables-hand-drawn-basket.png" alt=""/>
                                </div>
                                <div className="short-text">100% Organic</div>
                                <div className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Accusantium adipisci
                                    labore mollitia quasi, totam voluptatem?
                                </div>
                            </div>
                            <div className="card small-box">
                                <div className="some-img">
                                    <img src="images/fast-delivery.png" alt=""/>
                                </div>
                                <div className="short-text">Fast Delivery</div>
                                <div className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Accusantium adipisci
                                    labore mollitia quasi, totam voluptatem?
                                </div>
                            </div>
                            <div className="card small-box">
                                <div className="some-img"><img src="images/diet.png" alt=""/></div>
                                <div className="short-text">Healthy</div>
                                <div className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Accusantium adipisci
                                    labore mollitia quasi, totam voluptatem?
                                </div>
                            </div>
                        </div>
                        <ul className="categories card">
                            <li><img src="images/salad-bowl-hand-drawn-food.png" alt=""/></li>
                            <li><img src="images/lettuce.png" alt=""/></li>
                            <li><img src="images/apple-and-grapes-on-a-bowl.png" alt=""/></li>
                            <li><img src="images/strawberry.png" alt=""/></li>
                            <li><img src="images/plant-with-leaves.png" alt=""/></li>
                        </ul>
                        <div className="blog-cards">
                            <div className="blog-card card">
                                <img src="" alt=""/>
                                <h2 className="title">wqtwqdsad</h2>
                                <div className="date"><i className="far fa-calendar-alt mr10"></i>12/21/21 12:12
                                </div>
                                <div className="short-content">Lorem ipsum dolor sit amet, consectetur adipisicing
                                    elit. Amet asperiores consequatur dolore doloribus, labore maxime nobis
                                    provident quam quo suscipit.
                                </div>
                                <a href="#" className="read-more">READ MORE</a>
                            </div>
                            <div className="blog-card card">
                                <img src="" alt=""/>
                                <h2 className="title">wqtwqdsad</h2>
                                <div className="date"><i className="far fa-calendar-alt mr10"></i>12/21/21 12:12
                                </div>
                                <div className="short-content">Lorem ipsum dolor sit amet, consectetur adipisicing
                                    elit. Amet asperiores consequatur dolore doloribus, labore maxime nobis
                                    provident quam quo suscipit.
                                </div>
                                <a href="#" className="read-more">READ MORE</a>
                            </div>
                        </div>
                        <Switch>
                            {/*<Route path="/posts" component={ListPostComponent}/>*/}
                        </Switch>
                        <footer></footer>
                    </div>
                </Router>

            </>
        );
    }
}


export default PrimarySearchAppBar;