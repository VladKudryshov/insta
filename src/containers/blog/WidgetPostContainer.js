import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {loadData} from "../../actions/action";
import connect from "react-redux/es/connect/connect";
import WidgetPost from "../../components/basic/blog/WidgetPost";
import {BLOG} from "../../consts/apps";
import {isArray, isEmpty} from "lodash";

class WidgetPostContainer extends Component {


    componentDidMount() {
        this.props.actions.loadData(BLOG)
    }


    getValueOrProgress = (value) => {
        return value ? value : <div className="meter">
            <span style={{width: '100%'}}></span>
        </div>
    }

    render() {
        const {post} = this.props;
        let prePosts = !isArray(post) || isEmpty(post) ? [{}, {}, {}] : post;

        return (
            <div className="blog-cards">
                {
                    prePosts.slice(0, 3).map(Vpost => {
                        return (
                            <WidgetPost post={Vpost} getValueOrProgress={this.getValueOrProgress}/>
                        )
                    })

                }
            </div>

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
        loadData
    }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(WidgetPostContainer);
