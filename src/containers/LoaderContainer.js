import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";


class LoaderContainer extends Component {

    render() {
        return (
            this.props.loader
                ? <div className="spinners">
                    <div className="spinner-2"/>
                    <div className="spinner"/>
                </div>
                : this.props.children
        );
    }

}

const mapStateToProps = (state) => {
    const {loader} = state;
    return {
        loader
    };
};


export default connect(mapStateToProps, null)(LoaderContainer);