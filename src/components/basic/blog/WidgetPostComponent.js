import React, {Component} from 'react';
import LoaderContainer from "../../../containers/LoaderContainer";
import {Link} from "react-router";

class BlogComponent extends Component {

    componentDidMount() {
        this.props.actions.loadPosts()
    }

    render() {

        const {posts}= this.props;
        let postList = posts.map(post => {
            return (
                <div className="blog-card card" key={post.id}>
                    <h2 className="title">{post.title}</h2>
                    <div className="date"><i className="far fa-calendar-alt mr10"></i>{post.date}
                    </div>
                    <div className="short-content">{post.content}</div>
                    <Link to={{pathname: `/blog/${post.id}`}} className="read-more">READ MORE</Link>
                </div>
            )
        });
        return (
            <LoaderContainer>
                <div className="blog-cards">
                    {postList}
                </div>
            </LoaderContainer>
        );
    }


}


export default BlogComponent;