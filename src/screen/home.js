import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import movie_data from "../json/movie";
import FavoriteButton from "../component/FavoriteButton";
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
      <div className="mt-5">
        <div className="flex justify-between">
          <p className="text-xl font-semibold" style={{ fontSize: "25px" }}>
            Movie Day 1
          </p>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap justify-center ">
          <div className="w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
            {movieDay1.map((item) => (
              <Link class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img src={item.image_url} style={{ width: "250px" }} class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"/>
                  <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                  </div>
              </Link>
            ))}
          </div>
        </div>
      </div>


              {/* <Link
                to={`/movie-detail?id=${item.id}`}
                className="font-medium text-primary-600 hover:underline dark:text-primary-500 text-decoration-none"
                key={item.id}
              >
                <div>
                  <h3>
                    <b>{item.title}</b>
                  </h3>
                  <img src={item.image_url} style={{ width: "250px" }} />
                  <p>{item.director}</p>
                  <p>{item.cast}</p>
                  <p>{item.rating}</p>
                  <p>{item.duration}</p>
                  <p>{item.show_time}.00</p>
                  <p>{item.description}</p>
                  <button
                    className="btn"
                    onClick={() => {
                      console.log("Button clicked!");
                      addToFavorites(item);
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faHeart}
                      color={
                        favoriteItems.some((favItem) => favItem.id === item.id)
                          ? "red"
                          : "gray"
                      }
                    />
                  </button>
                </div>
              </Link> */}

      {/* <div className="mt-5">
        <p className="text-danger" style={{ fontSize: "25px" }}>
          Movie Day 2
        </p>

        <div>
          {movieDay2.map((item) => (
            <div key={item.id}>
              <Link
                to={`/movie-detail`}
                className="font-medium text-primary-600 hover:underline dark:text-primary-500 text-decoration-none"
              >
                <div>
                  <h3>
                    <b>{item.title}</b>
                  </h3>
                  <img src={item.image_url} style={{ width: "250px" }} />
                  <p>{item.director}</p>
                  <p>{item.cast}</p>
                  <p>{item.ratinge}</p>
                  <p>{item.duration}</p>
                  <p>{item.show_time}.00</p>
                  <p>{item.description}</p>
                </div>
              </Link>
              <FavoriteButton
                item={item}
                addToFavorites={addToFavorites}
                favoriteItems={favoriteItems}
              />
            </div>
          ))}
        </div>
      </div>
      <Link to="/favorite">View Favorites</Link> */}
      {/*       
      <div className="mt-5">
        <h1 className="text-danger">Movie Day 3</h1>
        {movieDay3.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <img src={item.image_url} style={{ width: "100px" }} />
            <p>{item.director}</p>
            <p>{item.cast}</p>
            <p>{item.ratinge}</p>
            <p>{item.duration}</p>
            <p>{item.show_time}.00</p>
            <p>{item.description}</p>
            <button className="btn" onClick={() => addToFavorites(item)}>
              <FontAwesomeIcon
                icon={faHeart}
                color={
                  favoriteItems.some((favItem) => favItem.id === item.id)
                    ? "red"
                    : "gray"
                }
              />
            </button>
          </div>
        ))}
      </div>



      <div className="mt-5">
        <h1 className="text-danger">Movie Day 4</h1>
        {movieDay4.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <img src={item.image_url} style={{ width: "100px" }} />
            <p>{item.director}</p>
            <p>{item.cast}</p>
            <p>{item.ratinge}</p>
            <p>{item.duration}</p>
            <p>{item.show_time}.00</p>
            <p>{item.description}</p>
            <button className="btn" onClick={() => addToFavorites(item)}>
              <FontAwesomeIcon
                icon={faHeart}
                color={
                  favoriteItems.some((favItem) => favItem.id === item.id)
                    ? "red"
                    : "gray"
                }
              />
            </button>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Home;