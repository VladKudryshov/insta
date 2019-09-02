import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {loadData, removeDataById} from "../../actions/action";
import connect from "react-redux/es/connect/connect";
import {Link} from "react-router";
import LoaderContainer from "../../containers/LoaderContainer";
import {PRODUCTS} from "../../consts/apps";
import {get, values, isEmpty} from "lodash"
import TableView from "./TableView";

const headers = {
    id: {
        name : "#",
        style: {
            textAlign: "left"
        }
    },
    name: {
        name: "Название",
        style:{
            textAlign: "left"
        }
    },
    content: {
        name: "Контент",
        style:{
            textAlign: "left"
        }
    },
    category: {
        name: "Категория",
        style:{
            textAlign: "right"
        }
    },
    price: {
        name: "Цена",
        style:{
            textAlign: "right"
        }
    },
    discount: {
        name: "Скидка",
        style: {
            textAlign: 'right'
        }
    }
};


class AdminPanelProductsComponent extends Component {


    componentDidMount() {
        const {actions: {loadData}} = this.props;
        loadData(PRODUCTS);
    }

    removeProduct = (id) => {
        const {actions: {removeDataById}} = this.props;
        removeDataById(PRODUCTS, id)
    };

    editProduct = (id) => {
    };

    viewProduct = (id) => {
    };

    render() {

        const {products} = this.props;

        let map = [];
        if(!isEmpty(products)){
            map = get(products, 'content');
        }

        let actions = {
            viewAction: this.viewProduct,
            editAction: this.editProduct,
            removeAction: this.removeProduct
        };

        return (
            <LoaderContainer>
                <div className="rw1">
                    <div className="panel-actions">
                        <button className="btn action"> <Link to="/admin/products/new" onlyActiveOnIndex>Добавить</Link></button>
                    </div>
                    <TableView headers={headers} data={map} actions={actions} columnSize={{gridTemplateColumns: '5% 20% 35% 10% 10% 10% 10%'}}/>
                </div>
            </LoaderContainer>


        );
    }
}

const mapStateToProps = (state) => {
    const {data: {products}, loader} = state;
    return {
        products,
        loader
    };
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        loadData,
        removeDataById
    }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminPanelProductsComponent);