import React, {Component} from 'react';

import ProductComponent from "../components/basic/catalog/ProductComponent";
import {bindActionCreators} from "redux";
import {getProductById} from "../actions/action";
import connect from "react-redux/es/connect/connect";

class ProductContainer extends Component {

    render() {
        return (
            <ProductComponent {...this.props}/>
        );
    }
}

const mapStateToProps = (state) => {
    const {catalog: {product}} = state;
    return ({
        product
    });
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        getProductById,
    }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);

