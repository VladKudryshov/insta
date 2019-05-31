import React, {Component} from 'react';
import ListProductsComponent from "./catalog/ListProductsComponent";
import {productService} from "../services/productService";


class MainComponent extends Component {
    state = {
        test: 'Fruit',
        products: []
    }


    componentDidMount() {
        productService.getProducts('')
            .then(data => this.setState({products: data['content'], isLoading: false}))
    }

    handleChange = (val) => {
        let {target: {value}} = val;
        if (value === 'Empty') {
            value = '';
        }
        productService.getProducts(value)
            .then(data => this.setState({products: data['content'], isLoading: false}))
    }


    render() {

        const {products} = this.state;

        return (
            <>
                <div className="admin-menu">
                    <div className="select-box">
                        <div className="select-box__current" tabIndex="2">
                            <div className="select-box__value">
                                <input className="select-box__input" type="radio" id="0" value="Fruit" name="Ben"
                                       onChange={this.handleChange}/>
                                <p className="select-box__input-text">Fruit</p>
                            </div>
                            <div className="select-box__value">
                                <input className="select-box__input" type="radio" id="1" value="Vegetable" name="Ben"
                                       onChange={this.handleChange}/>
                                <p className="select-box__input-text">Vegetable</p>
                            </div>

                            <div className="select-box__value">
                                <input className="select-box__input" type="radio" id="2" value="Empty" name="Ben"
                                       defaultChecked={true} onChange={this.handleChange}/>
                                <p className="select-box__input-text">Empty</p>
                            </div>

                            <img className="select-box__icon" src="http://cdn.onlinewebfonts.com/svg/img_295694.svg"
                                 alt="Arrow Icon" aria-hidden="true"/>
                        </div>
                        <ul className="select-box__list">
                            <li><label className="select-box__option" htmlFor="0"
                                       aria-hidden="aria-hidden">Fruit</label></li>
                            <li><label className="select-box__option" htmlFor="1"
                                       aria-hidden="aria-hidden">Vegetable</label></li>
                            <li><label className="select-box__option" htmlFor="2"
                                       aria-hidden="aria-hidden">Empty</label></li>
                        </ul>
                    </div>
                </div>
                <ListProductsComponent products={products}/>
            </>
        );
    }
}


export default MainComponent;