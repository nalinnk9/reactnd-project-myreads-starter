import  { connect } from 'react-redux';
import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css';
import BookList from './components/BookList';

import {addBookToList, deleteBookFromList, addAllBooks} from './redux/actions/actions';

class BooksApp extends React.Component {

removeFromOldList = (list, nList, book) => {
  this.props.deleteBook(list, book);
  this.props.addBook(nList, book);

}
getIndex = (list) => {
  switch(list) {
    case '0' :
      return 0;
    case '1' :
      return 1;
    case '2' : 
    return 2;
    case '3' : 
    return 3;
    default :
    return 0;
  }
}
handleOnChange = (event, book) => {
    const currList = book.list;
    const newList = event.target.value;
    this.removeFromOldList(currList, this.getIndex(newList), book);
}

  render() {
    return (
      <div className="app">
        
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <BookList 
            title= "Currently Reading"
            list = {this.props.testBooks[0]}
            handleChange = {this.handleOnChange}
            />
            <BookList 
            title="Want to Read"
            list = {this.props.testBooks[1]}
            handleChange = {this.handleOnChange}
            />
            <BookList 
            title="Already Read"
            list = {this.props.testBooks[2]}
            handleChange = {this.handleOnChange}
            />
          </div>
          <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
  addBook : (book, list) => {
    dispatch(addBookToList(book, list));
  },
  deleteBook : (book, list) => {
    dispatch(deleteBookFromList(book, list))
  },
  addAllBooks: () => {
    dispatch(addAllBooks());
  }
}
}

const mapStateToProps = state => {
  return {
  testBooks : state
  }
}
export const Books = connect(mapStateToProps, mapDispatchToProps)(BooksApp);
