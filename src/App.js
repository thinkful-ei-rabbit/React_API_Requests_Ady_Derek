import React, { Component } from 'react'
import SearchBar from './component/SearchBar';
import BookList from './component/BookList';

const API_KEY = 'AIzaSyDJ8qyeqOh_fasxk_lyIe1dxS0qMIIgLsc'
const BASE_URL = 'https://www.googleapis.com/books/v1/volumes'

export default class App extends Component {
  state = {
    books: [],
    filters: {
      search: 'search terms',
      printType: 'all',
      bookType: 'No Filter'
    }
  }

  componentDidMount() {
    const search = this.state.filters.search.replace(/ /g, '+');
    const printType = this.state.filters.printType;
    const bookType =
      this.state.filters.bookType === 'No Filter'
        ? ''
        : '&filter=' + this.state.filters.bookType;

    fetch(`${BASE_URL}?q=${search}
      &printType=${printType}${bookType}
      &key=${API_KEY}`)
      .then(res => {})
      .then(data => {})
      .catch(err => {});
  }

  handleSearch(formData) {
    const search = // formData logic
    const printType = // formData logic
    const bookType = // formData logic

    this.setState({

    })
  }

  render() {
    return (
      <main className="main-app">
        <SearchBar searchSubmit={this.handleSearch}/>
        <BookList books={this.state.books}/>
      </main>
    )
  }
}
