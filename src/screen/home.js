import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import movie_data from "../json/movie";
import FavoriteButton from "../component/FavoriteButton";
import "../style/style.css";
import SlideShow from "../component/slide";

const Home = () => {
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [clickedItems, setClickedItems] = useState({});

  const [movieDay1, setMovieDay1] = useState([]);
  const [movieDay2, setMovieDay2] = useState([]);
  const [movieDay3, setMovieDay3] = useState([]);
  const [movieDay4, setMovieDay4] = useState([]);

  useEffect(() => {
    setMovieDay1(movie_data.slice(0, 15));
    setMovieDay2(movie_data.slice(15, 30));
    setMovieDay3(movie_data.slice(30, 45));
    setMovieDay4(movie_data.slice(45, 62));

    console.log("1", movieDay1);
    console.log("2", movieDay2);
    console.log("3", movieDay3);
    console.log("4", movieDay4);
  }, []);

  useEffect(() => {
    const storedItems = localStorage.getItem("favoriteItems");
    if (storedItems) {
      setFavoriteItems(JSON.parse(storedItems));
      console.log("storedItems  = ", storedItems);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favoriteItems", JSON.stringify(favoriteItems));
  }, [favoriteItems]);

  const removeFromFavorites = (itemId) => {
    setFavoriteItems((prevItems) =>
      prevItems.filter((item) => item.id !== itemId)
    );
  };

  const addToFavorites = (item) => {
    if (!favoriteItems.find((favItem) => favItem.id === item.id)) {
      setFavoriteItems((prevItems) => [...prevItems, item]);
    } else {
      removeFromFavorites(item.id);
    }
    setClickedItems((prevState) => ({
      ...prevState,
      [item.id]: !prevState[item.id],
    }));
  };

  return (
    <div className="container">
      <SlideShow/>
      <div className="flex justify-between">
        <p className="text-xl font-semibold" style={{ fontSize: "25px" }}>
          Movie Day 1
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        {movieDay1.map((item) => (
          <div key={item.id} className="px-2 py-1">
            <Link
              className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <img
                src={item.image_url}
                alt={item.title}
                style={{ width: "250px" }}
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
              />
              <div className="flex flex-col justify-between p-4 leading-normal ">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.title}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div >
  );
};

export default Home;