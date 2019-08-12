import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {loadPosts} from "../../actions/action";
import connect from "react-redux/es/connect/connect";
import WidgetPostComponent from "../../components/basic/blog/WidgetPostComponent";

class WidgetPostContainer extends Component {

    render() {
        return (
            <WidgetPostComponent {...this.props}/>
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
        loadPosts
    }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(WidgetPostContainer);
