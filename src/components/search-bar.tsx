import { Component } from 'react';
import React from 'react';

import {Link} from 'react-router-dom';
import MainPage from './MainPage';

export default class SearchBar extends Component<any, any> {
    handleOnChange = (event:any, book:any) => {
        this.props.handleOnChange(event, book);
        this.forceUpdate();
    }
    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to = '/' onClick = {() => this.props.addAllBooks()}>Close</Link>
                    <div className="search-books-input-wrapper">                
                        <input type="text" placeholder="Search by title or author"
                        onInput = {(event) => this.props.handleInput(event)}/>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        <MainPage 
                        testBooks = {this.props.books}
                        handleOnChange = {this.handleOnChange}
                        />
                    </ol>

                </div>
          </div>
        )
    }
}

