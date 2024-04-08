import React, { useState } from "react";

const Bgchanger = () => {
  const [color, setColor] = useState("#90EE90");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color, height: "100vh" }}
      >
        <div
          style={{
            position: "fixed",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            bottom: "3rem", // equivalent to 12 in Tailwind CSS
            left: "0",
            right: "0",
            paddingX: "0.5rem", // equivalent to 2 in Tailwind CSS
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "0.75rem", // equivalent to 3 in Tailwind CSS
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              backgroundColor: "white",
              padding: "0.75rem", // equivalent to 3 in Tailwind CSS
              borderRadius: "50px", // equivalent to 3xl in Tailwind CSS
            }}
          >
            <button
              style={{
                outline: "none",
                padding: "4px 16px",
                borderRadius: "9999px",
                color: "white",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                backgroundColor: "red",
              }}
              onClick={() => {
                setColor("red");
              }}
            >
              Red
            </button>
            <button
              style={{
                background: "blue",
                outline: "none",
                padding: "4px 16px",
                borderRadius: "9999px",
                color: "black",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#7CFC00",
              }}
              onClick={() => {
                setColor("#7CFC00");
              }}
            >
              Lawngreen
            </button>
            <button
              style={{
                outline: "none",
                padding: "4px 16px",
                borderRadius: "9999px",
                color: "black",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                backgroundColor: "green",
              }}
              onClick={() => {
                setColor("green");
              }}
            >
              Green
            </button>
            <button
              style={{
                outline: "none",
                padding: "4px 16px",
                borderRadius: "9999px",
                color: "white",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                backgroundColor: "blue",
              }}
              onClick={() => {
                setColor("blue");
              }}
            >
              blue
            </button>
            <button
              style={{
                outline: "none",
                padding: "4px 16px",
                borderRadius: "9999px",
                color: "white",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                backgroundColor: "olive",
              }}
              onClick={() => {
                setColor("olive");
              }}
            >
              Olive
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bgchanger;
