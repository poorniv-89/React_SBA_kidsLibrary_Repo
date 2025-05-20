import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom"
export default function BooksPage() {
    const [searchParams] = useSearchParams();
    const [searchResults, setSearchResults]=useState(null);
    const query = searchParams.get('query');

    useEffect(() => {
        async function getBooks() {
            const API = 'https://openlibrary.org/search.json?subject=children+stories&title='
            const res = await fetch(`${API}${query}`);
            const data = await res.json();
            console.log(data);
        }
        getBooks();
    }, [query])


    return (
        <h2>Search Resuts for {query}... </h2>
    )
}