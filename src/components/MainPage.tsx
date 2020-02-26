import React, { Component } from 'react'
import BookList from './BookList';
import {Link} from 'react-router-dom';

export default class MainPage extends Component<any, any> {
  handleOnChange = (event:any, book:any) => {
    this.props.handleOnChange(event, book);
    this.forceUpdate();
  } 
        render() {
          const non = this.props.testBooks ? 
          this.props.testBooks.filter((book:any) => book.shelf !== "currentlyReading" && book.shelf !== "read" && book.shelf !== "wantToRead"):null; 
          const booksReading = this.props.testBooks ? this.props.testBooks.filter((book:any) => book.shelf === "currentlyReading"): null;
    const booksRead = this.props.testBooks ? this.props.testBooks.filter((book:any) => book.shelf === "read"): null;
    const booksWantToRead = this.props.testBooks ? this.props.testBooks.filter((book:any) => book.shelf === "wantToRead"): null;
    return !this.props.isFetching ? (
            <div className="app">
              
                <div className="list-books">
                  <div className="list-books-title">
                    <h1>MyReads</h1>
                  </div>
                  {booksReading && (
                  <BookList 
                  title= "Currently Reading"
                  list = {booksReading}
                  handleChange = {this.handleOnChange}
                  />
                  )}
                  { booksRead && (
                  <BookList 
                  title="Want to Read"
                  list = {booksWantToRead}
                  handleChange = {this.handleOnChange}
                  />
                  )}
                  {booksWantToRead && (
                  <BookList 
                  title="Already Read"
                  list = {booksRead}
                  handleChange = {this.handleOnChange}
                  />
                  )}
                  {non && ( <BookList
                  title="none"
                  list={non}
                  handleChange = {this.handleOnChange}
                  />
                  )}
                </div>
                <div className="open-search">
            <Link to = '/search' >Add a book</Link>
          </div>
            </div>
            ):
            (
              <div>
                HEllo world
                </div>
            )
    }
}
