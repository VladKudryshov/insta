import React, {Component} from 'react';
import Dialog from "@material-ui/core/Dialog/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent/DialogContent";
import TextField from "@material-ui/core/TextField/TextField";
import DialogActions from "@material-ui/core/DialogActions/DialogActions";
import Button from "@material-ui/core/Button/Button";
import {userService} from "../services/userService";
import {NavLink} from "react-router-dom";

class MenuComponent extends Component {


    constructor(props) {
        super(props);
    }

    handleLogout = () => {
        userService.logout();
    };

    render() {
        return (
           this.props.open ?
               <div className="account-menu card">
                   <ul className="account-menu-list">
                       <li><i className="far fa-user mr10"></i><span>Profile</span></li>
                       <li><i className="far fa-envelope mr10"></i><span>Messages</span></li>
                       <li><i className="fas fa-cog mr10"></i><span>Settings</span></li>
                       <li><i className="fas fa-sign-out-alt mr10"></i><span>Logout</span></li>
                   </ul>
               </div> : <></>
        );
    }
}


export default MenuComponent;