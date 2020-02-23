import React, { Component } from 'react'
import BookList from './BookList';
import {Link} from 'react-router-dom';

export default class MainPage extends Component<any, any> {
        render() {
            const booksReading = this.props.testBooks ? this.props.testBooks.filter((book:any) => book.shelf === "currentlyReading"): [];
    const booksRead = this.props.testBooks ? this.props.testBooks.filter((book:any) => book.shelf === "read"): [];
    const booksWantToRead = this.props.testBooks ? this.props.testBooks.filter((book:any) => book.shelf === "wantToRead"): [];
        return !this.props.isFetching ? (
            <div className="app">
              
                <div className="list-books">
                  <div className="list-books-title">
                    <h1>MyReads</h1>
                  </div>
                  <BookList 
                  title= "Currently Reading"
                  list = {booksReading}
                  handleChange = {this.props.handleOnChange}
                  />
                  <BookList 
                  title="Want to Read"
                  list = {booksWantToRead}
                  handleChange = {this.props.handleOnChange}
                  />
                  <BookList 
                  title="Already Read"
                  list = {booksRead}
                  handleChange = {this.props.handleOnChange}
                  />
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
