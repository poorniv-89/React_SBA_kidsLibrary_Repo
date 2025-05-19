import { useState } from "react";
const API= 'https://www.googleapis.com/books/v1/volumes?q=subject:children+intitle:'
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
        const res = await fetch(`${API}${searchState}`);
        const data = await res.json();
      
    if (data.items && data.items.length > 0) {
        data.items.forEach(item => {
            const { title, subtitle } = item.volumeInfo;
            console.log("Title:", title);
            if (subtitle) {
                console.log("Subtitle:", subtitle);
            }
        });
    } else {
        console.log("No results found.");
    }
}
        

    return(
        <div className="searchBar">
        <input type="text" onChange={handleChange} placeholder="Find your next adventure..."/>
        <button onClick={handleClick}>search</button>  
        </div>
    )
}