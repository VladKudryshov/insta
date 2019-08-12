import React, {Component} from 'react';
import {browserHistory} from "react-router";
import ProductAction from "../../containers/ProductActionContainer";
import {bindActionCreators} from "redux";
import {addProductToCatalog, changeCatalogProduct, clearData, getProductById} from "../../actions/action";
import connect from "react-redux/es/connect/connect";
import LoaderContainer from "../../containers/LoaderContainer";


class AdminPanelProductComponent extends Component {

    componentDidMount() {
        const {actions: {getProductById}, params: {id}} = this.props
        if(id){
            getProductById(id)
        }
    }

    componentWillUnmount() {
        const {actions: {clearData}} = this.props
        clearData()
    }


    changeState = (e) => {
        const {actions: {changeCatalogProduct}} = this.props;
        const {target: {name, value, type}} = e;
        if(type==='number'){
            changeCatalogProduct(name, Number(value));
        }else {
            changeCatalogProduct(name, value || '');
        }

    };

    handleChange = (event) => {
        const {actions: {changeCatalogProduct}} = this.props
        changeCatalogProduct('file', event.target.files[0]);
        changeCatalogProduct('image', URL.createObjectURL(event.target.files[0]));
    };

    save = () => {
        console.log('ad')
        const {actions: {addProductToCatalog}} = this.props
        addProductToCatalog(this.props.product)
    };

    priceWithDiscount = () => {
        let price = (this.props.product.price / 100 * (100 - this.props.product.discount));
        return isNaN(price) ? 0 : this.numberFormat(price);
    }

    numberFormat = (number) => {
        return number.toFixed(2)
    }

    render() {

        return (
            <LoaderContainer>
                <div className="admin-card panel-products">
                    <div>
                        <i className="fas fa-chevron-left hover" style={{fontSize: 18, padding: '0 10', color: '#00ba56'}}
                           onClick={browserHistory.goBack}/>
                    </div>
                    <div className="product-container">
                        <div className="add-product">
                            <p className="title">Описание</p>
                            <div>
                                <input type="text" name="name" placeholder="Название"
                                       onChange={this.changeState} defaultValue={this.props.product.name}/>
                                <input type="text" name="category" placeholder="Категория" onChange={this.changeState}
                                       defaultValue={this.props.product.category}/>
                            </div>
                            <div>
                                <p className="title">Цена</p>
                                <p className="title">Скидка</p>
                                <input type="number" name="price" placeholder="Цена" onChange={this.changeState} step="0.01"
                                       defaultValue={this.props.product.price}/>
                                <input type="number" name="discount" placeholder="Скидка" onChange={this.changeState}
                                       min="0" max="100" defaultValue={this.props.product.discount}/>

                            </div>
                            <p className="title">Единицы измерения</p>
                            <div>
                                <input type="text" name="unitName" placeholder="Единица измерения"
                                       onChange={this.changeState} defaultValue={this.props.product.unitName}/>
                                <input type="number" name="unitNumber" placeholder="Вес" onChange={this.changeState}
                                       defaultValue={this.props.product.unitNumber}/>

                            </div>
                            <input type="file" name="file" onChange={this.handleChange}/>
                        </div>
                        <div className="viewer-form">

                            <div className="product card">
                                <div className="product-content">
                                    <div className="product-title">
                                        <div> {this.props.product.name}</div>
                                        <div
                                            className="units">{this.props.product.unitNumber} {this.props.product.unitName}</div>
                                    </div>
                                    <div className="product-price card">
                                        <div className="price">{this.numberFormat(this.props.product.price)} BYN</div>
                                        <div className="discount">
                                            <div>{this.props.product.discount}%</div>
                                        </div>
                                        <div
                                            className="new-price">{this.priceWithDiscount()} BYN
                                        </div>
                                    </div>
                                    <div className="product-image"><img
                                        src={this.props.product.image} alt=""/></div>
                                    <ProductAction id={this.props.product.id}/>
                                </div>

                            </div>

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
    const {catalog: {product}, loader} = state;
    return {
        product,
        loader
    };
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        addProductToCatalog,
        getProductById,
        changeCatalogProduct,
        clearData
    }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminPanelProductComponent);

