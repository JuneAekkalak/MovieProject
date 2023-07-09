import React, { useState, useEffect } from "react";
// import FavoritesCard from "../component/FavoritesCard";

const Favorites = () => {
  const [favoriteItems, setFavoriteItems] = useState([]);

  useEffect(() => {
    const storedItems = localStorage.getItem("favoriteItems");
    if (storedItems) {
      setFavoriteItems(JSON.parse(storedItems));
    }
  }, []);

  const removeFromFavorites = (itemId) => {
    setFavoriteItems((prevItems) =>
      prevItems.filter((item) => item.id !== itemId)
    );

    // Update localStorage
    const updatedItems = favoriteItems.filter((item) => item.id !== itemId);
    localStorage.setItem("favoriteItems", JSON.stringify(updatedItems));
  };

  return (
    <div className="mt-5 container">
      <div
        className="shadow p-3 mb-5 bg-white rounded"
        style={{ width: "500px" }}
      >
        <p style={{ fontSize: "25px" }}>Favorites List</p>
      </div>
      <div className="flex flex-wrap">
        {favoriteItems.length > 0 ? (
          favoriteItems.map((item) => (
            <div key={item.id} className="w-1/2 p-4">
              <div className="flex items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img
                  className="object-cover w-1/2 rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                  src={item.image_url}
                  alt=""
                />
                <div className="flex flex-col justify-between p-4 leading-normal w-1/2">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {item.title}
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {item.director}
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {item.rating}
                  </p>

                  <button
                    className="btn btn-danger absolute top-4 right-4"
                    onClick={() => removeFromFavorites(item.id)}
                  >
                    Remove from Favorites
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="mt-5">
            <p>No favorite items found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
