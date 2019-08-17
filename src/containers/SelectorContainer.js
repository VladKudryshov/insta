import React, {Component} from 'react';
import * as statusMapping from "../models/statusMapping";
import {getRepresentationCategory} from "../models/statusMapping";


class SelectorContainer extends Component {

    state = {
        open: false
    };

    render() {

        return (
            <div className="select-box">
                <div className="select-box__current" onClick={this.openSelections}>
                    <div className="select-box__value">
                        <p className="select-box__input-text">{getRepresentationCategory(this.props.filter)}</p>
                    </div>

                    <img className="select-box__icon" src="http://cdn.onlinewebfonts.com/svg/img_295694.svg"
                         alt="Arrow Icon" aria-hidden="true"
                         style={{transform: this.state.open ? 'translateY(-50%) rotate(180deg)' : 'translateY(-50%) rotate(0deg)'}}/>
                </div>
                <ul className="select-box__list" style={{display: this.state.open ? 'block' : 'none'}}>
                    <li className="select-box__option" onClick={() => this.changeOption('')}>Все</li>
                    <li className="select-box__option" onClick={() => this.changeOption('Vegetable')}>Овощи</li>
                    <li className="select-box__option" onClick={() => this.changeOption('Greens')}>Зелень</li>
                    <li className="select-box__option" onClick={() => this.changeOption('Berries')}>Ягоды</li>
                    <li className="select-box__option" onClick={() => this.changeOption('Fruits')}>Фрукты</li>
                    <li className="select-box__option" onClick={() => this.changeOption('Seedlings')}>Рассада</li>

                </ul>
            </div>
        );
    }

    openSelections = () => {
        const {open} = this.state;
        this.setState({open: !open})
    };

    changeOption = (cat) => {
        this.openSelections();
        this.props.change(cat)
    }
}


export default SelectorContainer;