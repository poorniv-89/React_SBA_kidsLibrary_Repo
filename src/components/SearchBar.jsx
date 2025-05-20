import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function SearchBar(){
    const[searchState, setSearchState]=useState('');
    const nav = useNavigate();


    function handleChange(e)
    {
        setSearchState(e.target.value);
        // console.log(searchState);
    }

    async function handleClick()
    {

        if (!searchState) return;
        nav(`/books?query=${searchState}`)

        // const API = 'https://openlibrary.org/search.json?subject=children+stories&title='
        // const res = await fetch(`${API}${searchState}`);
        // const data = await res.json();
        // setSearchResults(data.docs);
    
}
        

    return(
        <div className="searchBar">
        <input type="text" onChange={handleChange} placeholder="Find your next adventure..."/>
        <button onClick={handleClick}>search</button>  
        </div>
    )
}