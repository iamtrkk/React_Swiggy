import React from "react";

const Contact = () => {
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
      <h1>Phone: 8102430841</h1>
      <h2>Email: tariqueanwar386@gmail.com</h2>
      <form>
        <input
          type="text"
          className="p-2 m-2 border border-black"
          placeholder="name"
        />
        <input
          type="text"
          className="p-2 m-2 border border-black"
          placeholder="message"
        />
        <button className="border border-black p-2 m-2 bg-gray-100 rounded-lg">
          submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
