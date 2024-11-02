import { useContext } from "react";
import { Link } from "react-router-dom";
import { APP_LOGO } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between">
      <img className="w-24" src={APP_LOGO} />
      <ul className="flex m-4 p-4 space-x-4">
        <li>{onlineStatus ? "Online 🟢" : "Offline 🔴"}</li>
        <li>
          <Link to="/lazy"> Lazy Load</Link>
        </li>
        <li>
          <Link to="/"> Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact"> Contact Us</Link>
        </li>
        <li className="font-bold">
          <Link to="/cart"> Cart {cartItems.length}</Link>
        </li>
        <li>{loggedInUser}</li>
      </ul>
    </div>
  );
};

export default Header;
