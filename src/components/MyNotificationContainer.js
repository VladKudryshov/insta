import React from 'react';
import {Slide, toast, ToastContainer} from 'react-toastify';
import SockJsClient from "react-stomp";
import 'react-toastify/dist/ReactToastify.css';

class MyNotificationContainer extends React.Component {


    onMessageReceive = (msg, topic) => {
        if(localStorage.getItem("id") !== msg.fromUser){
            this.handleShowNotification(msg)
        }
    }


    handleShowNotification = (msg) => {
        toast['success'](NotificationStyle('Новое сообщение', msg.author, msg.message));
    };


    render() {
        const wsSourceUrl = "http://165.22.89.115:8080/api/handler";
        return (
            <div>
                <ToastContainer
                    hideProgressBar
                    closeButton={false}
                    closeOnClick={false}
                    transition={Slide}
                    autoClose={3000}
                />
                {/*<SockJsClient url={wsSourceUrl} topics={["/notification", `/topic/22`]}
                              onMessage={this.onMessageReceive}
                              onConnect={() => {this.setState({clientConnected: true})}}
                              subscribeHeaders={{Authorization: localStorage.getItem('token')}}
                              headers={{Authorization: localStorage.getItem('token')}}
                              onDisconnect={() => {this.setState({clientConnected: false})}}
                              debug={false}/>*/}
            </div>
        );
    }
}

export default MyNotificationContainer;
export const NotificationStyle = (title, author, message) => (
    <div>
        <h1>{title}</h1>
        <p>{author}: {message} </p>
    </div>
);