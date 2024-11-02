import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUrl } from "../../utils/constants";
import Shimmer from "../Shimmer";
import PromotedHOC from "./PromotedHOC";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [url, setUrl] = useState(getUrl.cdg);

  useEffect(() => {
    setRestaurants([]);
    setFilteredRes([]);
    getRestauants();
  }, [url]);

  const getRestauants = async () => {
    const response = await fetch(url);
    const data = await response.json();

    const restaurants = data.data.cards
      .flatMap(
        (item) => item.card.card.gridElements?.infoWithStyle?.restaurants || []
      )
      .map((res) => res.info);

    //console.log(restaurants);

    setRestaurants(restaurants);
    setFilteredRes(restaurants);
  };

  const HOC = PromotedHOC(RestaurantCard);

  return (
    <>
      {restaurants.length ? (
        <div className="p-4">
          <div className="mb-5  ml-12 space-x-5">
            <input
              className="border"
              placeholder="Search Restaurant"
              onChange={(e) =>
                setFilteredRes(
                  restaurants.filter((res) =>
                    res.name
                      .toLowerCase()
                      .includes(e.target.value.toLocaleLowerCase())
                  )
                )
              }
            />

            <label for="dropdown">Choose Location</label>
            <select
              id="dropdown"
              name="options"
              onChange={(e) => setUrl(getUrl[e.target.value])}
            >
              <option value="gaya">Gaya</option>
              <option defaultChecked value="cdg">
                Chandigarh
              </option>
            </select>

            <button
              onClick={() => {
                setFilteredRes(
                  filteredRes.filter((res) => res.avgRating >= 4.0)
                );
              }}
            >
              Top Restaurants
            </button>

            <button onClick={() => getRestauants()}>
              Show All Restaurants
            </button>

            <span>{`Available Restaurants ${filteredRes.length}`}</span>
          </div>
          <div className="flex flex-wrap ml-12 gap-5">
            {filteredRes?.map((res) => (
              <Link key={res.id} to={`/restaurants/${res.id}`}>
                {/* <RestaurantCard resDetails={res} /> */}
                <HOC resDetails={res} />
              </Link>
            ))}
            {/* {resData.map(res => <RestaurantCard name = {res.name} rating = {res.rating}/>)} 
        same thing here we are passing variables separately so that we can destructure in component */}
          </div>
        </div>
      ) : (
        <Shimmer />
      )}
    </>
  );
};

export default Body;
