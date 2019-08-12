import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {loadData, removeCatalogProduct} from "../../actions/action";
import connect from "react-redux/es/connect/connect";
import {Link} from "react-router";
import LoaderContainer from "../../containers/LoaderContainer";


class AdminPanelProductsComponent extends Component {


    componentDidMount() {
        const {actions: {loadData}} = this.props;
        loadData('');
    }

    removeProduct = (id) => {
        console.log(id);
        const {actions: {removeCatalogProduct}} = this.props;
        removeCatalogProduct(id)
    };

    editProduct = (id) => {
        console.log(id);
    };


    render() {

        const {products} = this.props;

        let productsView = products.map(product => {
            return <tr key={product.id}>
                <td className="txl">{product.name}</td>
                <td className="txl txtline">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, commodi
                    consequatur cupiditate delectus doloribus, eaque fuga provident quidem quis quisquam quos
                    reprehenderit totam. Accusamus asperiores at deleniti dolores fugit repellendus.
                </td>
                <td className="txl">{product.category}</td>
                <td className="txr">{product.discount}%</td>
                <td className="txr">{product.price}</td>
                <td className="txr">
                    <i className="far fa-eye icon-margin" onClick={() => this.viewProduct(product.id)}/>
                    <Link to={{ pathname: `/admin/catalog/edit/${product.id}`}} > <i className="far fa-edit icon-margin"/> </Link>
                    <i className="far fa-trash-alt icon-margin" onClick={() => this.removeProduct(product.id)}/>


                </td>
            </tr>
        });

        return (
            <LoaderContainer>
                <div className="admin-card panel-products">
                    <Link to="/admin/catalog/new" className="btn action right">Добавить</Link>
                    <table className="table-component">
                        <thead>
                        <tr>
                            <th className="txl" style={{width: '20%'}}>Название</th>
                            <th className="txl" style={{width: '50%'}}>Краткое описание</th>
                            <th className="txl" style={{width: '10%'}}>Категория</th>
                            <th className="txr" style={{width: '5%'}}>Скидка</th>
                            <th className="txr" style={{width: '10%'}}>Цена</th>
                            <th className="txr" style={{width: '10%'}}>Действия</th>
                        </tr>
                        </thead>
                        <tbody>
                        {productsView}
                        </tbody>
                    </table>
                </div>
            </LoaderContainer>
        );
    }
}


const mapStateToProps = (state) => {
    const {catalog: {products}, loader} = state;
    return {
        products,
        loader
    };
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        loadData,
        removeCatalogProduct
    }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminPanelProductsComponent);
