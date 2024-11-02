import React from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import Shimmer from "../Shimmer";
import RestaurantInfo from "./RestaurantInfo";
import RestaurantMenu from "./RestaurantMenu";

const Restaurant = () => {
  const { resId } = useParams();
  const [resDetails, menu] = useRestaurantMenu(resId);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        width: "70vw",
        marginLeft: "10vw",
      }}
    >
      {resDetails ? (
        <div>
          <div className="ml-3">
            <RestaurantInfo resDetails={resDetails} />
          </div>
          <div className="mt-8">
            {menu.map(
              (item) =>
                item.card.card.title && (
                  <RestaurantMenu
                    title={item.card.card.title}
                    items={item.card.card?.itemCards}
                    categories={item.card.card?.categories}
                  />
                )
            )}
          </div>
        </div>
      ) : (
        <Shimmer />
      )}
    </div>
  );
};

export default Restaurant;
