import React, { PureComponent } from 'react'

export default class Book extends PureComponent<any, any> {

    

    render() {
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.book.imageLinks.thumbnail})` }}></div>
                        <div className="book-shelf-changer">
                            <select id = "select" onChange = {(event) => this.props.handleChange(event)} defaultValue = {this.props.book.shelf}> 
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read" > Read</option>
                                <option value="none" >None</option>
                            </select>
                        </div>
                    </div>
                <div className="book-title">{this.props.book.bookTitle}</div>
                <div className="book-authors">{this.props.book.bookAuthor}</div>
            </div>
        );

        
    }
}
