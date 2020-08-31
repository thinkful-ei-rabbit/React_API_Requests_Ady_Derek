import React, { Component } from 'react'
import Book from './Book';

export default class BookList extends Component {
  state = {

  }

  render() {
    return (
      <div>
        {this.props.books.map((book, index) =>
          <Book
            key={index}
            book={book}
          />
        )}
      </div>
    )
  }
}
