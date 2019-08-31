import React, {Component} from 'react';
import {browserHistory} from "react-router";
import ProductAction from "../../containers/products/ProductActionContainer";
import {bindActionCreators} from "redux";
import {
    changeDataObject,
    clearData,
    loadDataById,
    saveDataWithImage
} from "../../actions/action";
import connect from "react-redux/es/connect/connect";
import LoaderContainer from "../../containers/LoaderContainer";
import {PRODUCTS} from "../../consts/apps";
import Product from "../basic/catalog/Product";


class AdminPanelProductComponent extends Component {

    componentDidMount() {
        const {actions: {loadDataById}, params: {id}} = this.props
        if (id) {
            loadDataById(PRODUCTS, id)
        }
    }

    componentWillUnmount() {
        const {actions: {clearData}} = this.props
        clearData()
    }


    changeState = (e) => {
        const {actions: {changeDataObject}} = this.props;
        const {target: {name, value, type}} = e;
        console.log(name)
        if (type === 'number') {
            changeDataObject(PRODUCTS, name, Number(value));
        } else {
            changeDataObject(PRODUCTS, name, value || '');
        }

    };

    handleChange = (event) => {
        const {actions: {changeDataObject}} = this.props;
        changeDataObject(PRODUCTS, 'image', URL.createObjectURL(event.target.files[0]));
        changeDataObject(PRODUCTS, 'file', event.target.files[0]);
    };

    save = () => {
        const {product, actions: {saveDataWithImage}} = this.props;
        saveDataWithImage(PRODUCTS, product)
    };

    priceWithDiscount = () => {
        let price = (this.props.product.price / 100 * (100 - this.props.product.discount));
        return isNaN(price) ? 0 : this.numberFormat(price);
    }

    numberFormat = (number) => {
        return number.toFixed(2)
    }

    render() {
        const {product} = this.props
        return (
            <LoaderContainer>
                <div className="admin-card panel-products">
                    <div>
                        <i className="fas fa-chevron-left hover"
                           style={{fontSize: 18, padding: '0 10', color: '#00ba56'}}
                           onClick={browserHistory.goBack}/>
                    </div>
                    <div className="product-container">
                        <div className="add-product">
                            <p className="title">Описание</p>
                            <div>
                                <input className="p1015" type="text" name="name" placeholder="Название"
                                       onChange={this.changeState} defaultValue={this.props.product.name}/>
                                <input className="p1015" type="text" name="category" placeholder="Категория"
                                       onChange={this.changeState}
                                       defaultValue={this.props.product.category}/>
                            </div>
                            <div>
                                <p className="title">Цена</p>
                                <p className="title">Скидка</p>
                                <input className="p1015" type="number" name="price" placeholder="Цена"
                                       onChange={this.changeState} step="0.01"
                                       defaultValue={this.props.product.price}/>
                                <input className="p1015" type="number" name="discount" placeholder="Скидка"
                                       onChange={this.changeState}
                                       min="0" max="100" defaultValue={this.props.product.discount}/>

                            </div>
                            <p className="title">Единицы измерения</p>
                            <div>
                                <input className="p1015" type="text" name="unitName" placeholder="Единица измерения"
                                       onChange={this.changeState} defaultValue={this.props.product.unitName}/>
                                <input className="p1015" type="number" name="unitNumber" placeholder="Вес"
                                       onChange={this.changeState}
                                       defaultValue={this.props.product.unitNumber}/>

                            </div>
                            <input className="p1015" type="file" name="file" onChange={this.handleChange}/>
                        </div>
                        <div className="viewer-form">

                            <Product product={product} />

                        </div>
                        <div>
                            <button onClick={() => this.save()} className="btn action right"> Сохранить</button>
                        </div>
                    </div>

                </div>
            </LoaderContainer>
        );
    }
}

const mapStateToProps = (state) => {
    const {data: {products}, loader} = state;
    return {
        product: products,
        loader
    };
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        saveDataWithImage,
        loadDataById,
        changeDataObject,
        clearData
    }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminPanelProductComponent);

