import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './MyFavoriteBooks.css';
// import { useAuth0 } from '@auth0/auth0-react';

function MyFavoriteBooks() {

  return (
    <Jumbotron>
      <h1>My Favorite Books</h1>
      <p>
        This is a collection of my favorite books
        </p>
    </Jumbotron>
  )

}


// export default useAuth0(MyFavoriteBooks);
export default MyFavoriteBooks;




