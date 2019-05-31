import React, {Component} from 'react';
import {BrowserRouter as Router, NavLink, Route, Switch} from 'react-router-dom';
import LoginComponent from "./LoginComponent";
import MenuComponent from "./MenuComponent";
import SliderComponent from "./SliderComponent";
import ListProductsComponent from "./catalog/ListProductsComponent";


class MainComponent extends Component {

    render() {

        return (
            <>
                <div className="admin-menu"></div>
                <ListProductsComponent/>
            </>
        );
    }
}


export default MainComponent;