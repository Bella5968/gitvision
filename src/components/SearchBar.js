import React, { useState } from 'react';  

function SearchBar({ onSearch, loading }) {  
  const [username, setUsername] = useState('');  

  const handleSearch = () => {  
    if (username.trim()) {  
      onSearch(username);  
    }  
  };  

  const handleKeyPress = (e) => {  
    if (e.key === 'Enter') {  
      handleSearch();  
    }  
  };  

  return (  
    <div className="search-bar">  
      <input  
        type="text"  
        placeholder="Enter GitHub username"  
        value={username}  
        onChange={(e) => setUsername(e.target.value)}  
        onKeyPress={handleKeyPress}  
      />  
      <button onClick={handleSearch} disabled={loading}>  
        {loading ? 'Searching...' : 'Search'}  
      </button>  
      <button onClick={() => onSearch('torvalds')} disabled={loading}>  
        View Demo  
      </button>  
    </div>  
  );  
}  

export default SearchBar;  