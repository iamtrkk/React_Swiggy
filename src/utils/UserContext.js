import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "admin",
});

export default UserContext;
