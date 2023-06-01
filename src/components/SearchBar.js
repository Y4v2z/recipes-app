import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
    const [keyword, setKeyword] = useState("");
    const navigate = useNavigate();
    const searchInput = useRef(null);
    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/search?q=${keyword}`)
        searchInput.current.value = "";
    }
    return (
        <form onSubmit={handleSubmit} >
            <input type="search" ref={searchInput} className='form-control' placeholder='Search...' onChange={(e) => setKeyword(e.target.value)} />
        </form>
    )
}
export default SearchBar