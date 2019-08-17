import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {loadPosts, removePost} from "../../actions/action";
import connect from "react-redux/es/connect/connect";
import {Link} from "react-router";
import LoaderContainer from "../../containers/LoaderContainer";


class AdminPanelBlogComponent extends Component {


    componentDidMount() {
        const {actions: {loadPosts}} = this.props;
        loadPosts();
    }

    removePost = (id) => {
        const {actions: {removePost}} = this.props;
        removePost(id)
    };

    editProduct = (id) => {
        console.log(id);
    };


    render() {

        const {posts} = this.props;
        let productsView = posts.map(post => {
            return <tr key={post.id}>
                <td className="txl">{post.title}</td>
                <td className="txl txtline">{post.content}</td>
                <td className="txl">{post.date}</td>
                <td className="txr">{post.tag}</td>
                <td className="txr">{post.statistic.viewers}</td>
                <td className="txr">{post.statistic.comments}</td>
                <td className="txr">
                    <i className="far fa-eye icon-margin" onClick={() => this.viewProduct(post.id)}/>
                    <Link to={{ pathname: `/admin/blog/edit/${post.id}`}} > <i className="far fa-edit icon-margin"/> </Link>
                    <i className="far fa-trash-alt icon-margin" onClick={() => this.removePost(post.id)}/>


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
                            <th className="txl" style={{width: '10%'}}>Дата</th>
                            <th className="txr" style={{width: '5%'}}>Ярлык</th>
                            <th className="txr" style={{width: '10%'}}>Просмотры</th>
                            <th className="txr" style={{width: '10%'}}>Коментарии</th>
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
    const {blog: {posts}, loader} = state;
    return {
        posts,
        loader
    };
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        loadPosts,
        removePost
    }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminPanelBlogComponent);
