import React from "react";

const PromotedHOC = (RestaurantCard) => { // receiveng component as argument
  return (props) => { //we will receive props for restaurantCard here
    return (
      <div>
        {/* Returning card with promoted label */}
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
        {/* /all received props passed */}
        <RestaurantCard {...props}/> 
      </div>
    );
  };
};

export default PromotedHOC;
