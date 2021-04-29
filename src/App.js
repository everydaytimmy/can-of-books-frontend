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
    }
  }

  

  render() {
    console.log('app', this.props);
    return (
      <>
        <Router>
          <IsLoadingAndError>
            <Header />
            <LogoutButton />
            <Switch>
              <Route exact path="/">

                {/* TODO: if the user is logged in, render the `MyFavoriteBooks` component, if they are not, render the `Login` component */}
                {this.props.auth0.isAuthenticated ? <MyFavoriteBooks /> : <Login />}

              </Route>
              <Route exact path="/profile">

                <Profile />

                {/* TODO: if the user is logged in, render the `MyFavoriteBooks` component, if they are not, render the `Login` component */}
              </Route>

              <Route exact path="/books">

                <BestBook
                  bookList={this.state.books} />

              </Route>
            </Switch>
            <Footer />
          </IsLoadingAndError>
        </Router>
      </>
    );
  }
}

export default withAuth0(App);


// getMovies = async () => {
//   const movieURL = `https://city-explorer-tv.herokuapp.com/movie?searchQuery=${this.state.searchQuery}`

//   // const movieURL = `http://localhost:3001/movie?searchQuery=${this.state.searchQuery}`

//   const movieResponse = await axios.get(movieURL);

//   this.setState({
//     movie: movieResponse.data,
//   })
// }