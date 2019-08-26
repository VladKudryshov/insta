import React from 'react';
import LoaderContainer from "../../../containers/LoaderContainer";
import Post from "./Post";

const PostList = ({posts}) => (
    <LoaderContainer>
        <div className="blog-component">
            {
                posts.map(post => (
                    <Post post={post}/>
                ))
            }
        </div>
    </LoaderContainer>
);


export default PostList;