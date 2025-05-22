// Search bar component to enter book search queries
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function SearchBar(){
    const[searchState, setSearchState]=useState('');
    const nav = useNavigate();

// Update searchState as user types
    function handleChange(e)
    {
        setSearchState(e.target.value);
        // console.log(searchState);
    }

 // Navigate to Books page with query when search button is clicked
    async function handleClick()
    {
        if (!searchState) return;
        nav(`/books?query=${searchState}`)
    
}
    return(
        <div className="searchBar">
        <input type="text" onChange={handleChange} placeholder="Find your next adventure..."/>
        <button onClick={handleClick}>search</button>  
        </div>
    )
}