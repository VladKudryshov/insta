import React, {Component} from 'react';

class SliderComponent extends Component {


    state = {
        currentPosition: 0,
        sliderImages: ['/images/slide1.png', '/images/22140.jpg']
    }

    nextSlide = () => {
        const {currentPosition, sliderImages} = this.state;
        console.log(sliderImages.length)
        console.log(currentPosition)
        let newPosition = sliderImages.length - 1 <= currentPosition ? 0 : currentPosition + 1;
        this.setState({currentPosition: newPosition})
    };

    prevSlide = () => {
        const {currentPosition, sliderImages} = this.state;
        console.log(currentPosition)
        let newPosition = sliderImages.length - 1 > currentPosition ? sliderImages.length - 1 : currentPosition - 1;
        this.setState({currentPosition: newPosition})
    };

    render() {
        const {currentPosition, sliderImages} = this.state;
        return (
            <div className="slider">
                <i className="fas fa-arrow-left slide-arrow-left" onClick={this.prevSlide}></i>
                <img src={sliderImages[currentPosition]} alt=""/>
                <i className="fas fa-arrow-right slide-arrow-right" onClick={this.nextSlide}></i>
            </div>
        );
    }
}


export default SliderComponent;