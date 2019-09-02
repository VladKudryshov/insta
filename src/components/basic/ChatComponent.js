import React, {Component} from 'react';
import SockJsClient from "react-stomp";
import {TalkBox} from "react-talk";
import {getHistory} from "../../services/history"
import Chat from "./Chat";


class ChatComponent extends Component {


    constructor(props) {
        super(props);
        // randomUserId is used to emulate a unique user id for this demo usage
        this.randomUserName = localStorage.getItem("user");
        this.randomUserId = localStorage.getItem("id");
        this.state = {
            clientConnected: false,
            messages: []
        };
    }

    onMessageReceive = (msg, topic) => {
        this.setState(prevState => ({
            messages: [...prevState.messages, msg]
        }));
    }

    sendMessage = (msg, selfMsg) => {
        try {
            let prepareMessage = {
                orderId: 22,
                fromUser: selfMsg.authorId,
                message: selfMsg.message,
            }

            this.clientRef.sendMessage("/app/room/22/sendMessage", JSON.stringify(prepareMessage));
            return true;
        } catch (e) {
            return false;
        }
    }

    componentWillMount() {

        getHistory(22).then((response) => {
            this.setState({
                messages: response.data !== "" ? response.data.map(f => {
                    return {
                        message: f.message,
                        timestamp: f.date,
                        authorId: f.fromUser,
                    }
                }) : []
            });
        });
    }

    render() {
        const wsSourceUrl = "http://165.22.89.115:8080/api/handler";
        return (
            <div>
                <Chat topic="Диалог"
                      currentUserId={this.randomUserId}
                      currentUser={this.randomUserName}
                      messages={this.state.messages}
                      onSendMessage={this.sendMessage}
                      connected={this.state.clientConnected}/>

                {/*<SockJsClient url={wsSourceUrl} topics={[`/topic/22`]}*/}
                              {/*onMessage={this.onMessageReceive}*/}
                              {/*ref={(client) => {*/}
                                  {/*this.clientRef = client*/}
                              {/*}}*/}
                              {/*subscribeHeaders={{Authorization: localStorage.getItem('token')}}*/}
                              {/*headers={{Authorization: localStorage.getItem('token')}}*/}
                              {/*onConnect={() => {*/}
                                  {/*this.setState({clientConnected: true})*/}
                              {/*}}*/}
                              {/*onDisconnect={() => {*/}
                                  {/*this.setState({clientConnected: false})*/}
                              {/*}}/>*/}
            </div>
        );
    }
}


export default ChatComponent;