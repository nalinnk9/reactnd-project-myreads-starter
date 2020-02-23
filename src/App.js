import  { connect } from 'react-redux';
import React from 'react';
import './App.css';
import {addBookToList, addAllBooks, searchBooks} from './redux/actions/actions';
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
  console.log("value of input is ", e.target.value);
  this.props.searchBooks();
} 

componentDidMount = () => {
   this.props.addAllBooks();
}
shouldComponentUpdate = (nextProps) => {
  if(this.props.testBooks.length !== nextProps.testBooks.length) {
    return true;
  }
  for(let i = 0; i < this.props.testBooks.length ; i++) {
      if(this.props.testBooks[i].shelf !== nextProps.testBooks[i].shelf) {
        console.log("books is", this.props.testBooks[i]);
        return true;
      }
  }
  return false;
}
renderMainPage = () => {
  return (
    <MainPage
    testBooks = {this.props.testBooks}
    handleOnChange = {this.handleOnChange}
    
    />
  )
}

renderSearchPage = () => {
  return (
     <SearchBar books = {this.props.testBooks}
     handleInput = {this.handleInput}/>
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
    dispatch(addBookToList(book, list));
  },
  addAllBooks: () => {
    dispatch(addAllBooks());
  },
  searchBooks: () => {
    dispatch(searchBooks());
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
