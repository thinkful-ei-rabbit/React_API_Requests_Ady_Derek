import React, { Component } from 'react'
import Book from './Book';

export default class BookList extends Component {


  render() {
    console.log('BookList');
    console.log(this.props.books);

    return (
      <section>
        {this.props.books.map((book, index) =>
          <Book
            key={index}
            book={book}
            toggleExpand={this.props.toggleExpand}
            expanded={this.props.expanded}
          />
        )}
      </section>
    );
  }
}
