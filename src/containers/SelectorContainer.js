import React, {Component} from 'react';


class SelectorContainer extends Component {

    state = {
        defaultCategory: 'Empty',
        open: false
    }


    render() {

        return (
            <div className="select-box">
                <div className="select-box__current" onClick={this.openSelections}>
                    <div className="select-box__value">
                        <p className="select-box__input-text">{this.state.defaultCategory}</p>
                    </div>

                    <img className="select-box__icon" src="http://cdn.onlinewebfonts.com/svg/img_295694.svg"
                         alt="Arrow Icon" aria-hidden="true" style={{transform: this.state.open ? 'translateY(-50%) rotate(180deg)' : 'translateY(-50%) rotate(0deg)'}}/>
                </div>
                <ul className="select-box__list" style={{display: this.state.open ? 'block' : 'none' }}>
                    <li className="select-box__option" onClick={()=>this.changeOption('Empty')}>Empty</li>
                    <li className="select-box__option" onClick={()=>this.changeOption('Vegetable')}>Vegetable</li>
                    <li className="select-box__option" onClick={()=>this.changeOption('Fruit')}>Fruit</li>
                </ul>
            </div>
        );
    }

    openSelections = () => {
        const {open} = this.state;
        this.setState({open: !open})
    }

    changeOption = (cat) => {
        this.setState({defaultCategory: cat})
        this.openSelections();

    }
}


export default SelectorContainer;