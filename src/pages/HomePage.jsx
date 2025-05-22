// HomePage: This is the Main landing page of the app.
// Displays the SearchBar component for users to search books.
// Shows a heading for popular books of the week.
// Renders the BooksGallery component to showcase a collection of popular books.

import SearchBar from "../components/SearchBar"
import BooksGallery from "../components/BooksGallery"
export default function HomePage() {
    return (
        <div>
            <SearchBar />
            <h2>Popular this week</h2>
            <BooksGallery />
        </div>
    )
}