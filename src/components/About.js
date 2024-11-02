import React from "react";
import UserClass from "./ClassBasedDemo/UserClass";

const About = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "lightGrey",
      }}
    >
      <h1>Demo Project for react learning</h1>
      <UserClass
        name="Tarique"
        contact="tariqueanwar386@gmail.com"
        location="Bihar"
      />
    </div>
  );
};

export default About;
