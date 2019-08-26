import React, {Component} from 'react';
import {Link} from "react-router";

const DesktopMenu = () => (<div className="menu">
    <div className="horizontal">
        <Link to="/" onlyActiveOnIndex>Главная</Link>
        <Link to="/products" onlyActiveOnIndex>Продукты</Link>
        <Link to="/blog" onlyActiveOnIndex>Блог</Link>
        <Link to="/delivery" onlyActiveOnIndex>Доставка</Link>
        <Link to="/about" onlyActiveOnIndex>О нас</Link>
    </div>
</div>
);


export default DesktopMenu;