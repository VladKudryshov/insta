import React, {Component} from 'react';
import LoaderContainer from "../../../containers/LoaderContainer";
import {Link} from "react-router";

class WidgetPostComponent extends Component {

    componentDidMount() {
        this.props.actions.loadPosts()
    }


    getValueOrProgress = (value) =>{
        return value ? value : <div className="meter">
            <span style={{width: '25%'}}></span>
        </div>
    }

    render() {

        const {posts}= this.props;
        let postList = posts.slice(0, 3).map(post => {
            return (
                <div className="blog-card card" key={post.id}>

                    <h2 className="title">{this.getValueOrProgress(post.title)}</h2>
                    <div className="date">{this.getValueOrProgress(post.date)}
                    </div>
                    <div className="">{this.getValueOrProgress(post.content)}</div>
                    <Link to={{pathname: `/blog/${post.id}`}} className="read-more">{
                        post.id ? 'READ MORE'
                            : this.getValueOrProgress('')
                    }</Link>
                </div>
            )
        });


        return (
                <div className="blog-cards">
                    {postList}
                </div>
        );
    }


}


export default WidgetPostComponent;