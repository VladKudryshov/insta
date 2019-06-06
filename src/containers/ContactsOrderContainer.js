import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {userService} from "../services/userService";

class ContactsOrderContainer extends Component {

    state = {
        addresses: [],
        choosedAddress: 0,
        userInfo: {}
    };


    componentDidMount(){
        userService.getAddressUser()
            .then(addresses => this.setState({addresses: addresses}))
        userService.getUserInfo()
            .then(userInfo => this.setState({userInfo: userInfo}))
    }

    getClassName = (id) => {
        const {choosedAddress} = this.state;
        return  id===choosedAddress ? "address card seleted" : "address card "
    }


    render() {

        const {addresses, userInfo} = this.state;

        const address = addresses.map(f=>{
            return <div key={f.street} className={this.getClassName(f.id)} onClick={()=>this.handleChooseAddress(f.id)}>
                <span>City</span>
                <span>{f.city}</span>
                <span>Street</span>
                <span>{f.street}</span>
                <span>House</span>
                <span>{f.house}</span>
            </div>
        });

        return (
            <div className="cl2-rw1">
                <ul className="cl12-center card user-info address" >
                    <li>firstName</li>
                    <li>{userInfo.firstName}</li>
                    <li>secondName</li>
                    <li>{userInfo.secondName}</li>
                    <li>phone</li>
                    <li>{userInfo.phone}</li>
                </ul>
                <div className="cl2-rw1 cl12-center addresses" >
                    {address}
                </div>
            </div>
        );
    }

    handleChooseAddress = (id) => {
        this.setState({choosedAddress: id})
    }
}


export default ContactsOrderContainer;