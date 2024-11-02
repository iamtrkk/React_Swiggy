import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../../store/cartSlice";
import { FOOD_ITEM_IMAGE_URL } from "../../utils/constants";

const MenuItem = (props) => {
  // console.log(props)
  const {
    name,
    id,
    imageId,
    price,
    defaultPrice,
    description,
    isBestseller,
    ratings,
    itemAttribute, //veg,non veg
  } = props.item;

  const isVeg = itemAttribute.vegClassifier === "VEG";
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="flex justify-between mb-5 p-2">
      <div>
        <h5 style={{ color: isVeg ? "green" : "red" }}>
          {itemAttribute.vegClassifier} {isBestseller && "Bestseller"}
        </h5>
        <h3 className="font-bold">{name}</h3>
        <h4>Rs {(defaultPrice ?? price) / 100}</h4>
        {ratings.aggregatedRating.rating && (
          <h5>
            {`${ratings?.aggregatedRating?.rating} (${ratings?.aggregatedRating?.ratingCount})`}
          </h5>
        )}
        <h5 className="font-mono w-6/12">{description}</h5>
      </div>
      <div className="flex flex-col" >
        {imageId && (
          <img
            src={`${FOOD_ITEM_IMAGE_URL}${imageId}`}
          />
        )}
        <button
          onClick={() => handleAddToCart(props.item)}
          className="absolute p-2 mx-16 rounded-lg bg-black text-white shadow-lg"
        >
          Add +
        </button>
      </div>
    </div>
  );
};

export default MenuItem;
