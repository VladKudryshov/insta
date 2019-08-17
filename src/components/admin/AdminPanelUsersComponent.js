import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {loadUsers} from "../../actions/action";
import connect from "react-redux/es/connect/connect";
import {Link} from "react-router";
import LoaderContainer from "../../containers/LoaderContainer";


class AdminPanelUsersComponent extends Component {


    componentDidMount() {
        const {actions: {loadUsers}} = this.props;
        loadUsers();
    }

    render() {

        const {users} = this.props;

        let usersView = users.map(user => {
            return <tr key={user.id}>
                <td className="txl">{user.id}</td>
                <td className="txl txtline">{user.email}</td>
                <td className="txl">{user.role}</td>
                <td className="txr">
                    <i className="far fa-eye icon-margin" onClick={() => this.viewProduct(user.id)}/>
                    <Link to={{ pathname: `/admin/blog/edit/${user.id}`}} > <i className="far fa-edit icon-margin"/> </Link>
                    <i className="far fa-trash-alt icon-margin" onClick={() => this.removePost(user.id)}/>
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
                            <th className="txl" style={{width: '30%'}}>#</th>
                            <th className="txl" style={{width: '50%'}}>Email</th>
                            <th className="txl" style={{width: '10%'}}>Роль</th>
                            <th className="txr" style={{width: '10%'}}>Действия</th>
                        </tr>
                        </thead>
                        <tbody>
                        {usersView}
                        </tbody>
                    </table>
                </div>
            </LoaderContainer>
        );
    }
}


const mapStateToProps = (state) => {
    const {user: {users}} = state;
    return {
        users
    };
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        loadUsers
    }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminPanelUsersComponent);
