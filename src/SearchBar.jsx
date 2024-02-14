import React, { useState } from 'react';
import './SearchBar.css'; // Import CSS file
import books from './BooksData';
import Book from './Book'; // Import Book component
import BooksAvailable from './BooksAvailable'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchTerm(query);

    if (query.trim() === '') {
      setSearchResults([]);
      return;
    }

    const filteredBooks = books.filter(book =>
      book.title.toLowerCase().includes(query.toLowerCase()) ||
      book.author.toLowerCase().includes(query.toLowerCase())
    );

    // Sort search results based on relevance (you can define your own criteria)
    filteredBooks.sort((a, b) => {
      // If titles match, sort by price
      if (a.title.toLowerCase() === b.title.toLowerCase()) {
        return a.price - b.price; // Ascending order of price
        // To sort in descending order: return b.price - a.price;
      }
      // If titles don't match, sort based on relevance (you can define your own logic)
      // For example, compare ratings or relevance to search query
      // Here, I'm just returning 0 to keep the original order
      return 0;
    });

    setSearchResults(filteredBooks);
  };

  return (
    <>
    <div className="search-container"> {/* Apply class name */}
      <h1 className="title">Book Search App</h1>
      <input
        type="text"
        placeholder="Search for books..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />
      {/* Display search results */}
      <div className="search-results">
        {searchResults.map(book => (
          <Book
            key={book.id}
            image={book.imageUrl}
            name={book.title}
            author={book.author}
            rating={book.ratings}
            price={book.price}
          />
        ))}
      </div>
    </div>
    <BooksAvailable books={searchTerm === '' ? books : books} />
    </>
  );
};

export default SearchBar;
