import React, {Component} from 'react';
import {userService} from "../services/userService";

class LoginComponent extends Component {

    state = {
        login: '',
        password: '',
        activeState: 'reg'
    };


    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value});
    };

    handleActive = (e) => {
        const {name} = e.target;
        this.setState({activeState: name});
    };

    getActiveState = (e) => {
        const {activeState} = this.state;
        if (activeState === e) {
            return "login-type btn-empty login-type-active"
        }
        return "login-type btn-empty"
    };

    getAction = () => {
        const {activeState} = this.state;
        if (activeState === 'reg') {
            return <button onClick={this.handleReg} className="btn primary">Создать</button>
        }
        return <button onClick={this.handleLogin} className="btn primary">Войти</button>
    };

    handleLogin = () => {
        const {login, password} = this.state;
        userService.login(login, password);
    };

    handleReg = () => {
        const {login, password} = this.state;
        userService.createUser(login, password);
    }

    render() {
        return (
            <div className="login-component card">
                <ul className="login-types">
                    <button className={this.getActiveState('reg')} name="reg" onClick={this.handleActive}> РЕГИСТРАЦИЯ
                    </button>
                    <button className={this.getActiveState('sign-in')} name="sign-in"
                            onClick={this.handleActive}>ВОЙТИ
                    </button>
                </ul>
                <div className="login-form">
                    <input type="text" name="login" onChange={this.handleChange} placeholder="Email"/>
                    <input type="password" name="password" onChange={this.handleChange} placeholder="Пароль"/>
                </div>
                {this.getAction()}
            </div>
        );
    }



}


export default LoginComponent;