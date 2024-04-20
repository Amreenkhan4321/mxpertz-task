import React from "react";
import { Link } from "react-router-dom";

function Card({ data }) {
  return (
    
    <div className="card">
      {/* Displaying image and title */}
      <img
        className="card-image"
        src={`https://ik.imagekit.io/dev24/${data?.Image}`}
        alt={data?.Title}
      />
      <p className="card-title">{data?.Title}</p>
      {/* <Link className="read-more-button" to={{ pathname: `/story`, state: { storyData: data } }}>{data?.Status}</Link> */}
      <Link className="read-more-button" to={`/story/${data?._id}`}>
        {data?.Status}
      </Link>
    </div>
  );
}

export default Card;
