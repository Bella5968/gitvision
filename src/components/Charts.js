import React from 'react';  
import { Pie } from 'react-chartjs-2';  
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';  

ChartJS.register(ArcElement, Tooltip, Legend);  

// Add the style tag here
const styles = `
  .charts {  
    display: flex;  
    justify-content: space-around;  
    padding: 20px;  
    background-color: #161b22; /* Dark gray background */  
    min-height: 400px; /* Ensure enough space for charts */  
  }
`;

function Charts({ data }) {  
  if (!data) return null;  

  // Calculate language stats  
  const languages = data.repos.reduce((acc, repo) => {  
    if (repo.language) {  
      acc[repo.language] = (acc[repo.language] || 0) + 1;  
    }  
    return acc;  
  }, {});  

  const totalRepos = data.repos.length;  
  const chartData = {  
    labels: Object.keys(languages),  
    datasets: [  
      {  
        data: Object.values(languages),  
        backgroundColor: [  
          '#FF6384',  
          '#36A2EB',  
          '#FFCE56',  
          '#4BC0C0',  
          '#9966FF',  
        ],  
      },  
    ],  
  };  

  const options = {  
    plugins: {  
      tooltip: {  
        callbacks: {  
          label: (context) => {  
            const value = context.raw;  
            const percentage = ((value / totalRepos) * 100).toFixed(2);  
            return `${context.label}: ${percentage}%`;  
          },  
        },  
      },  
    },  
  };  

  // Get top 3 repos by stars  
  const topRepos = data.repos  
    .sort((a, b) => b.stargazers_count - a.stargazers_count)  
    .slice(0, 3);  

  return (  
    <div className="charts">  
      <style>{styles}</style>
      <div className="pie-chart">  
        <h3>Language Breakdown</h3>  
        <Pie data={chartData} options={options} />  
      </div>  
      <div className="repo-list">  
        <h3>Top Repositories</h3>  
        <ul>  
          {topRepos.map((repo) => (  
            <li key={repo.id}>  
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">  
                {repo.name} (⭐️ {repo.stargazers_count})  
              </a>  
            </li>  
          ))}  
        </ul>  
      </div>  
    </div>  
  );  
}  

export default Charts;