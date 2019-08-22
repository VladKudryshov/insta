import React from 'react';
import {Slide, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const NotificationStyle = (title, message) => (
    <div>
        <h1>{title}</h1>
        <div>{message}</div>
    </div>
);

const Notification = () => (
    <ToastContainer
        hideProgressBar
        closeButton={false}
        closeOnClick={false}
        transition={Slide}
        autoClose={3000}
    />
);

export default Notification;