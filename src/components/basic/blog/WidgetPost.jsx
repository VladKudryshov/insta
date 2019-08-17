import React from 'react';
import {Link} from "react-router";

const WidgetPost = ({post, getValueOrProgress}) => (
    <div className="blog-card card" key={post.id}>

        <h2 className="title">{getValueOrProgress(post.title)}</h2>
        <div className="date">{getValueOrProgress(post.date)}
        </div>
        <div className="">{getValueOrProgress(post.content)}</div>
        <Link to={{pathname: `/blog/${post.id}`}} className="read-more">{
            post.id ? 'READ MORE' : getValueOrProgress('')
        }</Link>
    </div>
)

export default WidgetPost;