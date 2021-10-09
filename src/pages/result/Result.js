import { Button } from "@material-ui/core";
import React from "react";
import "./result.css";

const Result = ({ score }) => {
  return (
    <div className="result">
      <h1 className="title">your final score is : {score}</h1>
      <Button
        className="resultbtn"
        variant="contained"
        color="primary"
        size="large"
        style={{ width: 185 }}
        href="/"
      >
        Play Again
      </Button>
    </div>
  );
};

export default Result;
