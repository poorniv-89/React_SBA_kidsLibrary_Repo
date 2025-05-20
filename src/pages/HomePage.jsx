import SearchBar from "../components/SearchBar"
import BooksGallery from "../components/BooksGallery"
export default function HomePage(){
    return(
        <div>
       <SearchBar/>
       <h2>Popular this week</h2>
       <BooksGallery/>

        </div>
    )
}