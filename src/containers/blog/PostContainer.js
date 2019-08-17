import {bindActionCreators} from "redux";
import {loadDataById, clearData} from "../../actions/action";
import connect from "react-redux/es/connect/connect";
import React, {Component} from "react";
import Post from "../../components/basic/blog/Post";
import {BLOG} from "../../consts/apps";


class PostContainer extends Component {

    componentDidMount() {
        const {actions: {loadDataById}, params: {id}} = this.props;
        loadDataById(BLOG, id);
    }

    componentWillUnmount(){
        const {actions: {clearData}} = this.props;
        clearData(BLOG);
    }


    render() {
        const {post} = this.props
        return (
            <Post post = {post}/>
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
        loadDataById,
        clearData
    }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);