import React, {Component} from 'react';
import Dialog from "@material-ui/core/Dialog/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent/DialogContent";
import TextField from "@material-ui/core/TextField/TextField";
import DialogActions from "@material-ui/core/DialogActions/DialogActions";
import Button from "@material-ui/core/Button/Button";
import {userService} from "../services/userService";
import {NavLink} from "react-router-dom";

class SliderComponent extends Component {


    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="slider">
                <i className="fas fa-arrow-left slide-arrow-left"></i>
                <img src="/images/slide1.png" alt=""/>
                <i className="fas fa-arrow-right slide-arrow-right"></i>
            </div>
        );
    }
}


export default SliderComponent;