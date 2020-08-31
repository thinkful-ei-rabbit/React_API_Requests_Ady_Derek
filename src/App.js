import React, { Component } from 'react'
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';

const API_KEY = 'AIzaSyDJ8qyeqOh_fasxk_lyIe1dxS0qMIIgLsc'
const BASE_URL = 'https://www.googleapis.com/books/v1/volumes'

export default class App extends Component {
  state = {
    books: [],
    filters: {
      search: 'search terms',
      printType: 'all',
      bookType: 'No Filter'
    },
    expanded: ''
  }

  componentDidMount() {
    const search = this.state.filters.search.replace(/ /g, '+');
    const printType = this.state.filters.printType;
    const bookType =
      this.state.filters.bookType === 'No Filter'
        ? ''
        : '&filter=' + this.state.filters.bookType;

    fetch(`${BASE_URL}?q=${search}&printType=${printType}${bookType}&key=${API_KEY}`)
      .then(res => {
        if (!res.ok) {
          console.log('BOOM!');
          throw new Error('API failed')
        }
        return res.json()
      })
      .then(data => {
        // console.log(data.items);
        this.setState({
          books: data.items
        })
      })
      .catch(err => {
        alert('Bad API Fetch', err.message)
      });
  }

  handleSearch = (e, formData) => {
    e.preventDefault();
    console.log('Submit');
    console.log(formData);
    const search = formData.search
    const printType = formData.printType
    const bookType = formData.bookType

    this.setState({
      filters: {
        search,
        printType,
        bookType
      },
    })
  }

  toggleExpandedView = (book) => {
    this.state.expanded === book
      ? this.setState({ expanded: '' })
      : this.setState({ expanded: book })
  }

  render() {
    return (
      <main className="main-app">
        <header>
          <h1>Google Book Search</h1>
          </header>
        <SearchBar searchSubmit={this.handleSearch}/>
        <BookList
          books={this.state.books}
          toggleExpand={this.toggleExpandedView.bind(this)}
          expanded={this.state.expanded}
        />
      </main>
    )
  }
}
