import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class AddBook extends React.Component {

  render() {
    return (
      <>
        <Modal show={this.props.show} close={this.props.close}>
          <form onSubmit={(e) => this.props.getMyGifts(e)}>
            <label>What is the birthday person's email?</label>
            <input onChange={(e) => this.props.updateEmail(e.target.value)}></input>
            <button type='submit'>submit</button>
          </form>
        </Modal>
      </>
    )
  }
}

export default AddBook;



// <Modal show={this.props.show} close={this.props.close}>
// <Form id="form"> Add A Book </Form>
// <Form.Group>
//   <Form.Label>Book</Form.Label>
//   <Form.Control type="input"
// </Form.Group>
// <Button onClick={this.props.close}> Close </Button>
// </Modal>