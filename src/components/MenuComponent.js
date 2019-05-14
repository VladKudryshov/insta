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
            <Dialog
                open={this.props.open}
                onClose={this.props.close}
                aria-labelledby="form-dialog-title"
                maxWidth={"xs"}
            >
                <DialogTitle id="form-dialog-title">Account</DialogTitle>
                <DialogContent>
                    <NavLink to="/settings" >Settings</NavLink>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleLogout} color="secondary">
                        Logout
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}


export default MenuComponent;