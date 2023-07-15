import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Score = ({ score, isStart }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isStart) navigate("/");
  }, []);
  
  return (
    <div className="score">
      <h1>Score</h1>
      <p>
        {score} {score === 1 ? "point" : "points"}
      </p>
      <Link to={"/"}>Try Again</Link>
    </div>
  );
};

export default Score;
