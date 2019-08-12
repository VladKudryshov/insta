import {bindActionCreators} from "redux";
import {loadPost} from "../../actions/action";
import connect from "react-redux/es/connect/connect";
import React, {Component} from "react";
import PostComponent from "../../components/basic/blog/PostComponent";


class PostContainer extends Component {

    render() {
        return (
            <PostComponent {...this.props}/>
        );
    }

}

const mapStateToProps = (state) => {
    const {blog: {post}, loader} = state;
    return {
        post,
        loader
    };
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        loadPost
    }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);