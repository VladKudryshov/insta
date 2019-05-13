import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PostComponent from "./PostComponent";
import {instaService} from "../services/instaService";


class ListPostComponent extends React.Component {


    constructor(props) {
        super(props);
        this.state = {data: [], isLoading: true};
    }

    componentDidMount() {
        this.setState({isLoading: true});

        instaService.getMedia(10212391882)
            .then(data => this.setState({data: data['items'], isLoading: false}))
    }

    render() {

        const {data} = this.state;

        const productList = data.map(product => {
            return <PostComponent key={product.pk} product = {product}/>
        });

        return <>{productList}</>
    }
}

ListPostComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default ListPostComponent;