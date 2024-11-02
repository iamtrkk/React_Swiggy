import React from "react";
import { useRouteError } from "react-router-dom";
import { ERROR_IMAGE } from "../utils/constants";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "lightGrey",
      }}
    >
      <h1>Ye kya ho gaya 🙁😨😩😢😭</h1>
      <h3>
        {err.status}: {err.data}
      </h3>
      <img style={{ height: "75vh", width: "95vw" }} src={ERROR_IMAGE} />
    </div>
  );
};

export default Error;
