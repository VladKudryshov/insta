import React, {Component} from 'react';

class SliderComponent extends Component {


    state = {
        currentPosition: 0,
        sliderImages: [
            'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg',
            'https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
        ]
    };


    componentDidMount() {
        setInterval(
            this.nextSlide,
            3000
        );
    }

    nextSlide = () => {
        const {currentPosition, sliderImages} = this.state;
        let newPosition = sliderImages.length - 1 <= currentPosition ? 0 : currentPosition + 1;
        this.setState({currentPosition: newPosition})
    };

    prevSlide = () => {
        const {currentPosition, sliderImages} = this.state;
        let newPosition = sliderImages.length - 1 > currentPosition ? sliderImages.length - 1 : currentPosition - 1;
        this.setState({currentPosition: newPosition})
    };

    getCurrentImage = () => {
        const {currentPosition, sliderImages} = this.state;
        return sliderImages[currentPosition]
    };

    render() {

        console.log()
        return (
            <div className="slider" style={{backgroundImage: 'url(' + this.getCurrentImage() + ')'}}>
                <i className="fas fa-arrow-left slide-arrow-left" onClick={this.prevSlide}></i>
                {/*{this.getCurrentImage()}*/}
                <i className="fas fa-arrow-right slide-arrow-right" onClick={this.nextSlide}></i>
            </div>
        );
    }
}


export default SliderComponent;