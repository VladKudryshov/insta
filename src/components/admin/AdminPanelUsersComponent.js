import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {loadData, loadUsers} from "../../actions/action";
import connect from "react-redux/es/connect/connect";
import {Link} from "react-router";
import LoaderContainer from "../../containers/LoaderContainer";
import {USERS} from "../../consts/apps";
import {get, isEmpty} from 'lodash';
import TableView from "./TableView";

const headers = {
    id: {
        name : "#",
        style: {
            textAlign: "left"
        }
    },
    email: {
        name: "Email",
        style:{
            textAlign: "left"
        }
    },
    role: {
        name: "Роль",
        style:{
            textAlign: "left"
        }
    }
};

class AdminPanelUsersComponent extends Component {


    componentDidMount() {
        const {actions: {loadData}} = this.props;
        loadData(USERS);
    }


    removeProduct = (id) => {
        const {actions: {removeCatalogProduct}} = this.props;
        removeCatalogProduct(id)
    };

    editProduct = (id) => {
    };

    viewProduct = (id) => {
    };

    render() {

        const {users} = this.props;

        let actions = {
            viewAction: this.viewProduct,
            editAction: this.editProduct,
            removeAction: this.removeProduct
        };

        return (
            <LoaderContainer>
                <div>
                    <Link to="/admin/products/new" className="btn action" onlyActiveOnIndex>Добавить</Link>
                    <TableView headers={headers} data={users} actions={actions} columnSize={{gridTemplateColumns: '10% 40% 40% 10%'}}/>
                </div>
            </LoaderContainer>
        );
    }
}


const mapStateToProps = (state) => {
    const {data: {users}} = state;
    return {
        users
    };
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        loadData
    }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminPanelUsersComponent);
