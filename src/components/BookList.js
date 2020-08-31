import React, { Component } from 'react'
import Book from './Book';

export default class BookList extends Component {
  state = {
    expanded: ''
  }

toggleExpandedView(book) {
this.setState({expanded: book});
}

  render() {
    return (
      <section>
        {this.props.books.map((book, index) =>
          <Book
            key={index}
            book={book}
            toggleExpand={this.toggleExpandedView}
            expanded={this.state.expanded}
          />
        )}
      </section>
    )
  }
}
