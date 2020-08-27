import React from 'react';
import './Styles/Card.css';


export default function Card(props) {
  return (
    <div className='Card'>
      <button
        type='button'
        onClick={() => props.handleDelete(props.cardId)}
      >
        delete
      </button>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  )
}