import React from 'react';
import Book from './Book';
import './BooksAvailable.css'; // Import CSS file

function BooksAvailable({ books }) {
  return (
    <div className="books-available"> {/* Apply class name */}
      <h2>Books Available</h2>
      <div className="book-list"> {/* Apply class name */}
        {books.map((book) => (
          <div className="book"> {/* Apply class name */}
            <img src={book.imageUrl} alt={book.title} />
            <div className="book-details"> {/* Apply class name */}
              <h3 className="book-title">{book.title}</h3> {/* Apply class name */}
              <p className="book-author">by {book.author}</p> {/* Apply class name */}
              <p className="book-rating">Rating: {book.ratings}</p> {/* Apply class name */}
              <p className="book-price">Price: ${book.price}</p> {/* Apply class name */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BooksAvailable;