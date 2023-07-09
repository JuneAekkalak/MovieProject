
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import phone_data from "../json/phone_data";
import "../style/style.css";
import SlideShow from "../component/slide";
import BannerShow from "../component/banner";

const Home= () => {
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [clickedItems, setClickedItems] = useState({});

  const [data, setData] = useState([]);


  useEffect(() => {
    console.log("data = ",phone_data)
    setData(phone_data);

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
      <SlideShow />
      <div className="flex justify-between">
        <p className="text-xl font-semibold py-3" style={{ fontSize: "25px" }}>
          To Day
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        {data.map((item) => (
          <div key={item.id} className="px-2 py-1">
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
            <Link to={`/phone-detail?id=${item.id}`}
              className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <img
                src={item.URL}
                alt={item.name}
                style={{ width: "250px" }}
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
              />
              <div className="flex flex-col justify-between p-4 leading-normal ">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Phone Name : {item.name}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Price: {item.price}
                </p>
             
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="mt-5 mb-5">
        <BannerShow />
      </div>
    </div >
  );
};

export default Home;