import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';



class Profile extends Component {
  render() {
    const { user } = this.props.auth0;
    // TODO: redirect if user not logged in 
    if (!user) {
      return (
        <>
          <h1>Unauthorized</h1>
          <h2>Leave This Place</h2>
        </>
      )
    }
    return (
      < Jumbotron >
        <img src={user.picture} alt={user.name} />
        <h3>Hello {user.name}</h3>
        <p>{user.email}</p>
      </Jumbotron >
    )
  }
}

export default withAuth0(Profile);