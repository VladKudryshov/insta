import {connect} from 'react-redux';

import React, {Component} from "react";
import {Link} from "react-router-dom";


class SimpleNotificationContainer extends Component {

    render() {
        const {notification} = this.props
        return (
            <Link to="/basket">
                <i className="fas fa-bell hover center">{
                    <span className="not-empty">1</span>
                }</i>
            </Link>
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