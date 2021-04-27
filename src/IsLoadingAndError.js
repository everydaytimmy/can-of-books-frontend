import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';

class IsLoadingAndError extends React.Component {
  render() {
    // console.log(this.props.auth0);
    return (
      this.props.auth0.isLoading ?
        <div> Loading...</div>
        :
        this.props.auth0.error ?
          <div>Oops... {this.props.auth0.error.message}</div>
          :
          this.props.children
    );
  }
}

export default withAuth0(IsLoadingAndError);
