import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import appRouter from "./route";

//Demo react element
const parent = React.createElement("div", { id: "parent" }, "I am Trk");
const jsxParent = <h1>I am trk jsx shorthand</h1>; //Both are same jsx helps creating rect element object like html

//Now creating component



const root = ReactDOM.createRoot(document.getElementById("root")); //

// root.render(jsxParent); // it replaces root content in index.html and renders react element
// root.render(<AppLayout/>); // rendering Home react component
root.render(<RouterProvider router={appRouter}/>); // rendering router for routing

