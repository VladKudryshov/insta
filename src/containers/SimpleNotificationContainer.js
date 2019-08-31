import {connect} from 'react-redux';

import React, {Component} from "react";
import {storageUtils} from "../utils/StorageUtils";
import NotificationWidget from "../components/basic/widgets/NotificationWidget";
import ToolTip from "../components/basic/tooltip/ToolTip";


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
                {
                    storageUtils.isAuth() &&
                    <ToolTip tooltipMessage={"Уведомления"}><i className="fas fa-bell hover center p10" onClick={this.handleAccountMenu}/> </ToolTip>
                }
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
