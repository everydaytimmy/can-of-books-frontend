import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

class BestBook extends React.Component {
  
  componentDidMount() {this.props.bookQuery()}
    
  render() {
      return (
        // <p> testy</p>
        <CardDeck>
          {this.props.bookList.map((n, index) => {
            return (
              <Card style={{ minWidth: '18rem' }} key={index}>
                <Card.Title>{n.name}</Card.Title>
                <Card.Text></Card.Text>
                <Card.Text></Card.Text>
              </Card>
            )
          })
          }
        </CardDeck>

      );
    }



  }

  export default withAuth0(BestBook);


