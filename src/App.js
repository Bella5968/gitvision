import React, { useState } from 'react';  
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';  
import SearchBar from './components/SearchBar';  
import Charts from './components/Charts';  
import LandingPage from './LandingPage';  
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
    <Router>  
      <div className="App">  
        <header>  
          <h1>GitVision: Your GitHub Analytics Dashboard</h1>  
          <nav>  
            <ul>  
              <li><Link to="/">Home</Link></li>  
              <li><Link to="/dashboard">Dashboard</Link></li>  
            </ul>  
          </nav>  
        </header>  

        <Routes>  
          <Route path="/" element={<LandingPage />} /> {/* Landing Page Route */}
          <Route  
            path="/dashboard"  
            element={  
              <div>  
                <div className="search-bar-container">  
                  <SearchBar onSearch={onSearch} loading={loading} />  
                </div>  
                <div className="divider"></div>  
                {data && <Charts data={data} />} {/* Render Charts only if data exists */}
              </div>  
            }  
          />  
        </Routes>  

        <footer>  
          Built with ❤️ by Abel Mengesha  
        </footer>  
      </div>  
    </Router>  
  );  
}  

export default App;