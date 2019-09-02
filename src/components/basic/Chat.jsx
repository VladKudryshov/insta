import React from 'react';
import {TalkBox} from "react-talk";


const Chat = ({
                  topic,
                  currentUserId,
                  currentUser,
                  messages,
                  onSendMessage,
                  connected,
              }) => (
    <div className="chat">
        <div className="chat-title">
            {topic}
        </div>
        <div className="chat-messages">
            {messages.map(message=>{
                return <div className={currentUserId === message.authorId ? "msg right" : "msg left"}>
                    <div> {currentUser} {new Date(message.timestamp).toLocaleTimeString("ru")}</div>
                    <div className={currentUserId === message.authorId ? "txr" : "txl"}> {message.message} </div>
                </div>
                })}
        </div>
        <div className="chat-actions">
            <input type="text" className="input-comment" placeholder="Введите текст"/>
            <button className="btn action">Отправить</button>
        </div>
    </div>
)

export default Chat;