import {toast} from 'react-toastify';
import {get, includes, isEmpty} from 'lodash';

import {NotificationStyle} from '../components/notification/Notifications';

import {ERROR, SHOW_NOTIFICATION, showNotification} from '../actions/action';


export const handleShowNotification = () => next => (action) => {
    if (action.type === SHOW_NOTIFICATION) {
        const {notificationType, title, message} = action;
        toast[notificationType](NotificationStyle(title, message));
    }
    next(action);
};


export const handleApiError = store => next => (action) => {
    console.log(action)
    const timeOutException = 'Gateway Timeout';
    if (action.type === ERROR) {
        const {err} = action;
        const {message} = err.data === undefined ? err : err.data;
        store.dispatch(showNotification('error', 'Error', message || timeOutException));

    }
    next(action);
};

