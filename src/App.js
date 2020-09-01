import React, { Component } from 'react'
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';

const API_KEY = 'AIzaSyDJ8qyeqOh_fasxk_lyIe1dxS0qMIIgLsc'
const BASE_URL = 'https://www.googleapis.com/books/v1/volumes'

export default class App extends Component {
  state = {
    books: [],
    filters: {
<<<<<<< HEAD
      search: '',
      printType: '',
      bookType: ''
    },
    expanded: '',
    apiFetch: false
=======
      search: '',
      printType: '',
      bookType: ''
    },
    expanded: '',
    apiFetch: false
>>>>>>> 7754afcd3d982fa5e48a6eab0b66147d7c8b9081
  }

  componentDidUpdate() {
    if (this.state.apiFetch === false) return
    const search = this.state.filters.search.replace(/ /g, '+');
    const printType = this.state.filters.printType;
    const bookType =
      this.state.filters.bookType === 'no filter'
        ? ''
        : '&filter=' + this.state.filters.bookType;

<<<<<<< HEAD
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
    books: data.items,
    apiFetch: false
  })
})
.catch(err => {
  this.setState({
    apiFetch: false
  })
  alert('Bad API Fetch', err.message)
});
=======
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
          books: data.items,
          apiFetch: false
        })
      })
      .catch(err => {
        this.setState({
          apiFetch: false
        })
        alert('Bad API Fetch', err.message)
      });
>>>>>>> 7754afcd3d982fa5e48a6eab0b66147d7c8b9081
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
      expanded: '',
      apiFetch: (this.state.apiFetch + 1)
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
