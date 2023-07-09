import React from "react";
import { useState, useEffect } from "react";
import "../style/style.css";
import { useLocation } from "react-router-dom";
import movie_data from "../json/movie";

const MovieDetail = () => {
  const [data, setItems] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");

  useEffect(() => {
    const item = movie_data.find((item) => item.id === parseInt(id));
    setItems(item);
  }, []);

  return (
    <div className="container mt-5">
      <div className="container">
        <div className="margin">
          <div className="row ">
            <div className="column-contents flex-container">
              <img className="image-card" src={data.image_url} alt="Movie Poster" />
            </div>
            <div className="flex-container">
              <div className="margin-left">
                <div className="margin-content ">
                  <p className="title">{data.title}</p>
                </div>
                <div className="margin-content ">
                  <span className="font-size-content">{data.rating} </span>

                  <span style={{ marginLeft: "20px" }}>
                    <img
                      className="icon-image"
                      src="https://img.icons8.com/android/48/calendar.png"
                      alt="calendar"
                    />
                  </span>
                  <span className="font-size-content">{data.show_time}:00 </span>

                  <span style={{ marginLeft: "20px" }}>
                    <img
                      className="icon-image"
                      src="https://img.icons8.com/material-outlined/24/clock--v1.png"
                      alt="clock"
                    />
                  </span>

                  <span className="font-size-content">{data.duration} </span>
                </div>
                <div className="margin-content ">
                  <p className="font-size-content">{data.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
