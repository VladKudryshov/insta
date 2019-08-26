import {Link} from "react-router";
import {get} from "lodash";
import React from "react";


const Post = ({post}) => (
    <div className="blog-item card" key={get(post, 'id')}>
        <img
            className="post-image"
            src="https://images11.cosmopolitan.ru/upload/img_cache/45a/45ae29e14b0ef7af5e529c1c1dea7168_ce_740x460x0x0.jpg"
            alt=""/>
        <div className="blog-item-title">{post.title}</div>
        <ul className="blog-item-info">
            <li className="date"><i className="far fa-calendar-alt"/> {get(post, 'date', new Date().toDateString())}</li>
            <li className="blog-item-tags">
                <div className="tag primary">{get(post, 'tag')}</div>
            </li>
            <li className="blog-item-user">
                <span className="statistic-field">Автор:</span> {get(post, 'author')}
            </li>
        </ul>
        <div className="short-content">
            {get(post, 'content')}
        </div>
        <ul className="smart-actions">
            <li>
                <div className="statistic-field"><i className="far fa-eye"/> {get(post, 'statistic.viewers')}
                </div>
            </li>
            <li>
                <div className="statistic-field"><i
                    className="far fa-comments"/> {get(post, 'statistic.comments')}
                </div>
            </li>
            <Link to={{pathname: `/blog/${get(post, 'id')}`}} className="right">Read more</Link>
        </ul>
    </div>
);


export default Post;