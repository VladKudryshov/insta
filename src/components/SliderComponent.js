import React, {Component} from 'react';

class SliderComponent extends Component {


    render() {
        return (
            <div className="slider">
                <i className="fas fa-arrow-left slide-arrow-left"></i>
                <img src="/images/slide1.png" alt=""/>
                <i className="fas fa-arrow-right slide-arrow-right"></i>
            </div>
        );
    }
}


export default SliderComponent;