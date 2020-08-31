import React from 'react'

const Fab = ({ showForm }) => {
  return (
    <button className="fab" onClick={e => showForm(e)}>
      Add Bookmark &#43;
    </button>
  );
}

export default Fab
