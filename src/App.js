import React, { useState } from 'react';  
import SearchBar from './components/SearchBar';  
import Charts from './components/Charts';  
import './App.css';  
import axios from 'axios';  

function App() {  
  const [data, setData] = useState(null);  
  const [loading, setLoading] = useState(false);  

  const onSearch = async (username) => {  
    setLoading(true);  
    try {  
      const repos = await axios.get(`https://api.github.com/users/${username}/repos`);  
      const profile = await axios.get(`https://api.github.com/users/${username}`);  
      setData({ repos: repos.data, profile: profile.data });  
    } catch (error) {  
      console.error('Error fetching data:', error);  
    } finally {  
      setLoading(false);  
    }  
  };  

  return (  
    <div className="App">  
      <header>  
        <h1>GitVision: Your GitHub Analytics Dashboard</h1>  
        <p>Enter your GitHub account to visualize your coding journey and profile insights.</p>  
      </header>  
      <div className="search-bar-container">  
        <SearchBar onSearch={onSearch} loading={loading} />  
      </div>  
      <div className="divider"></div>  
      <Charts data={data} />  
      <footer>  
        Built with ❤️ by Abel  
      </footer>  
    </div>  
  );  
}  

export default App;  