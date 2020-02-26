import  { connect } from 'react-redux';
import React from 'react';
import './App.css';
import {addBookToListAPI, addAllBooksAPI, searchBooksAPI, setQuery} from './redux/actions/actions';
import {Route} from 'react-router';
import SearchBar from './components/search-bar';
import MainPage from './components/MainPage';
import { ReactComponent as Logo } from './images/loading.svg';
class BooksApp extends React.Component {
constructor (props) {
  super(props);
  this.state = {
    books: []
  }
}
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
  if(e.key === "Enter") {
  e.target.value.length > 0 ? this.props.searchBooks(e.target.value)
  : this.props.addAllBooks();
  }
} 

componentDidMount = () => {
   this.props.addAllBooks();
}
shouldComponentUpdate = (nextProps) => {
  if(this.props.isFetching !== nextProps.isFetching || this.props.query !== nextProps.query) {
    return true;
  }
  if(this.props.testBooks.length !== nextProps.testBooks.length) {
    return true;
  }
  return false;
}
renderMainPage = () => {
  return (
    !this.props.isFetching ? (
    <MainPage
    testBooks = {this.props.testBooks}
    handleOnChange = {this.handleOnChange}
    />
    ) : <Logo/>
  )
}

renderSearchPage = () => {
  return (
    !this.props.isFetching ? (
     <SearchBar books = {this.props.testBooks}
     handleInput = {this.handleInput}
     handleOnChange = {this.handleOnChange}
     addAllBooks={this.props.addAllBooks}
     query={this.props.query}
     handleOnChangeInput={(e) => this.props.setQuery(e)}
     />
    ) : <Logo/>
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
  },
  setQuery : (query) => {
    dispatch(setQuery(query));
  }

}
}

const mapStateToProps = state => {
  return {
  testBooks : state.books,
  isFetching : state.isFetching,
  query : state.query
  }
}
export const Books = connect(mapStateToProps, mapDispatchToProps)(BooksApp);
