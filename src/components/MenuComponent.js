import React, {Component} from 'react';
import {userService} from "../services/userService";

class MenuComponent extends Component {

    handleLogout = () => {
        userService.logout();
    };

    render() {
        return (
           this.props.open ?
               <div className="account-menu card"  onPointerLeave={this.props.close}>
                   <ul className="account-menu-list">
                       <li><i className="far fa-user mr10"></i><span>Profile</span></li>
                       <li><i className="far fa-envelope mr10"></i><span>Messages</span></li>
                       <li><i className="fas fa-cog mr10"></i><span>Settings</span></li>
                       <li onClick={this.handleLogout}><i className="fas fa-sign-out-alt mr10"></i><span>Logout</span></li>
                   </ul>
               </div> : <></>
        );
    }

}


export default MenuComponent;