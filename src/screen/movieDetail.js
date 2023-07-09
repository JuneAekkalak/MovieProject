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
            
            <div className="column-contents flex-container col-3">
              <img className="image-card" src={data.image_url} alt="Movie Poster" />
            </div>
            <div className="flex-container col shadow p-3 mb-5 bg-white rounded">
              <div className="margin-left">
                <div className="margin-content ">
                  <p className="title" style={{fontSize:"50px"}}>{data.title}</p>
                </div>
                <div className="margin-content ">
                  <span className="font-size-content" style={{fontSize:"20px",fontWeight:"bolder"}}>Rating :  </span>
                  <span className="font-size-content" style={{fontSize:"20px"}}>{data.rating} </span>
                  <br/>
                  <span className="font-size-content" style={{fontSize:"20px",fontWeight:"bolder"}}>ShowTime :  </span>
                  <span className="font-size-content" style={{fontSize:"20px"}}>{data.show_time}:00 </span>
                  <br/>
                  <span className="font-size-content" style={{fontSize:"20px",fontWeight:"bolder"}}>Cast :  </span>
                  <span className="font-size-content" style={{fontSize:"20px"}}>{data.cast} </span>
                  <br/>
                  <span className="font-size-content" style={{fontSize:"20px",fontWeight:"bolder"}}>Director :  </span>
                  <span className="font-size-content" style={{fontSize:"20px"}}>{data.director} </span>
                  <br/>
                  <span className="font-size-content" style={{fontSize:"20px",fontWeight:"bolder"}}>Duration :  </span>
                  <span className="font-size-content" style={{fontSize:"20px"}}>{data.duration} </span>
                </div>
                <div className="margin-content ">
                  <p className="font-size-content" style={{fontSize:"20px"}}>{data.description}</p>
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
