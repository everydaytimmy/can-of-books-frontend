import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import { Link } from "react-router-dom";
import './Header.css';
import { withAuth0 } from '@auth0/auth0-react';


class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/"> Home </Nav.Link>
          {this.props.auth0.isAuthenticated && <Nav.Link href="/profile"> Profile </Nav.Link>}
          {this.props.auth0.isAuthenticated && <Nav.Link href="/books"> Books </Nav.Link>}
        </Nav>
      </Navbar>
    );
  }
}

export default withAuth0(Header);
