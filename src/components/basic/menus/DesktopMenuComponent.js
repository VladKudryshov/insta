import React, {Component} from 'react';
import {Link} from "react-router";

class DesktopMenuComponent extends Component {

    render() {

        return (
            <div className="menu">
                <div className="horizontal">
                    <Link to="/">Главная</Link>
                    <Link to="/catalog">Каталог</Link>
                    <Link to="/blog">Блог</Link>
                    <Link to="/delivery">Доставка</Link>
                    <Link to="/about">О нас</Link>
                </div>
            </div>
        );
    }

}


export default DesktopMenuComponent;