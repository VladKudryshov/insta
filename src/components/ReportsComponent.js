import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid/Grid";
import Typography from "@material-ui/core/Typography/Typography";
import List from "@material-ui/core/List/List";
import ListItem from "@material-ui/core/ListItem/ListItem";
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import ListItemSecondaryAction from "@material-ui/core/es/ListItemSecondaryAction/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import Dowload from '@material-ui/icons/CloudDownload';
import {instaService} from "../services/instaService";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";

class ReportsComponent extends Component {


    constructor(props) {
        super(props);
        this.state = {data: [], isLoading: true};

    }

    componentDidMount() {

        instaService.getReports()
            .then(data => this.setState({data: data, isLoading: false}))
    }

    render() {
        const {data} = this.state;


        const productList = data.map(product => {
            return <ListItem key={product.id}>

                <ListItemText
                    primary={new Date(product.date).toLocaleString()}
                    secondary={product.status}
                />
                <ListItemSecondaryAction>
                    {
                        product.status === 'Done'
                            ? <a href={product.url}><Dowload/></a>
                            : <CircularProgress size={24}/>
                    }
                </ListItemSecondaryAction>
            </ListItem>
        });


        return (
            <Grid item xs={12} md={6}>
                <Typography variant="h6">
                    Your reports history
                </Typography>
                <div>
                    <List>
                        {productList}
                    </List>
                </div>
            </Grid>
        );
    }
}


export default ReportsComponent;