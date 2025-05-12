import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import useOnlineStatus from "./utils/useOnlineStatus";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "../store/appStore";

const Home = () => {
  const onlineStatus = useOnlineStatus();

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: "Trk" }}>
        <div>
          <Header />
          {onlineStatus ? <Outlet /> : <h1>You are offline</h1>}
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

export default Home;
