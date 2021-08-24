import React from "react";

const Dot = ({ color, onClick }) => {
  return (
    <button
      className="rounded-full h-12 w-12 flex items-center justify-center ring-4 ring-pink-300 ring-color"
      style={{ backgroundColor: color, margin: "2rem" }}
      onClick={onClick}
    />
  );
};

export default Dot;
