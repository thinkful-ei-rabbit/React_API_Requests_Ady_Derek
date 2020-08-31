import React from 'react';
import { Component } from 'react';

// Print-Type Options: all, books, magazines
// Filter Options: partial, full, free-ebooks, paid-ebooks, ebooks

class SearchBar extends Component {
  state = {
    search: '',
    printType: '',
    bookType: ''
  }

  handleSearchUpdate(search) {
    this.setState({
      search
    })
  }
  handlePrintUpdate(event) {
    console.log(event.target.value);
    // this.setState({
    //   printType: event.target.value
    // })
  }
  handleBookUpdate(bookType) {
    this.setState({
      bookType
    })
  }

  render() {
    return (
      <form onSubmit={e => this.props.searchSubmit(e, this.state)}>
        <legend>
          <div className="searchBar">
            <p>Search:</p>
            <input type="text" placeholder="search text" onChange={e => this.handleSearchUpdate(e.target.val())}/>
            <button type="submit">Search Now!</button>
          </div>
          <div className="filterBar">
            <p>Print Type:</p>
            <select name="printType" value={this.state.printType} onChange={this.handlePrintUpdate}>
              <option value="all">All</option>
              <option value="books">Books</option>
              <option value="magazines">Magazines</option>
            </select>
            <p>Book Type:</p>
            <select name="bookType" onChange={e => this.handleBookUpdate(e.target.val())}>
              <option value="no filter">No Filter</option>
              <option value="partial">Partial</option>
              <option value="full">Full</option>
              <option value="free-ebooks">Free E-Books</option>
              <option value="paid-ebooks">Paid E-Books</option>
              <option value="ebooks">E-Books</option>
            </select>
          </div>
        </legend>
      </form>
    );
  }
}

export default SearchBar;
