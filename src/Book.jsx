import React from 'react';
import './Book.css';

const Book = ({ image, name, author, rating, price }) => {
  return (
    <div className="book">
      <img src={image} alt={name} className="book-image" />
      <div className="book-details">
        <h3 className="book-name">{name}</h3>
        <p className="book-author">by {author}</p>
        <p className="book-rating">Rating: {rating}</p>
        <p className="book-price">Price: ${price}</p>
      </div>
    </div>
  );
};

export default Book;
