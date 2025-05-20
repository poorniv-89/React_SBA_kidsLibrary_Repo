import { useSearchParams } from "react-router-dom"
export default function BooksPage(){
    const [searchParams] = useSearchParams();
    const query = searchParams.get('query');
    return(
        <h3>Search Resuts for {query}... </h3>
    )
}