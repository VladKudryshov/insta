import {bindActionCreators} from "redux";
import {loadData} from "../../actions/action";
import connect from "react-redux/es/connect/connect";
import React, {Component} from "react";
import PostList from "../../components/basic/blog/PostList";
import {BLOG} from "../../consts/apps";


class BlogContainer extends Component {

    componentDidMount() {
        this.props.actions.loadData(BLOG)
    }


    render() {
        const {post} = this.props
        return (
            <PostList posts = {post}/>
        );
    }

}

const mapStateToProps = (state) => {
    const {data: {post}} = state;
    return {
        post
    };
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        loadData
    }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(BlogContainer);