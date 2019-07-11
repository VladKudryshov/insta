import React, {Component} from 'react';
import {Link} from "react-router";

class MobileMenuComponent extends Component {

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
                {mobileMenu && <ul className="mobile-menu-items">
                        <li><Link to="/" onClick={this.handleMobileMenu}>Главная</Link></li>
                        <li><Link to="/catalog" onClick={this.handleMobileMenu}>Каталог</Link></li>
                        <li><Link to="/blog" onClick={this.handleMobileMenu}>Блог</Link></li>
                        <li><Link to="/delivery" onClick={this.handleMobileMenu}>Доставка</Link></li>
                        <li><Link to="/about" onClick={this.handleMobileMenu}>О нас</Link></li>
                    </ul>
                }
            </div>
        );
    }

}


export default MobileMenuComponent;