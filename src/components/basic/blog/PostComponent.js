import React, {Component} from 'react';
import LoaderContainer from "../../../containers/LoaderContainer";

class PostComponent extends Component {

    componentDidMount() {
        const {actions: {loadPost}, params: {id}} = this.props;
        loadPost(id);
    }

    render() {

        const {post, post: {statistic}} = this.props;
        return (
           <LoaderContainer>
               <div className="card post">
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
                           <div className="statistic-field"><i className="far fa-eye"/> {statistic.viewers}</div>
                       </li>
                       <li>
                           <div className="statistic-field"><i className="far fa-comments"/> {statistic.comments}
                           </div>
                       </li>

                   </ul>
               </div>
           </LoaderContainer>
        );
    }


}


export default PostComponent;

