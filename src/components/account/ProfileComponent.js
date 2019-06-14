import React, {Component} from 'react';
import {get} from 'lodash';
import {userService} from "../../services/userService";

class ProfileComponent extends Component {


    state = {
        user: {}
    };

    componentDidMount() {
        userService.getUserInfo()
            .then(user => this.setState({user: user}))
    }


    render() {


        const {user} = this.state
        return (
            <div className="profile card">
                <div className="user-name">{user.firstName + ' ' + user.secondName}</div>
                <div className="user-email">{user.phone}</div>
                <div className="user-password">{}</div>
            </div>
        );
    }
}


export default ProfileComponent;