import React, {Component} from 'react';

import {Link} from 'react-router'


class HeaderComponent extends Component {

    render() {

        return (
            <header className="admin-header">
                <div className="logo">
                    <Link to="/"><img src="/images/logo.png" alt="Logo"/></Link>
                </div>

            </header>
        );
    }
}


export default HeaderComponent;