import React, {Component} from 'react';
import SliderComponent from "./SliderComponent";


class MainComponent extends Component {
    state = {
        loginComponent: false,
        menuComponent: false,
        mobileMoreAnchorEl: null,
    };

    handleOpenLoginComponent = event => {
        const {loginComponent} = this.state;
        this.setState({loginComponent: !loginComponent})
    };

    handleOpenMenuComponent = event => {
        const {menuComponent} = this.state;
        this.setState({menuComponent: !menuComponent})
    };

    handleLoginClose = () => {
        this.setState({loginComponent: false});
    };

    handleMenuClose = () => {
        this.setState({menuComponent: false});
    };


    isAuth() {
        return localStorage.getItem('token') === null
    }

    render() {

        return (
            <>

                <SliderComponent/>
                <div className="information">
                    <div className="card small-box">
                        <div className="some-img">
                            <img src="images/vegetables-hand-drawn-basket.png" alt=""/>
                        </div>
                        <div className="short-text">100% Organic</div>
                        <div className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusantium adipisci
                            labore mollitia quasi, totam voluptatem?
                        </div>
                    </div>
                    <div className="card small-box">
                        <div className="some-img">
                            <img src="images/fast-delivery.png" alt=""/>
                        </div>
                        <div className="short-text">Fast Delivery</div>
                        <div className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusantium adipisci
                            labore mollitia quasi, totam voluptatem?
                        </div>
                    </div>
                    <div className="card small-box">
                        <div className="some-img"><img src="images/diet.png" alt=""/></div>
                        <div className="short-text">Healthy</div>
                        <div className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusantium adipisci
                            labore mollitia quasi, totam voluptatem?
                        </div>
                    </div>
                </div>
                <div className="categories card">
                    <ul>
                        <li><img src="images/salad-bowl-hand-drawn-food.png" alt=""/></li>
                        <li><img src="images/lettuce.png" alt=""/></li>
                        <li><img src="images/apple-and-grapes-on-a-bowl.png" alt=""/></li>
                        <li><img src="images/strawberry.png" alt=""/></li>
                        <li><img src="images/plant-with-leaves.png" alt=""/></li>
                    </ul>
                </div>
                <div className="blog-cards">
                    <div className="blog-card card">
                        <img src="" alt=""/>
                        <h2 className="title">wqtwqdsad</h2>
                        <div className="date"><i className="far fa-calendar-alt mr10"></i>12/21/21 12:12
                        </div>
                        <div className="short-content">Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Amet asperiores consequatur dolore doloribus, labore maxime nobis
                            provident quam quo suscipit.
                        </div>
                        <a href="#" className="read-more">READ MORE</a>
                    </div>
                    <div className="blog-card card">
                        <img src="" alt=""/>
                        <h2 className="title">wqtwqdsad</h2>
                        <div className="date"><i className="far fa-calendar-alt mr10"></i>12/21/21 12:12
                        </div>
                        <div className="short-content">Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Amet asperiores consequatur dolore doloribus, labore maxime nobis
                            provident quam quo suscipit.
                        </div>
                        <a href="#" className="read-more">READ MORE</a>
                    </div>
                    <div className="blog-card card">
                        <img src="" alt=""/>
                        <h2 className="title">wqtwqdsad</h2>
                        <div className="date"><i className="far fa-calendar-alt mr10"></i>12/21/21 12:12
                        </div>
                        <div className="short-content">Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Amet asperiores consequatur dolore doloribus, labore maxime nobis
                            provident quam quo suscipit.
                        </div>
                        <a href="#" className="read-more">READ MORE</a>
                    </div>
                </div>
            </>
        );
    }
}


export default MainComponent;