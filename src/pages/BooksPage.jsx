import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function BooksPage() {
    
    // Get query parameter from the URL search params
    const [searchParams] = useSearchParams();
    const [searchResults, setSearchResults] = useState([]);
    const query = searchParams.get('query');

    // Fetch books from Open Library API whenever 'query' changes
    useEffect(() => {
        async function getBooks() {
            const API = 'https://openlibrary.org/search.json?subject=children+stories&title=';
            const res = await fetch(`${API}${query}`);
            const data = await res.json();
            setSearchResults(data.docs);  
        }
        getBooks();
    }, [query]);

    // To be rendered when books are loaded
    let loaded = () => (
        <div className="gallery">
            {searchResults.map((book, index) => (
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

     // To be rendered when books are loading
    let loading = () => <h4>Books loading...</h4>;

    // To be rendered when no books are found
    let noResults = () => <h4>No books found for "{query}".</h4>;

    // Render the page content based on the current state of search results
    return (
      <>
        <h2>Search Results for {query}...</h2>
        {searchResults === null ? loading() : 
         searchResults.length === 0 ? noResults() : loaded()}
      </>
    );
}