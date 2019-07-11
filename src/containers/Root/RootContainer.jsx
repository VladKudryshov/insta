import React, { Component } from 'react';
import { connect } from 'react-redux';

import Root from '../../components/basic/root/Root';

class RootContainer extends Component {
  render() {
    const { children, pathname } = this.props;

    return (
      <Root pathname={pathname}>
        {children}
      </Root>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  children: ownProps.children,
  pathname: ownProps.location.pathname,
});


RootContainer.defaultProps = {
  children: null,
};

export default connect(mapStateToProps, null)(RootContainer);
