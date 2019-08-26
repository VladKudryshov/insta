import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {loadData, removeDataById} from "../../actions/action";
import connect from "react-redux/es/connect/connect";
import {Link} from "react-router";
import LoaderContainer from "../../containers/LoaderContainer";
import {BLOG} from "../../consts/apps";
import TableView from "./TableView";
import {isEmpty} from "lodash"
import {is} from "redux-saga/utils";


class AdminPanelBlogComponent extends Component {

    componentDidMount() {
        const {actions: {loadData}} = this.props;
        loadData(BLOG);
    }

    removePost = (id) => {
        const {actions: {removeDataById}} = this.props;
        removeDataById(BLOG, id)
    };

    editPost = (id) => {
        console.log(id);
    };


    render() {

        const headers = {
            title: {
                name: "Название",
                style: {
                    textAlign: "left"
                }
            },
            author: {
                name: "Автор",
                style: {
                    textAlign: "left"
                }
            },
            content: {
                name: "Контент",
                style: {
                    textAlign: "left"
                }
            },
            date: {
                name: "Дата",
                style: {
                    textAlign: "right"
                }
            },
            tag: {
                name: "Ярлык",
                style: {
                    textAlign: "right"
                }
            },
            views: {
                name: "Просмотры",
                style: {
                    textAlign: 'right'
                }
            },
            comments: {
                name: "Комментарии",
                style: {
                    textAlign: "right"
                }
            },
        };

        const actions = {
            editAction: this.editPost,
            removeAction: this.removePost
        };

        const {post} = this.props;
        let map = [];
        if (!isEmpty(post)) {
            map = post.map(f => {
                return {
                    title: f.title,
                    content: f.content,
                    tag: f.tag,
                    date: f.date,
                    author: f.author,
                    views: f.statistic.viewers,
                    comments: f.statistic.comments,
                }
            });
        }

        return (
            <LoaderContainer>
                <div className="panel-products">
                    <Link to="/admin/blog/new" className="btn action" onlyActiveOnIndex>Добавить</Link>
                    <TableView headers={headers}
                               data={map}
                               actions={actions}
                               columnSize={{gridTemplateColumns: '10% 10% 30% 10% 10% 10% 10% 10%'}}/>
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
        loadData,
        removeDataById
    }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminPanelBlogComponent);
