import React from "react";
import { Link } from "react-router-dom";

const Score = ({ score }) => {
  return (
    <div className="score">
      <h1>Score</h1>
      <p>Score: {score}</p>
      <Link to={"/"}>Try Again</Link>
    </div>
  );
};

export default Score;
