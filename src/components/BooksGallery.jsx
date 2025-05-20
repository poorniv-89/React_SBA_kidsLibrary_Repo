import { useEffect, useState } from "react";
export default function BooksGallery() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetchBooks() {
      try {
        const randomPage = Math.floor(Math.random() * 10) + 1; 
        const API = `https://openlibrary.org/search.json?subject=children+stories&limit=10&page=${randomPage}`;
        const res = await fetch(API);
        const data = await res.json();
     
        setBooks(data.docs);
        console.log(data.docs);
      } catch (error) {
        console.error("Failed to fetch books:", error);
      }
    }

    fetchBooks();
  }, []);

  return (
    <div className="gallery">
      {books.map((book, index) => (
        <div className="book" key={index}>
          {book.cover_i ? (
            <img
              src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
              alt={book.title}
            />
          ) : (
            <div>No Image</div>
          )}
          <h3>{book.title}</h3>
          <p><strong>Author:</strong> {book.author_name}</p>
        </div>
      ))}
    </div>
  );
}









