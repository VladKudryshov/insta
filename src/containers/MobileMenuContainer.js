import React, {Component} from 'react';
import {Link} from "react-router-dom";

class MobileMenuContainer extends Component {

    state = {
        mobileMenu: false
    };


    handleMobileMenu = () => {
        const {mobileMenu} = this.state;
        this.setState({mobileMenu: !mobileMenu});
    };


    render() {
        const {mobileMenu} = this.state;

        return (
            <div>
                <div className={mobileMenu? "mobile-menu open-mobile-menu" : 'mobile-menu'} onClick={this.handleMobileMenu}>
                    <div className="line"/>
                    <div className="line"/>
                </div>
                {mobileMenu ? <ul className="mobile-menu-items">
                        <li><Link to="/" onClick={this.handleMobileMenu}>Home</Link></li>
                        <li><Link to="/catalog" onClick={this.handleMobileMenu}>Catalog</Link></li>
                        <li><Link to="/blog" onClick={this.handleMobileMenu}>Blog</Link></li>
                        <li><Link to="/delivery" onClick={this.handleMobileMenu}>Delivery</Link></li>
                        <li><Link to="/about" onClick={this.handleMobileMenu}>About us</Link></li>
                    </ul>
                    : ''
                }
            </div>
        );
    }

}


export default MobileMenuContainer;