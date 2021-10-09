import { CircularProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Question from "../../components/questions/Question";
import "./quiz.css";

const Quiz = ({ name, questions, score, setscore, setquestions }) => {
  const [options, setoptions] = useState("");
  const [currquestion, setcurrquestion] = useState(0);

  useEffect(() => {
    console.log(questions);
    setoptions(
      questions &&
        handleshuffel([
          questions[currquestion]?.correct_answer,
          ...questions[currquestion]?.incorrect_answers,
        ])
    );
  }, [questions, currquestion]);
  console.log(options);
  const handleshuffel = (optionss) => {
    // this not the state of options it is diffrent
    return optionss.sort(() => Math.random() - 0.5);
  };
  return (
    <div className="quiz">
      <span className="subtitle"> Welcome : {name}</span>
      {questions ? (
        <>
          <div className="quizinfo">
            <span className="category">
              {questions[currquestion]?.category}
            </span>
            <span className="score"> score: {score}</span>
          </div>
          <Question
            currquestion={currquestion}
            setcurrquestion={setcurrquestion}
            options={options}
            questions={questions}
            correct={questions[currquestion]?.correct_answer}
            score={score}
            setscore={setscore}
            setquestions={setquestions}
          />
        </>
      ) : (
        <CircularProgress
          style={{ margin: 100 }}
          color="inherit"
          size={150}
          thickness={1}
        />
      )}
    </div>
  );
};

export default Quiz;
