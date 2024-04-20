import React, { useState, useEffect } from "react";
import logo from "../images/company-logo-transparent-png-19.png";
import axios from "axios";
import Card from "./Card";

function StoryList() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    axios
      .get("https://child.onrender.com/api/sciencefiction")
      .then((response) => {
        setStories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching stories:", error);
      });
  }, []);

  console.log(stories);

  return (
    <div className="story-page">
      <nav class="navbar">
        <div class="navbar-container">
          <div class="logo">
            <img src={logo} alt="Logo" />
            <span class="title">BrainLingo</span>
          </div>
          <ul class="menu">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Leaderboard</a>
            </li>
            <li>
              <a href="#">Daily Quit</a>
            </li>
            <li>
              <a href="#">Game</a>
            </li>
          </ul>
          <div class="logout">
            <button>Sign Out</button>
          </div>
        </div>
      </nav>

      <div className="center-title">
        <h1>Science Fiction Stories</h1>
      </div>
      <div className="btn-main">
        <button class="btn">New</button>

        <button class="btn">In Progress</button>

        <button class="btn">Completed</button>

        <button class="btn">Clear All</button>
      </div>
      <div className="story-list">
        {stories.map((story) =>
          story?.Image?.length == 1 ? <Card key={story.id} data={story} /> : null
        )}
      </div>
    </div>
  );
}

export default StoryList;
