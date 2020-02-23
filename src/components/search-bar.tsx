import { Component } from 'react';
import React from 'react';

import {Link} from 'react-router-dom';
import MainPage from './MainPage';

export default class SearchBar extends Component<any, any> {
    
    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to = '/'>Close</Link>
                    <div className="search-books-input-wrapper">                
                        <input type="text" placeholder="Search by title or author"
                        onInput = {(event) => this.props.handleInput(event)}/>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid"></ol>
                </div>
          </div>
        )
    }
}

