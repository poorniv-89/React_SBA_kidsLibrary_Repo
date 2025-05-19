import { useState } from "react";
// const API=
export default function SearchBar(){
    const[searchState, setSearchState]=useState('');

    function handleChange(e)
    {
        setSearchState(e.target.value);
    }

    async function handleClick()
    {
        if (!searchState.trim()) return;
        const query=searchState;
    }

    return(
        <div className="searchBar">
        <input type="text" onChange={handleChange} placeholder="Find your next adventure..."/>
        <button onClick={handleClick}>search</button>  
        </div>
    )
}