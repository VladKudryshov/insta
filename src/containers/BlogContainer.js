import {bindActionCreators} from "redux";
import {loadPosts} from "../actions/action";
import connect from "react-redux/es/connect/connect";
import React, {Component} from "react";
import BlogComponent from "../components/basic/BlogComponent";


class BlogContainer extends Component {

    render() {
        return (
            <BlogComponent {...this.props}/>
        );
    }

}

const mapStateToProps = (state) => {
    const {blog, loader} = state;
    return {
        blog,
        loader
    };
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        loadPosts
    }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(BlogContainer);