import React from "react";

const RestaurantInfo = (props) => {
  const {
    name,
    avgRatingString,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
    areaName,
  } = props.resDetails;
  return (
    <div className="font-serif">
      <h1 className="font-bold">{name}</h1>
      <h3>{`${avgRatingString}  (${totalRatingsString})   ${costForTwoMessage}`}</h3>

      <h3>{cuisines.join(", ")}</h3>
      <h3>Outlet {areaName}</h3>
      {/* TODO Add deliveryTime */}
    </div>
  );
};

export default RestaurantInfo;
