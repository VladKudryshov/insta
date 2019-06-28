import {bindActionCreators} from "redux";
import {loadData} from "../actions/action";
import connect from "react-redux/es/connect/connect";
import React, {Component} from "react";
import CatalogComponent from "../components/CatalogComponent";


class CatalogContainer extends Component {

    render() {
        return (
            <CatalogComponent {...this.props}/>
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
        loadData
    }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CatalogContainer);