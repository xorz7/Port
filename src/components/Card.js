import React from 'react';
import './Card.css';

function Card({ content }) {
  return (
    <div className="card">
      <p>{content}</p>
    </div>
  );
}

export default Card;
