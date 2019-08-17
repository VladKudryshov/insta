import React, {Component} from 'react';
import LoaderContainer from "../../../containers/LoaderContainer";
import {Link} from "react-router";
import {BLOG} from "../../../consts/apps";

const PostList = ({
                           posts
                       }) => (


    <LoaderContainer>
        <div className="blog-component">
            {
                posts.map(post => (
                    <div className="blog-item card" key={post.id}>
                        <img
                            className="post-image"
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
                        <div className="short-content">
                            {post.content}
                        </div>
                        <ul className="smart-actions">
                            <li>
                                <div className="statistic-field"><i className="far fa-eye"/> {post.statistic.viewers}
                                </div>
                            </li>
                            <li>
                                <div className="statistic-field"><i
                                    className="far fa-comments"/> {post.statistic.comments}
                                </div>
                            </li>
                            <Link to={{pathname: `/blog/${post.id}`}} className="right">Read more</Link>
                        </ul>
                    </div>
                ))
            }
        </div>
    </LoaderContainer>
)


export default PostList;