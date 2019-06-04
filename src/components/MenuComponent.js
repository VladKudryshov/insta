import React, {Component} from 'react';
import {userService} from "../services/userService";
import {NavLink} from "react-router-dom";

class MenuComponent extends Component {

    handleLogout = () => {
        userService.logout();
    };

    render() {
        return (
           this.props.open ?
               <div className="account-menu card"  onPointerLeave={this.props.close}>
                       <div className="admin-menu">
                           <div className="account-menu-list">
                               <NavLink exact={true} to="/account/profile" className="account-menu-link" activeClassName="active"><i className="far fa-user mr10"></i>Profile</NavLink>
                               <NavLink exact={true} to="/account/messages" className="account-menu-link" activeClassName="active"><i className="far fa-envelope mr10"></i>Messages</NavLink>
                               <NavLink exact={true} to="/account/settings" className="account-menu-link" activeClassName="active"><i className="far fa-cog mr10"></i>Settings</NavLink>
                               <a href="#" onClick={this.handleLogout} className="account-menu-link"><i className="fas fa-sign-out-alt mr10"></i>Logout</a>
                           </div>
                       </div>

               </div> : <></>
        );
    }

}


export default MenuComponent;