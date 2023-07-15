import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Option from "./component/Option";
import Main from "./component/Main";
import Score from "./component/Score";
import data from "./data/data.json";

function App() {
  const [options, setOptions] = useState({
    time: "unlimited",
    shuffle: true,
    start: false,
    books: {
      airlaw: true,
      engineer: true,
      airframe: true,
      aircraft: true,
      powerplant: true,
    },
    subs: {
      airlaw: [true, true, true, true, true, true, true],
      engineer: [true, true, true, true, true, true, true, true, true, true],
      airframe: [true, true, true, true, true, true, true, true, true],
      aircraft: [
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
      ],
      powerplant: [true, true, true, true, true, true, true, true],
    },
  });
  const [score, setScore] = useState(0);

  useEffect(() => {
    // console.log(data)
  }, []);

  return (
    <>
      <Routes>
        <Route
          index
          element={
            <Option books={data} setOptions={setOptions} options={options} />
          }
        />
        <Route
          path="main"
          element={
            <Main
              options={options}
              data={data}
              setScore={setScore}
            />
          }
        />
        <Route path="score" element={<Score score={score} isStart={options.start} />} />
      </Routes>
    </>
  );
}

export default App;
