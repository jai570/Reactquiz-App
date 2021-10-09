import { Button, MenuItem, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Categories from "../../Data/Categories";
import ErrorMsg from "../../components/errormessage/ErrorMsg";
import "./home.css";
const Home = ({ name, setname, fetchQuestions }) => {
  const [category, setcategory] = useState("");
  const [difficulty, setdifficulty] = useState("");
  const [error, seterror] = useState(false);
  const history = useHistory();
  const handlesubmit = () => {
    if (!category || !difficulty || !name) {
      seterror(true);
      return;
    } else {
      seterror(false);
      fetchQuestions(category, difficulty);
      history.push("/quiz");
    }
  };
  return (
    <div className="content">
      <div className="settings ">
        <span style={{ fontSize: "30px" }}> Quiz Setting</span>
        <div className="settengselect">
          {error && <ErrorMsg>Please fill all the details</ErrorMsg>}
          <TextField
            label="Enter Your Name..."
            variant="outlined"
            style={{ marginBottom: "25px" }}
            onChange={(e) => setname(e.target.value)}
          />
          <TextField
            select
            label="Select Category"
            variant="outlined"
            style={{ marginBottom: "25px" }}
            onChange={(e) => setcategory(e.target.value)}
          >
            {Categories.map((cat) => (
              <MenuItem key={cat.category} value={cat.value}>
                {cat.category}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            label="Select Difficulty"
            variant="outlined"
            style={{ marginBottom: "25px" }}
            onChange={(e) => setdifficulty(e.target.value)}
            value={difficulty}
          >
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField>

          <Button
            variant="contained"
            color="primary"
            onClick={() => handlesubmit()}
          >
            Play
          </Button>
        </div>
      </div>
      <img src="/quiz.svg" alt="Quiz" className="banner" />
    </div>
  );
};

export default Home;
