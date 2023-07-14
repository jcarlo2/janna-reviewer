import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Main = ({ options, data, score, setScore }) => {
  const navigate = useNavigate();
  const [bookIndex, setBookIndex] = useState(0);
  const [pageIndex, setPageIndex] = useState(0);
  const [questions, setQuestions] = useState([
    {
      "": [{}],
    },
  ]);
  const [question, setQuestion] = useState("");
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [d, setD] = useState();
  const [answer, setAnswer] = useState("");
  const [bookFlag, setBookFlag] = useState("");

  useEffect(() => {
    const booksName = Object.keys(options.books).filter(
      (name) => options.books[name] === true
    );
    const questionSet = booksName.map((name) => {
      switch (name) {
        case "engineer":
          return { engineer: Object.values(data["AC Engineering"]) };
        case "aircraft":
          return { aircraft: Object.values(data["AIRCRAFT MAINTENANCE"]) };
        case "airframe":
          return { airframe: Object.values(data["AIRFRAME"]) };
        case "powerplant":
          return { powerplant: Object.values(data["POWERPLANT"]) };
        default:
          return { airlaw: Object.values(data["Airlaw"]) };
      }
    });

    if (options.shuffle) initShuffle(questionSet);
    const newArr = convertToOneArray(questionSet);
    setQuestions(newArr);
  }, []);

  useEffect(() => {
    setQuestion(
      questions[bookIndex][Object.keys(questions[bookIndex])][pageIndex]
        .question
    );
    setA(questions[bookIndex][Object.keys(questions[bookIndex])][pageIndex].a);
    setB(questions[bookIndex][Object.keys(questions[bookIndex])][pageIndex].b);
    setC(questions[bookIndex][Object.keys(questions[bookIndex])][pageIndex].c);
    setD(questions[bookIndex][Object.keys(questions[bookIndex])][pageIndex].d);
    setAnswer(
      questions[bookIndex][Object.keys(questions[bookIndex])][pageIndex].answer
    );
    setBookFlag(Object.keys(questions[bookIndex])[0]);
    console.log(questions.length);
  }, [questions, bookIndex, pageIndex]);

  const convertToOneArray = (arr) => {
    let newArr = [];
    arr.forEach((num) => {
      const bookName = Object.keys(num)[0];
      const book = num[bookName];
      let tempArr = [];
      book.forEach((section) => {
        tempArr = [...tempArr, ...section];
      });
      newArr.push({ [bookName]: tempArr });
    });
    shuffle(newArr);
    return newArr;
  };

  const initShuffle = (arr) => {
    arr.forEach((num) => {
      const book = num[Object.keys(num)[0]];
      shuffle(book);
      book.forEach((section) => {
        shuffle(section);
      });
    });
  };

  const shuffle = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  };

  useEffect(() => {
    console.log(score, answer);
  }, [score, answer]);

  const handleNext = (choice) => {
    if (choice === answer) setScore((prevState) => prevState + 1);
    const book = questions[bookIndex];
    if (
      bookIndex < questions.length &&
      pageIndex === book[Object.keys(book)].length - 1
    ) {
      console.log("ONE");
      setBookIndex((prevState) => prevState + 1);
      setPageIndex(0);
    } else if (pageIndex < book[Object.keys(book)].length - 1) {
      console.log("TWO");
      setPageIndex((prevState) => prevState + 1);
    } else {
      navigate("/score");
    }
  };

  const handleTime = () => {};

  return (
    <div className="main">
      <div>
        <button onDoubleClick={() => navigate("/")}>
          <i></i>
        </button>
        <p className="time">60 : 00</p>
        <p>
          {pageIndex + 1} /{" "}
          {questions[bookIndex][Object.keys(questions[bookIndex])].length}
        </p>
      </div>
      <section>
        <div>
          <p className="bookFlag">{bookFlag}</p>
          <p className="question">{question}</p>
        </div>
        <div className="choices">
          <div onClick={() => handleNext("a")}>
            <span>A</span>
            <p>{a}</p>
          </div>
          <div onClick={() => handleNext("b")}>
            <span>B</span>
            <p>{b}</p>
          </div>
          <div onClick={() => handleNext("c")}>
            <span>C</span>
            <p>{c}</p>
          </div>
          {d && (
            <div onClick={() => handleNext("d")}>
              <span>D</span>
              <p>{d}</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Main;
