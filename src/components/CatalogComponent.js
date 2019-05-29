import React, {Component} from 'react';
import {BrowserRouter as Router, NavLink, Route, Switch} from 'react-router-dom';
import LoginComponent from "./LoginComponent";
import MenuComponent from "./MenuComponent";
import SliderComponent from "./SliderComponent";


class MainComponent extends Component {

    render() {

        return (
            <>
                <div className="admin-menu"></div>
                <div className="content card">
                    <div className="products">
                        <div className="product">
                            <div className="product-title">Product</div>
                            <div className="product-price">
                                <div className="number">12.12</div>
                                <div className="currency">BYN</div>
                            </div>
                            <div className="product-image"></div>
                            <div className="product-action">
                                <i className="fas fa-receipt left p14 sml"></i>
                                <i className="fas fa-shopping-basket basket p14 sml"></i>
                                <i className="far fa-bookmark right p14 sml"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}


export default MainComponent;