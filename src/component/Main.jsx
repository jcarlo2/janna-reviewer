import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Main = ({ options, data, setScore }) => {
  const navigate = useNavigate();
  const [bookIndex, setBookIndex] = useState(0);
  const [pageIndex, setPageIndex] = useState(0);
  const [questionList, setQuestionList] = useState([
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
  const [timeInterval, setTimeInterval] = useState(-1);
  const [time, setTime] = useState({ minute: 0, second: 0 });
  const [timeoutNext, setTimeoutNext] = useState(false);
  const aRef = useRef();
  const bRef = useRef();
  const cRef = useRef();
  const dRef = useRef();
  const choicesContainerRef = useRef();
  const [backOrForwardFlag, setBackOrForwardFlag] = useState(false);
  const [userAnswerList, setUserAnswerList] = useState([[]]);
  const [currentBookAndPage, setCurrentBookAndPage] = useState({
    book: 0,
    page: 0,
  });

  useEffect(() => {
    if (!options.start) navigate("/");
    handleQuestions();
  }, []);

  useEffect(() => {
    handleTime();
    setTimeoutNext(true);
    return () => clearInterval(timeInterval);
  }, [answer, question]);

  useEffect(() => {
    const set = options.time;
    const minute = time.minute;
    const second = time.second;
    let target;
    const isNextBook = set === "hour" && minute === -99 && second === -99;

    if (answer === "a") target = aRef;
    else if (answer === "b") target = bRef;
    else if (answer === "c") target = cRef;
    else target = dRef;

    if (minute === -99 && second === -99 && timeoutNext && !isNextBook) {
      handleNextQuestion(answer, target, true);
      setTimeoutNext(false);
    } else if (isNextBook && bookIndex < questionList.length - 1) {
      setBookIndex((prevState) => prevState + 1);
      setPageIndex(0);
    } else if (isNextBook && bookIndex === questionList.length - 1)
      navigate("/score");
  }, [time]);

  useEffect(() => {
    setQuestion(
      questionList[bookIndex][Object.keys(questionList[bookIndex])][pageIndex]
        .question
    );
    setA(
      questionList[bookIndex][Object.keys(questionList[bookIndex])][pageIndex].a
    );
    setB(
      questionList[bookIndex][Object.keys(questionList[bookIndex])][pageIndex].b
    );
    setC(
      questionList[bookIndex][Object.keys(questionList[bookIndex])][pageIndex].c
    );
    setD(
      questionList[bookIndex][Object.keys(questionList[bookIndex])][pageIndex].d
    );
    setAnswer(
      questionList[bookIndex][Object.keys(questionList[bookIndex])][pageIndex]
        .answer
    );
    setBookFlag(Object.keys(questionList[bookIndex])[0]);
    if (backOrForwardFlag && userAnswerList[bookIndex][pageIndex]) {
      resetChoicesBackground();
      choicesContainerRef.current.classList.add("next");
      updateChoicesBackground(userAnswerList[bookIndex][pageIndex]);
      setBackOrForwardFlag(false);
    } else resetChoicesBackground();
    console.log(bookIndex, pageIndex);
  }, [questionList, bookIndex, pageIndex]);

  const handleQuestions = () => {
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
    setQuestionList(newArr);
  };

  const convertToOneArray = (arr) => {
    let newArr = [];
    arr.forEach((num) => {
      const bookName = Object.keys(num)[0];
      const book = num[bookName];
      let tempArr = [];
      book.forEach((section, index) => {
        if (options.subs[bookName][index] === true) {
          tempArr = [...tempArr, ...section];
        }
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

  const handleNextQuestion = (choice, target, isTimeout) => {
    const currentBook = currentBookAndPage.book;
    const currentPage = currentBookAndPage.page;

    updateScore(target, choice, isTimeout);
    if (choicesContainerRef.current.classList.contains("next")) {
      const book = questionList[bookIndex];

      if (
        bookIndex < questionList.length - 1 &&
        pageIndex === book[Object.keys(book)].length - 1
      ) {
        setBookIndex((prevState) => prevState + 1);
        setPageIndex(0);
        if (bookIndex === currentBook && pageIndex === currentPage) {
          setCurrentBookAndPage((prevState) => ({
            book: prevState.book + 1,
            page: 0,
          }));
        }
      } else if (pageIndex < book[Object.keys(book)].length - 1) {
        setPageIndex((prevState) => prevState + 1);
        if (bookIndex === currentBook && pageIndex === currentPage) {
          setCurrentBookAndPage((prevState) => ({
            book: prevState.book,
            page: prevState.page + 1,
          }));
        }
      } else navigate("/score");
      resetChoicesBackground();
    } else choicesContainerRef.current.classList.add("next");
  };

  const updateScore = (target, choice, isTimeout) => {
    const userAnswer = userAnswerList[bookIndex][pageIndex];
    const targetClassList = target?.current.classList;
    console.log(userAnswer, "USER ANSWER");
    if (!userAnswer) {
      if (
        choice === answer &&
        !targetClassList.contains("incorrect") &&
        !targetClassList.contains("correct") &&
        !isTimeout
      ) {
        userAnswerList[bookIndex][pageIndex] = answer;
        updateChoicesBackground(answer);
        console.log("IF");
        setScore((prevScore) => prevScore + 1);
      } else {
        userAnswerList[bookIndex][pageIndex] = answer;
        updateChoicesBackground(answer);
      }
    } else updateChoicesBackground(userAnswer);
  };

  const updateChoicesBackground = (answer) => {
    aRef.current.classList.add("incorrect");
    bRef.current.classList.add("incorrect");
    cRef.current.classList.add("incorrect");
    dRef.current?.classList.add("incorrect");
    switch (answer) {
      case "a":
        aRef.current.classList.add("correct");
        aRef.current.classList.remove("incorrect");
        break;
      case "b":
        bRef.current.classList.add("correct");
        bRef.current.classList.remove("incorrect");
        break;
      case "c":
        cRef.current.classList.add("correct");
        cRef.current.classList.remove("incorrect");
        break;
      default:
        dRef.current?.classList.add("correct");
        dRef.current?.classList.remove("incorrect");
    }
  };

  const resetChoicesBackground = () => {
    aRef.current.classList.remove("correct");
    aRef.current.classList.remove("incorrect");
    bRef.current.classList.remove("correct");
    bRef.current.classList.remove("incorrect");
    cRef.current.classList.remove("correct");
    cRef.current.classList.remove("incorrect");
    dRef.current?.classList.remove("correct");
    dRef.current?.classList.remove("incorrect");
    choicesContainerRef.current.classList.remove("next");
  };

  const handleTime = () => {
    clearInterval(timeInterval);
    const set = options.time;
    if (set === "half") {
      setTime({
        minute: 0,
        second: 30,
      });
    } else if (set === "full") {
      setTime({
        minute: 1,
        second: 0,
      });
    } else if (set === "hour") {
      setTime({
        minute: 60,
        second: 0,
      });
    }
    if (set !== "unlimited") {
      const interval = setInterval(() => {
        setTime((prevState) => ({
          minute:
            prevState.second - 1 < 0 && prevState.minute > 0 && set === "hour"
              ? prevState.minute - 1
              : prevState.minute === 0 && prevState.second - 1 < 0
              ? -99
              : prevState.minute,
          second:
            prevState.second - 1 < 0 && prevState.minute > 0 && set === "hour"
              ? 59
              : prevState.second - 1 < 0
              ? -99
              : prevState.second - 1,
        }));
      }, 1000);
      setTimeInterval(interval);
    }
  };

  const handleBackButton = () => {
    setBackOrForwardFlag(true);
    const currentBook = currentBookAndPage.book;
    const currentPage = currentBookAndPage.page;

    if (bookIndex === 0 && pageIndex === 0) return;
    else if (currentBook !== 0 && currentPage === 0) {
      setBookIndex((prevState) => prevState - 1);
      setPageIndex(questionList[bookIndex - 1][0].length - 1);
    } else setPageIndex((prevState) => (prevState <= 0 ? 0 : prevState - 1));
  };

  const handleForwardButton = () => {
    setBackOrForwardFlag(true);
    const key = Object.keys(questionList[bookIndex]);
    const questionBook = questionList.length;
    const questionPage = questionList[bookIndex][key[0]].length;
    if (
      (bookIndex === questionBook && pageIndex === questionPage) ||
      (currentBookAndPage.book === bookIndex &&
        currentBookAndPage.page === pageIndex)
    )
      return;
    else if (bookIndex < questionBook && pageIndex === questionPage) {
      setBookIndex((prevState) => prevState + 1);
      setPageIndex(0);
    } else setPageIndex((prevState) => prevState + 1);
  };

  return (
    <div className="main">
      <div>
        <div>
          <button onClick={handleBackButton}>
            <i className="back"></i>
          </button>
          <button onClick={handleForwardButton}>
            <i className="forward"></i>
          </button>
        </div>
        {options.time !== "unlimited" && (
          <p className="time">
            {time.minute} : {time.second}
          </p>
        )}
        <div>
          <p>
            {pageIndex + 1} /{" "}
            {
              questionList[bookIndex][Object.keys(questionList[bookIndex])]
                .length
            }
          </p>
          <button onDoubleClick={() => navigate("/")}>
            <i className="setting"></i>
          </button>
        </div>
      </div>
      <section>
        <div>
          <p className="bookFlag">{bookFlag}</p>
          <p
            className="question"
            dangerouslySetInnerHTML={{ __html: question }}></p>
        </div>
        <div ref={choicesContainerRef} className="choices">
          <div ref={aRef} onClick={() => handleNextQuestion("a", aRef, false)}>
            <span>A</span>
            <p>{a}</p>
          </div>
          <div ref={bRef} onClick={() => handleNextQuestion("b", bRef, false)}>
            <span>B</span>
            <p>{b}</p>
          </div>
          <div ref={cRef} onClick={() => handleNextQuestion("c", cRef, false)}>
            <span>C</span>
            <p>{c}</p>
          </div>
          {d && (
            <div
              ref={dRef}
              onClick={() => handleNextQuestion("d", dRef, false)}>
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
