import React, {Component} from 'react';
import {browserHistory} from "react-router";
import {bindActionCreators} from "redux";
import {addProductToCatalog, changeDataObject, clearData, loadDataById} from "../../actions/action";
import connect from "react-redux/es/connect/connect";
import LoaderContainer from "../../containers/LoaderContainer";
import {BLOG, PRODUCTS} from "../../consts/apps";
import Post from "../basic/blog/Post";
import {get} from "lodash"

class AdminPanelPostComponent extends Component {

    componentDidMount() {
        const {actions: {loadDataById}, params: {id}} = this.props
        if (id) {
            loadDataById(BLOG, id)
        }
    }

    componentWillUnmount() {
        const {actions: {clearData}} = this.props;
        clearData()
    }


    changeState = (e) => {
        const {actions: {changeDataObject}} = this.props;
        const {target: {name, value, type}} = e;
        if (type === 'number') {
            changeDataObject(BLOG, name, Number(value));
        } else {
            changeDataObject(BLOG, name, value || '');
        }

    };

    save = () => {
        const {actions: {addProductToCatalog}} = this.props
        addProductToCatalog(this.props.product)
    };


    render() {
        const {post} = this.props;
        return (
            <LoaderContainer>
                <div className="admin-card panel-posts">
                    <div>
                        <i className="fas fa-chevron-left hover"
                           style={{fontSize: 18, padding: '0 10', color: '#00ba56'}}
                           onClick={browserHistory.goBack}/>
                    </div>
                    <div className="product-container">
                        <div className="add-product">
                            <p className="title">Описание</p>
                            <div>
                                <input className="p1015" type="text" name="title" placeholder="Название"
                                       onChange={this.changeState}
                                       value={get(post, 'title')}/>
                                <input className="p1015" type="text" name="tag" placeholder="Ярлык"
                                       onChange={this.changeState}
                                       value={get(post, 'tag')}/>
                            </div>

                        </div>
                        <div className="viewer-post-form">
                            <Post post={post}/>
                        </div>
                        <div>
                            <button onClick={() => this.save()} className="btn action right"> Сохранить</button>
                        </div>
                    </div>

                </div>
            </LoaderContainer>
        );
    }
}

const mapStateToProps = (state) => {
    const {data: {post}, loader} = state;
    return {
        post,
        loader
    };
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        addProductToCatalog,
        loadDataById,
        changeDataObject,
        clearData
    }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminPanelPostComponent);

