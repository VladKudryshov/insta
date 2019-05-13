import React, {Component} from 'react';
import Dialog from "@material-ui/core/Dialog/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent/DialogContent";
import TextField from "@material-ui/core/TextField/TextField";
import DialogActions from "@material-ui/core/DialogActions/DialogActions";
import Button from "@material-ui/core/Button/Button";
import {userService} from "../services/userService";

class LoginComponent extends Component {


    constructor(props) {
        super(props);

        this.state = {
            login: '',
            password: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleLogin = () => {
        const {login, password} = this.state;
        userService.login(login, password);
        this.props.close();

    };

    handleChange(e) {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    render() {
        return (
            <Dialog
                open={this.props.open}
                onClose={this.props.close}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Вход</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Логин"
                        type="email"
                        name="login"
                        onChange={this.handleChange}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Пароль"
                        type="password"
                        name="password"
                        onChange={this.handleChange}

                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleLogin} color="primary">
                        Войти
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}


export default LoginComponent;