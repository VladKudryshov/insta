import React, {Component} from 'react';


class SelectorContainer extends Component {

    state = {
        open: false
    }


    render() {

        return (
            <div className="select-box">
                <div className="select-box__current" tabIndex="2" onClick={this.openSelections}>
                    <div className="select-box__value">
                        <input className="select-box__input" type="radio" id="0" value="Fruit" name="Ben"
                               onChange={this.props.change}/>
                        <p className="select-box__input-text">Fruit</p>
                    </div>
                    <div className="select-box__value">
                        <input className="select-box__input" type="radio" id="1" value="Vegetable" name="Ben"
                               onChange={this.props.change}/>
                        <p className="select-box__input-text">Vegetable</p>
                    </div>

                    <div className="select-box__value">
                        <input className="select-box__input" type="radio" id="2" value="Empty" name="Ben"
                               defaultChecked={true} onChange={this.props.change}/>
                        <p className="select-box__input-text">Empty</p>
                    </div>

                    <img className="select-box__icon" src="http://cdn.onlinewebfonts.com/svg/img_295694.svg"
                         alt="Arrow Icon" aria-hidden="true"/>
                </div>
                <ul className="select-box__list" style={{display: this.state.open ? 'block' : 'none' }}>
                    <li><label className="select-box__option" htmlFor="0"
                               aria-hidden="aria-hidden">Fruit</label></li>
                    <li><label className="select-box__option" htmlFor="1"
                               aria-hidden="aria-hidden">Vegetable</label></li>
                    <li><label className="select-box__option" htmlFor="2"
                               aria-hidden="aria-hidden">Empty</label></li>
                </ul>
            </div>
        );
    }

    openSelections = () => {
        const {open} = this.state;
        this.setState({open: !open})
    }
}


export default SelectorContainer;