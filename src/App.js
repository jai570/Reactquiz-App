import "./App.css";
import axios from "axios";
import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Quiz from "./pages/quiz/Quiz";
import Result from "./pages/result/Result";
function App() {
  const [name, setname] = useState("");
  const [question, setquestion] = useState("");
  const [score, setscore] = useState(0);

  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );
    // console.log(category, difficulty);
    // console.log(data);
    setquestion(data.results);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home}>
            <Home
              name={name}
              setname={setname}
              fetchQuestions={fetchQuestions}
            />
          </Route>
          <Route path="/quiz" component={Quiz}>
            <Quiz
              name={name}
              questions={question}
              score={score}
              setscore={setscore}
              setquestions={setquestion}
            />
          </Route>
          <Route path="/result" component={Result}>
            <Result score={score} />
          </Route>
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
