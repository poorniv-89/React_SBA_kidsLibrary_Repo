import { useState } from "react";
export default function SearchBar(){
    const[searchState, setSearchState]=useState('');

    function handleChange(e)
    {
        setSearchState(e.target.value);
        // console.log(searchState);
    }

    async function handleClick()
    {

        if (!searchState.trim()) return;
        const API = 'https://openlibrary.org/search.json?subject=children+stories&title='
        const res = await fetch(`${API}${searchState}`);
        const data = await res.json();
        console.log(data);
    
}
        

    return(
        <div className="searchBar">
        <input type="text" onChange={handleChange} placeholder="Find your next adventure..."/>
        <button onClick={handleClick}>search</button>  
        </div>
    )
}