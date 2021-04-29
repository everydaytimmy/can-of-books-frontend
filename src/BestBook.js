import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import { CardDeck } from 'react-bootstrap';

class BestBook extends React.Component {
  render() {
    return (
        // <p> testy</p>
      //   <CardDeck>
      //   {this.props.bookList.map((n, index) => {
      //     return (
      //     <Card style={{minWidth: '18rem'}} key={index}>
      //       <Card.Title>{n.title}</Card.Title>
      //       <Card.Text>Overview: {n.overview}</Card.Text>
      //       <Card.Text>Popularity: {n.popularity}</Card.Text>
      //     </Card>
      //     )
      //   })
      //   }
      // </CardDeck>

    );
  }



}

export default withAuth0(BestBook);


