import React, { PureComponent } from 'react'

export default class Book extends PureComponent<any, any> {

    

    render() {
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.book.bookURl})` }}></div>
                        <div className="book-shelf-changer">
                            <select id = "select" onChange = {(event) => this.props.handleChange(event)}> 
                                <option value="move" disabled>Move to...</option>
                                <option value="0" >Currently Reading</option>
                                <option value="1">Want to Read</option>
                                <option value="2" > Read</option>
                                <option value="3" >None</option>
                            </select>
                        </div>
                    </div>
                <div className="book-title">{this.props.book.bookTitle}</div>
                <div className="book-authors">{this.props.book.bookAuthor}</div>
            </div>
        );

        
    }
}
