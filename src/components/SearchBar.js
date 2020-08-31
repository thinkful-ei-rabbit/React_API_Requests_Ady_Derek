import React from 'react'


// Print-Type Options: all, books, magazines
// Filter Options: partial, full, free-ebooks, paid-ebooks, ebooks

const SearchBar = ({ handleSearch }) => {
  return (
    <form>
      <legend>
        <div className='searchBar'>
          <p>Search:</p>
          <input type='text' placeholder='search text' />
          <button type='submit'>Search Now!</button>
        </div>
        <div className='filterBar'>
        <p>Print Type:</p>
          <select name='printType'>
            <option value='all'>All</option>
            <option value='books'>Books</option>
            <option value='magazines'>Magazines</option>
          </select>
        <p>Book Type:</p>
          <select name='bookType'>
            <option value='no filter'>No Filter</option>
            <option value='partial'>Partial</option>
            <option value='full'>Full</option>
            <option value='free-ebooks'>Free E-Books</option>
            <option value='paid-ebooks'>Paid E-Books</option>
            <option value='ebooks'>E-Books</option>
          </select>
        </div>
      </legend>
    </form>
  )
}

export default SearchBar