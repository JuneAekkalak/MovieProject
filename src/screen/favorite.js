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
    <div className="mt-5 container mb-5">
      <div
        className="shadow p-3 mb-5 bg-white rounded"
        style={{ width: "500px" }}
      >
        <p style={{ fontSize: "25px" }}>Favorites List</p>
      </div>
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        {favoriteItems.length > 0 ? (
          <div className="container-fluid">
            <div className="row">
              {favoriteItems.map((item) => (
                <div className="col-6 mt-3" key={item.id}>
                  <div className="card">
                    <div className="card-horizontal">
                      <div className="img-square-wrapper">
                        <img
                          className=""
                          src={item.URL}
                          alt="Card image cap"
                          style={{ width: "150px" }}
                        />
                      </div>
                      <div className="card-body">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          {item.name}
                        </h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                          {item.price}
                        </p>
                      </div>
                    </div>
                    <div
                      className="card-footer"
                      style={{ position: "absolute", top: "4px", right: "4px" }}
                    >
                      <button
                        className="btn btn-danger"
                        onClick={() => removeFromFavorites(item.id)}
                      >
                        Remove from Favorites
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
