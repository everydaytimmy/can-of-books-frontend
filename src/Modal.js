import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class AddBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      descrption: '',
      status: '',
    }
  }

  render() {
    
    return (
      <>
        <Modal show={this.props.show} close={this.props.close}>
          <form onSubmit={(e) => this.props.newBook(e, this.state.name, this.state.description, this.state.status)}>
            <label>Book Title</label>
            <input onChange={(e) => this.setState({name:e.target.value})}></input>
            <br></br>
            <label>Book Description</label>
            <input onChange={(e) => this.setState({description:e.target.value})}></input>
            <br></br>
            <label>Status</label>
            <input onChange={(e) => this.setState({status:e.target.value})}></input>
            <br></br>
            <Modal.Footer>
              <Button variant="secondary" type='submit' onClick={this.props.close}>submit</Button>
              <Button variant="primary" onClick={this.props.close}>close</Button>
            </Modal.Footer>
          </form>
        </Modal>
      </>
    )
  }
}

export default AddBook;

