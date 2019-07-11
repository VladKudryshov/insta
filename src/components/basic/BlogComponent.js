import React, {Component} from 'react';
import LoaderContainer from "../../containers/LoaderContainer";

class BlogComponent extends Component {

    componentDidMount() {
        this.props.actions.loadPosts()
    }

    render() {

        let posts = this.props.blog.map(post => {
            return (
                <div className="blog-item card" key={post.id}>
                    <div className="blog-item-title">{post.title}</div>
                    <ul className="blog-item-info">
                        <li className="date"><i className="far fa-calendar-alt"/> {post.date}</li>
                        <li className="blog-item-tags">
                            <div className="tag primary">{post.tag}</div>
                        </li>
                        <li className="blog-item-user">
                            <span className="statistic-field">Автор:</span> {post.author}
                        </li>
                    </ul>
                    <div className="short-content">
                        {post.content}
                    </div>
                    <ul className="smart-actions">
                        <li>
                            <div className="statistic-field"><i className="far fa-eye"/> {post.statistic.viewers}</div>
                        </li>
                        <li>
                            <div className="statistic-field"><i className="far fa-comments"/> {post.statistic.comments}
                            </div>
                        </li>
                        <a className="right">Read more</a>
                    </ul>
                </div>
            )
        });
        return (
            <LoaderContainer>
                <div className="blog-component">
                    {posts}
                </div>
            </LoaderContainer>
        );
    }


}


export default BlogComponent;