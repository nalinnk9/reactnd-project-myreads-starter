import React, { Component } from 'react'
import Book from './book';

export default class BookList extends Component{
    
    render() {
        const bookList = this.props.list.map((book, i) =>           
            <li key = {`${book.url}`+i}>
                <Book
                key= {`${book.url}`+i}
                handleChange = {(event) => this.props.handleChange(event, book)}
                book= {book}
                />
            </li>
        );
        return (
            
            <div className="list-books-content">
                <div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">{this.props.title}</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {
                                    bookList
                                }
                            </ol>
                        </div>
                    </div>
                </div>
          </div>
        )
    }
}
  