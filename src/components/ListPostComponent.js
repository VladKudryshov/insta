import React from 'react';
import PropTypes from 'prop-types';
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
            return <PostComponent key={product.pk} product={product}/>
        });

        return <>{productList}</>
    }
}


export default ListPostComponent;