import React from 'react';
import {Link} from "react-router";


const AccountBlockMenu = () => (
    <div className="card">
        <div className="account-menu-list">
            <Link to="/account/profile" className="account-menu-link" activeClassName="active" onlyActiveOnIndex><i
                className="far fa-user tc"/>Профиль</Link>
            <Link to="/account/address" className="account-menu-link" activeClassName="active" onlyActiveOnIndex><i
                className="fas fa-map-marker-alt tc"/>Адреса</Link>
            <Link to="/account/settings" className="account-menu-link" activeClassName="active" onlyActiveOnIndex><i
                className="fas fa-cog tc"/>Настройки</Link>
        </div>
    </div>
);


export default AccountBlockMenu;