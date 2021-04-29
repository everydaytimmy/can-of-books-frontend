import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AddBook from './Modal.js'



class BestBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    }
  }

  onOpen = () => this.setState({ showModal: true });
  onClose = () => this.setState({ showModal: false });

  componentDidMount() { this.props.bookQuery() }

  render() {
    return (
      <>
        <Button onClick={this.onOpen}>Add A Book</Button>

        <CardDeck>
          {this.props.bookList.map((n, index) => {
            return (
              <Card style={{ minWidth: '18rem' }} key={index}>
                <Card.Title>{n.name}</Card.Title>
                <Card.Text>{n.description}</Card.Text>
                <Card.Text>{n.status}</Card.Text>
              </Card>
            )
          })
          }
        </CardDeck>
        <AddBook
          show={this.state.showModal}
          open={this.onOpen}
          close={this.onClose}
          newBook={this.props.newBook}
        />


      </>
    );
  }



}

export default withAuth0(BestBook);


