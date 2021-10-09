import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router";
import ErrorMsg from "../errormessage/ErrorMsg";
import "./question.css";

const Question = ({
  currquestion,
  setcurrquestion,
  options,
  questions,
  correct,
  score,
  setscore,
  setquestions,
}) => {
  const [selected, setselected] = useState();
  const [error, seterror] = useState(false);
  const handleselected = (i) => {
    if (selected === i && selected === correct) {
      return "select";
    } else if (selected === i && selected !== correct) {
      return "wrong";
    } else if (i === correct) {
      return "select";
    }
  };
  const handlecheck = (i) => {
    setselected(i);
    if (i === correct) {
      setscore((prev) => prev + 1);
    }
    seterror(false);
  };
  const history = useHistory();
  const handlenext = () => {
    if (currquestion > 8) {
      history.push("/result");
    } else if (selected) {
      setcurrquestion((prev) => prev + 1);
      setselected();
    } else {
      seterror("please select the option first");
    }
  };
  const handlequit = () => {};
  return (
    <div className="question">
      <h2>Q. {currquestion + 1} :</h2>
      <div className="singlequestion">
        <h2> {questions[currquestion].question} </h2>
        <div className="options">
          {error && <ErrorMsg> {error} </ErrorMsg>}
          {options &&
            options.map((i) => (
              <button
                onClick={() => handlecheck(i)}
                className={`singleoption ${selected && handleselected(i)}`}
                key={i}
                disabled={selected}
              >
                {i}
              </button>
            ))}
        </div>
        <div className="controls">
          <Button
            className="quitbtn"
            variant="contained"
            color="secondary"
            size="large"
            style={{ width: 185 }}
            href="/"
            onClick={handlequit}
          >
            Quit
          </Button>
          <Button
            className="nextbtn"
            variant="contained"
            color="primary"
            size="large"
            style={{ width: 185 }}
            onClick={handlenext}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Question;
