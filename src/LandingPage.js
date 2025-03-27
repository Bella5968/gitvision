import React from 'react';
import './LandingPage.css'; // Add a CSS file for styling

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="cover-image">
        <img 
          src="https://i.imgur.com/WqDguRW.png" // Replace with your actual image URL
          alt="Cover" 
        />
      </div>
      <div className="landing-content">
        <h1>GitVision</h1>
        <p>Your GitHub Analytics Dashboard</p>
        <p className="description">
          GitVision was inspired by my personal journey as a software engineer. While exploring open-source contributions
          and GitHub analytics, I realized how difficult it was to get a clear, visual representation of my coding habits,
          repository activity, and language usage. This led me to build GitVision—a tool designed to make GitHub analytics
          more accessible and insightful for developers of all levels.
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
