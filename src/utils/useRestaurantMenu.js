import React, { useEffect, useState } from "react";
import { SWIGGY_MENU } from "./constants";

const useRestaurantMenu = (resId) => {
  const [menu, setMenu] = useState();
  const [resDetails, setResDetails] = useState();

  useEffect(() => {
    loadMenu();
  }, []);

  const loadMenu = async () => {
    const response = await fetch(SWIGGY_MENU + resId);
    const data = (await response.json()).data.cards;
    const resInfo = data[2].card.card.info;
    setResDetails(resInfo);
    const menuData = data[4].groupedCard.cardGroupMap.REGULAR.cards;
    setMenu(menuData);
  };

  return [resDetails, menu];
};

export default useRestaurantMenu;
