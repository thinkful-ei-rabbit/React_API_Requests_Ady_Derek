import React, { useState, useEffect } from 'react';
import BookmarkApp from './BookmarkApp/BookmarkApp';
import AddBookmark from './BookmarkApp/AddBookmark';

const BASE_URL = 'https://tf-ed-bookmarks-api.herokuapp.com/v3/bookmarks';
const API_KEY = '$2a$10$QcxTLR1746BBvUIluG2MKeEpB23OEI2N55r.cU0TONCct2Mnv/jD2';

const App = () => {
  useEffect(() => {
    console.log('Page Reloaded'); // this is bad!
  }, [])

  // setting state... with Hooks!
  const [bookmarks, setBookmarks] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [error, setError] = useState(null);

  // componentDidMount() Hook
  useEffect(() => {
    // prevent call when addForm is invoked/true
    if (showAddForm) return;
    console.log('Mounting . . .');

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
      }
    };

    fetch(BASE_URL, options)
      .then(res => {
        console.log('About to check for errors');
        if (!res.ok) {
          console.log("An error did occur, let's throw an error.");
          throw new Error('Something went wrong');
        }
        return res.json();
      })
      .then(data => {
        setBookmarks(data);
      })
      .catch(err => {
        setError(err.message);
      });
  }, [showAddForm]); // listens for change in this state

  const toggleAddForm = event => {
    console.log('toggling form');
    setShowAddForm(true);
  };

  const addBookmark = bookmark => {
    setBookmarks([...bookmarks, bookmark]);
    setShowAddForm(false);
  };

  const page = showAddForm ? (
    <AddBookmark showForm={toggleAddForm} handleAdd={addBookmark} />
  ) : (
    <BookmarkApp bookmarks={bookmarks} showForm={toggleAddForm} />
  );

  return <div className="App">{page}</div>;
};

export default App;
