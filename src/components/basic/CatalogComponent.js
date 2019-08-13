import React, {Component} from 'react';
import ListProductsComponent from "./catalog/ListProductsComponent";
import SelectorContainer from "../../containers/SelectorContainer";


class CatalogComponent extends Component {
    state = {
        category: 'Fruit'
    };


    componentDidMount() {
        const {actions: {loadData}} = this.props;
        let category = this.props.location.query.category;
        this.setState({category: category})
        loadData(category ? category : '');
    }

    handleChange = (val) => {
        const {actions: {loadData}} = this.props;
        let {target: {value}} = val;
        console.log(value)
        if (value === 'Empty') {
            value = '';
        }
        loadData(value)
    };

    render() {
        return (
            <div className="wrapper auto1fr">
                <div className="">
                    <SelectorContainer change={this.handleChange}/>
                </div>
                <ListProductsComponent {...this.props}/>
            </div>
        );
    }
}


export default CatalogComponent;