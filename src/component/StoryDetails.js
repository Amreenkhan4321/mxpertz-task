import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import logo from "../images/company-logo-transparent-png-19.png";
import axios from "axios";
const StoryDetails = () => {
  const { id } = useParams();
  const [story, setStory] = useState(null);
  const [storyDetails, setStoryDetails] = useState(null);
  console.log("id======>>>>>", story?.Storyadvenure?.content);

  useEffect(() => {
    const fetchStoryData = async () => {
      if (id) {
        try {
          const response = await axios.get(
            `https://child.onrender.com/api/sciencefiction/${id}`
          );
          const data = response.data;
          setStory(data);
        } catch (error) {
          console.error("Error fetching story:", error);
        }
      } else {
        console.log("No story id provided.");
      }
    };
    fetchStoryData();
    axios
      .get("https://child.onrender.com/api/sciencefiction")
      .then((response) => {
        setStoryDetails(response.data);
      })
      .catch((error) => {
        console.error("Error fetching stories:", error);
      });
  }, [id]);

  return (
    <>
      <div className="story-details">
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
          <h1>The Lost City of Future Earth</h1>
        </div>
        <div className="btn-main">
          <button class="btn">Word Explorer</button>

          <button class="btn">Story Adventure</button>

          <button class="btn">Brain Quest</button>
        </div>
        <div className="story-details-head-title">
          <h1>
            Drag Pictures to the matching Words, light up correct pairs, shake
            for a retry
          </h1>
        </div>
        <div className="story-details-card">
          <div className="card1 border-card">
            <p className="card-title">{story?.Title}</p>
            <img
              className="card-image"
              src={`https://ik.imagekit.io/dev24/${story?.Image}`}
              alt={story?.title}
            />
          </div>
          <div className="story-card2">
            {storyDetails?.map((data) => (
              <>
                {data?.Image?.length == 1 ? (
                  <div key={data?.id} className="card2">
                    {console.log(data, "hdweudheu")}
                    <img
                      className="card-image"
                      src={`https://ik.imagekit.io/dev24/${data?.Image}`}
                      alt="image"
                    />
                    <p className="card-title">
                      As Alex and Sparky venture deeper into the Lost City, they
                      come across something truly amazing. The city is full of
                    </p>
                  </div>
                ) : null}
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default StoryDetails;
