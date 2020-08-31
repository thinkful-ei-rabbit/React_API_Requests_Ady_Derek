import React from 'react'
import Fab from './Fab';
import BookmarksList from './BookmarksList';

const BookmarkApp = ({ bookmarks, showForm }) => {

  return (
    <div>
      <Fab showForm={showForm} />
    </div>
  )
}

export default BookmarkApp
