import {bindActionCreators} from "redux";
import {filter, loadData} from "../../actions/action";
import connect from "react-redux/es/connect/connect";
import React, {Component} from "react";
import {PRODUCTS} from "../../consts/apps";
import {get, isEmpty} from "lodash";
import SelectorContainer from "../SelectorContainer";
import ListProducts from "../../components/basic/catalog/ListProducts";


class CatalogContainer extends Component {

    componentDidMount() {
        const {actions: {loadData, filter}} = this.props;

        let category = this.props.location.query.category;
        let newVar = category ? category : '';
        filter(newVar);
        loadData(PRODUCTS, 'category='+newVar);


    }

    handleChange = (val) => {
        const {actions: {loadData, filter}} = this.props;

        if (val === 'Empty') {
            val = '';
        }
        filter(val);
        loadData(PRODUCTS, 'category='+val)
    };


    render() {
        const {products} = this.props;

        return (
            <div className="wrapper auto1fr">
                <div className="">
                    <SelectorContainer change={this.handleChange} filter={this.props.filter}/>
                </div>
                <ListProducts products={get(products, 'content')}/>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    const {data: {products}, filter} = state;
    return {
        products,
        filter
    };
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        loadData,
        filter
    }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CatalogContainer);