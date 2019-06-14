import React, {Component} from 'react';
import {Link} from "react-router";
import {userService} from "../services/userService";

class ContactsOrderContainer extends Component {

    state = {
        choosedAddress: 0,
    };


    componentDidMount(){

    }

    getClassName = (id) => {
        const {choosedAddress} = this.state;
        return  id===choosedAddress ? "address card seleted" : "address card "
    }


    render() {


/*
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
                </div>
            </div>
        */

        return (

           <div className="cl2-rw1 order-contacts">
               <div className="person">
                   <h3>Person</h3>
                   <input type="text" name="userName" placeholder="First name" onChange={this.props.change} defaultValue={this.props.orderContacts.userName}/>
                   <input type="text" name="userSecondName" placeholder="Second name" onChange={this.props.change} defaultValue={this.props.orderContacts.userSecondName}/>
                   <input type="tel" name="userPhone" placeholder="Phone" onChange={this.props.change} defaultValue={this.props.orderContacts.userPhone}/>
               </div>

                <div className="address">
                    <h3>Address</h3>
                    <input type="text" name="city" placeholder="City" onChange={this.props.change} defaultValue={this.props.orderContacts.city}/>
                    <input type="text" name="street" placeholder="Street" onChange={this.props.change} defaultValue={this.props.orderContacts.street}/>
                    <input type="text" name="house" placeholder="House" onChange={this.props.change} defaultValue={this.props.orderContacts.house}/>
                    <input type="text" name="flat" placeholder="Flat" onChange={this.props.change} defaultValue={this.props.orderContacts.flat}/>
                </div>
           </div>
        );
    }

    handleChooseAddress = (id) => {
        this.setState({choosedAddress: id})
    }
}


export default ContactsOrderContainer;