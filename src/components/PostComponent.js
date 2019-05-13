import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CommentIcon from '@material-ui/icons/Comment';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import {get} from 'lodash';
import Typography from "@material-ui/core/Typography/Typography";


const styles = theme => ({
    card: {
        width: 400,
        height: 430,
        float: 'left',
        margin: 20
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
});

class PostComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {classes, product} = this.props;
        const image = product.carousel_media !== null ? product.carousel_media[0].image_versions2.candidates[0].url : product.image_versions2.candidates[0].url;
        console.log(image)
        return (
            <Card className={classes.card}>
                <CardHeader
                    avatar={
                        <Avatar src={product.user.profile_pic_url} aria-label="Recipe"
                                className={classes.avatar}/>
                    }
                    action={
                        <IconButton>
                            <MoreVertIcon/>
                        </IconButton>
                    }
                    title={product.user.full_name}
                    subheader={product.user.username}
                />
                <CardMedia
                    className={classes.media}
                    image={image}
                >

                </CardMedia>
                <CardContent>
                    <Typography component="p">
                        {get(product.caption, 'text', '').substring(0, 47) + '...'}
                    </Typography>
                </CardContent>
                <CardActions className={classes.actions} disableActionSpacing>
                    <IconButton aria-label="Add to favorites">
                        {product.like_count}
                        <FavoriteIcon color={"error"}/>
                    </IconButton>
                    <IconButton aria-label="Share">
                        {product.comment_count}
                        <CommentIcon/>
                    </IconButton>
                </CardActions>

            </Card>
        );
    }
}

PostComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PostComponent);