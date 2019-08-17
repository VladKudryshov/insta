import React, {Component} from 'react';

import FullProduct from "../../components/basic/catalog/FullProduct";
import {bindActionCreators} from "redux";
import {loadDataById} from "../../actions/action";
import connect from "react-redux/es/connect/connect";
import {PRODUCTS} from "../../consts/apps";

class ProductContainer extends Component {

    componentDidMount() {
        const {actions: {loadDataById}, params: {id}} = this.props;
        loadDataById(PRODUCTS, id);
    }

    render() {
        const {products} = this.props;
        return (
            < FullProduct product={products}/>
        );
    }
}

const mapStateToProps = (state) => {
    const {data: {products}} = state;
    return ({
        products
    });
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        loadDataById,
    }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);

