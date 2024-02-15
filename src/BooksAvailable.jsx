import React from 'react';
import Book from './Book';
import './BooksAvailable.css'; // Import CSS file

function BooksAvailable({ books }) {
  return (
    <>
      <h2 style={{textAlign:"center", "margin-top":"50px"}}>Books Available</h2>
       <div className='booklist'>
        {books.map((book) => (
          <Book key={book.id}
          image={book.imageUrl}
          name={book.title}
          author={book.author}
          rating={book.ratings}
          price={book.price}/>
        ))}
        </div>
    </>
  );
}

export default BooksAvailable;