import { RES_LOGO, SWIGGY_IMAGE_URL } from "../../utils/constants";

const RestaurantCard = (props) => {
  const { resDetails } = props; // destructuring props here we have one value because I have passed all object
  // console.log(resDetails)
  return (
    <div data-testid="resCard" className="w-[220px] h-[380px] bg-slate-200 hover:bg-red-200 rounded-lg p-2">
      <img
        className="w-[200px] h-[200px]"
        src={`${SWIGGY_IMAGE_URL}/${resDetails?.cloudinaryImageId}`}
      />
      <div>
        <h3 className="font-bold">{resDetails.name}</h3>
        <h4>{resDetails.costForTwo}</h4>
        <h4>{resDetails.cuisines?.join(", ")}</h4>
        <h4>{resDetails.avgRating} Stars</h4>
        <h4>{resDetails.sla?.deliveryTime} Minutes</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
