import {connect} from 'react-redux';

import React, {Component} from "react";
import {storageUtils} from "../utils/StorageUtils";
import NotificationWidget from "../components/basic/widgets/NotificationWidget";


class SimpleNotificationContainer extends Component {

    state = {
        open: false
    };

    handleAccountMenu = () => {
        const {open} = this.state;
        this.setState({open: !open})
    };

    render() {
        const {open} = this.state;
        return (
            <>
                {storageUtils.isAuth() &&
                     <i className="fas fa-bell hover center " onClick={this.handleAccountMenu}>{<span className="not-empty">1</span>}</i>}
                <NotificationWidget close={this.handleAccountMenu} open={open}/>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    const notification = state.notification;
    return ({
        notification
    });
};


export default connect(mapStateToProps, null)(SimpleNotificationContainer);
