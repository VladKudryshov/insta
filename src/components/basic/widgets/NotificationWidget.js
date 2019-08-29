import {Link} from "react-router";
import React, {Component} from "react";

class NotificationWidget extends Component {


    constructor(props) {
        super(props);
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleCloseAccountMenu = this.handleCloseAccountMenu.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleCloseAccountMenu);
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    handleCloseAccountMenu(event) {

        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.props.close()
        }
    }

    render() {
        const {open} = this.props;
        return (

            open &&
            <div className="widget-notification" ref={this.setWrapperRef}>
                <ul>
                    <li className="admin-card">
                        <ul>
                            <li><b>System</b> created order. We call you!</li>
                            <li>20 minutes ago</li>
                        </ul>
                    </li>
                    <li className="admin-card">
                        <ul>
                            <li><b>System</b> created order. We call you!</li>
                            <li>20 minutes ago</li>
                        </ul>
                    </li>
                    <li className="admin-card">
                        <ul>
                            <li><b>System</b> created order. We call you!</li>
                            <li>20 minutes ago</li>
                        </ul>
                    </li>

                    <li className="view-all admin-card txc"><Link to="/notifications" onClick={this.props.close}> VIEW ALL</Link></li>
                </ul>
            </div>
        );
    }

}


export default NotificationWidget;
