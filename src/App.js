import  { connect } from 'react-redux';
import React from 'react';
import './App.css';
import {addBookToListAPI, addAllBooksAPI, searchBooksAPI} from './redux/actions/actions';
import {Route} from 'react-router';
import SearchBar from './components/search-bar';
import MainPage from './components/MainPage';

class BooksApp extends React.Component {

removeFromOldList = (list, nList, book) => {
  this.props.addBook(nList, book);
  this.forceUpdate();
}

handleOnChange = (event, book) => {
    const currList = book.shelf;
    const newList = event.target.value;
    this.removeFromOldList(currList, newList, book);
}
handleInput = (e) => {
  e.target.value.length > 0 ? this.props.searchBooks(e.target.value)
  : this.props.addAllBooks();
  this.forceUpdate();
} 

componentDidMount = () => {
   this.props.addAllBooks();
}
// shouldComponentUpdate = (nextProps) => {
//   if(this.props.testBooks.length !== nextProps.testBooks.length) {
//     return true;
//   }
//   for(let i = 0; i < this.props.testBooks.length ; i++) {
//       if(this.props.testBooks[i].shelf !== nextProps.testBooks[i].shelf) {
//         return true;
//       }
//   }
//   return false;
// }
renderMainPage = () => {
  return (
    !this.props.isFetching ? (
    <MainPage
    testBooks = {this.props.testBooks}
    handleOnChange = {this.handleOnChange}
    />
    ) : <div> Loading </div>
  )
}

renderSearchPage = () => {
  return (
    !this.props.isFetching ? (
     <SearchBar books = {this.props.testBooks}
     handleInput = {this.handleInput}
     handleOnChange = {this.handleOnChange}
     addAllBooks={this.props.addAllBooks}
     />
    ) : <div> Loading </div>
  );
}
  render() {
    return (
      <div>
      <Route exact path = "/" render= {() => this.renderMainPage()}/>
      <Route exact path = "/search" render = {() => this.renderSearchPage()}/>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
  addBook : (book, list) => {
    dispatch(addBookToListAPI(book, list));
  },
  addAllBooks: () => {
    dispatch(addAllBooksAPI());
  },
  searchBooks: (query) => {
    dispatch(searchBooksAPI(query));
  }

}
}

const mapStateToProps = state => {
  return {
  testBooks : state.books,
  isFetching : state.isFetching
  }
}
export const Books = connect(mapStateToProps, mapDispatchToProps)(BooksApp);
