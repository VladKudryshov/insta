import React, {Component} from 'react';
import {userService} from "../../../services/userService";

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
                <div className="profile-image"><img src={user.image} alt=""/></div>
                <div>
                    <div className="user-name">{user.firstName + ' ' + user.secondName}</div>
                    <div className="user-contact"><i className="fas fa-phone"/> {user.phone}</div>
                    <div className="user-contact"><i className="fas fa-at"/> asdasd@mail.ru</div>
                </div>
                <div className="user-password">{}</div>
            </div>
        );
    }
}


export default ProfileComponent;