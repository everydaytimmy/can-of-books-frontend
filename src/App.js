import React from 'react';
import Header from './Header';
import IsLoadingAndError from './IsLoadingAndError';
import Footer from './Footer';
import MyFavoriteBooks from './MyFavoriteBooks';
import { withAuth0 } from '@auth0/auth0-react';
import Login from './Login';
import LogoutButton from './LogoutButton';
import Profile from './profile';
import BestBook from './BestBook.js'
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      generateBook: [],
      displayAddBook: false,
    }
  }

  render() {

    const bookQuery = async (e) => {
      try {
        const books = await axios.get(`http://localhost:3001/books?email=${this.props.auth0.user.email}`)
        console.log(books.data);
        typeof books.data === 'string' ? this.setState({ name: 'No Books' }) : this.setState({ books: books.data });
      } catch (error) {
        console.log(error);
      }
    }

    const newBook = async (e, name, description, status) => {
      e.preventDefault();
console.log('string', this.state);
      try {
        const generateBook = await axios.post(`http://localhost:3001/books?email=${this.props.auth0.user.email}`, { name, description, status });
        const newBooksArray = generateBook.data;
        console.log(newBooksArray);
        this.setState({ books: newBooksArray, displayAddBook: false });
      } catch (error) {
        console.log(error);
      }
    }

    console.log('app', this.props);
    return (
      <>
        <Router>
          <IsLoadingAndError>
            <Header />
            <LogoutButton />
            <br></br>
            <Switch>
              <Route exact path="/">

                {this.props.auth0.isAuthenticated ? <MyFavoriteBooks /> : <Login />}

              </Route>
              <Route exact path="/profile">

                <Profile />

              </Route>

              <Route exact path="/books">
                <BestBook
                  bookList={this.state.books}
                  bookQuery={bookQuery}
                  newBook={newBook}
                />

              </Route>
            </Switch>
            <br></br>
            <Footer />
          </IsLoadingAndError>
        </Router>
      </>
    );
  }
}

export default withAuth0(App);

