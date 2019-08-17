import React from 'react';
import LoaderContainer from "../../../containers/LoaderContainer";
import {get} from 'lodash';

const Post = ({post}) => (
    <LoaderContainer>
        <div className="card post">
            <img className="post-image"
                 src="https://images11.cosmopolitan.ru/upload/img_cache/45a/45ae29e14b0ef7af5e529c1c1dea7168_ce_740x460x0x0.jpg"
                 alt=""/>
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
            <div className="post-content">
                {post.content}
            </div>
            <ul className="smart-actions">
                <li>
                    <div className="statistic-field"><i className="far fa-eye"/> {get(post, 'statistic.viewers')}</div>
                </li>
                <li>
                    <div className="statistic-field"><i className="far fa-comments"/> {get(post, 'statistic.comments')}
                    </div>
                </li>

            </ul>
            <div className="post-comments">
                <ul className="comments">
                    <li className="comment">ASdAD</li>
                </ul>
                <div className="form-comment">
                    <input type="text" className="input-comment"/>
                    <button className="btn left action">Отправить</button>
                </div>
            </div>
        </div>
    </LoaderContainer>
);

export default Post;

