import React from 'react'

const Book = ({ book, toggleExpand, expanded }) => {

  const title = book.volumeInfo.title
  const imageUrl = book.volumeInfo.imageLinks.thumbnail
  const author = book.volumeInfo.authors ? book.volumeInfo.authors : 'No author listed'
  const price = book.saleInfo.listPrice ? '$' + book.saleInfo.listPrice.amount : 'Free'
  const description = book.volumeInfo.description ? book.volumeInfo.description : 'No description available'

  const expandedHtml = expanded !== title
    ? ''
    : (
    <div className="expanded-info">
      <img src={imageUrl} alt="Book cover" />
      <div>
        <p>{author}</p>
        <p>{price}</p>
        <hr />
        <article>{description}</article>
      </div>
    </div>
  );

  return (
    <div className='book'>
      <h2 onClick={() => toggleExpand(title)}>{title}</h2>
      {expandedHtml}
    </div>
  )
}

export default Book
