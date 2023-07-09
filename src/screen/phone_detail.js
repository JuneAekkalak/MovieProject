import React from "react";
import { useState, useEffect } from "react";
import "../style/style.css";
import { useLocation } from "react-router-dom";
import phone_data from "../json/phone_data";

const MovieDetail = () => {
  const [data, setItems] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");

  useEffect(() => {
    const item = phone_data.find((item) => item.id === parseInt(id));
    setItems(item);
  }, []);

  return (
    <div className="container mt-5">
      <div className="container">
        <div className="margin">
          <div className="row ">
            
            <div className="column-contents flex-container col-3">
              <img className="image-card" src={data.URL} alt="Movie Poster" />
            </div>
            <div className="flex-container col shadow p-3 mb-5 bg-white rounded">
              <div className="margin-left">
                <div className="margin-content ">
                  <p className="title" style={{fontSize:"50px"}}>{data.name}</p>
                </div>
                <div className="margin-content ">
                  <span className="font-size-content" style={{fontSize:"20px",fontWeight:"bolder"}}>Price :  </span>
                  <span className="font-size-content" style={{fontSize:"20px"}}>{data.price} </span>
                  <br/>
                 
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
