import { Component } from 'react';
import React from 'react';

import {Link} from 'react-router-dom';
import MainPage from './MainPage';

export default class SearchBar extends Component<any, any> {

    handleOnChange = (e:any) => {
        this.props.handleOnChangeInput(e.target.value);
    }
    handleInput = (e: any) => {
        this.props.handleInput(e);
    }
    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to = '/' onClick = {() => this.props.addAllBooks()}>Close</Link>
                    <div className="search-books-input-wrapper">                
                        <input type="text" placeholder="Search by title or author"
                        onKeyPress = {(event) => this.handleInput(event)}
                        onChange = {(e) => this.handleOnChange(e)}
                        value = {this.props.query}/>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        <MainPage 
                        testBooks = {this.props.books}
                        handleOnChange = {this.props.handleOnChange}
                        />
                    </ol>

                </div>
          </div>
        )
    }
}

