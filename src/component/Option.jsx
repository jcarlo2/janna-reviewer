import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import OptionCheckbox from "./sub/OptionCheckbox";

const Option = ({ books, setOptions, options }) => {
  const booksKeys = Object.keys(books);
  const airlawSections = Object.keys(books[booksKeys[0]]);
  const acEngineeringSections = Object.keys(books[booksKeys[1]]);
  const airframeSections = Object.keys(books[booksKeys[2]]);
  const aircraftMaintenanceSections = Object.keys(books[booksKeys[3]]);
  const powerplantSections = Object.keys(books[booksKeys[4]]);
  const [time, setTime] = useState("Time: Unlimited");
  const [shuffle, setShuffle] = useState("Shuffle: Yes");
  const [error, setError] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    setOptions({
      time: "unlimited",
      shuffle: true,
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
  }, [setOptions]);

  const handleCheckBoxOnChange = (isBooks, bookName, num) => {
    if (isBooks) {
      setOptions((prevState) => ({
        time: prevState.time,
        shuffle: prevState.shuffle,
        subs: prevState.subs,
        books: {
          ...prevState.books,
          [bookName]: !prevState.books[bookName],
        },
      }));
    } else {
      setOptions((prevState) => ({
        time: prevState.time,
        shuffle: prevState.shuffle,
        books: prevState.books,
        subs: {
          ...prevState.subs,
          [bookName]: prevState.subs[bookName].map((item, index) =>
            index === num ? !item : item
          ),
        },
      }));
    }
  };

  return (
    <div className="option">
      <h1>Option</h1>
      <div>
        {error && <p className="invalid">{error}</p>}
        <h2>BOOKS</h2>
        <details>
          <summary>
            <input
              type="checkbox"
              defaultChecked={true}
              onChange={() => handleCheckBoxOnChange(true, "airlaw")}
            />
            {booksKeys[0].toUpperCase()}
          </summary>
          <OptionCheckbox
            text={airlawSections[0]}
            handleOnchange={(e) => handleCheckBoxOnChange(false, "airlaw", 0)}
          />
          <OptionCheckbox
            text={airlawSections[1]}
            handleOnchange={(e) => handleCheckBoxOnChange(false, "airlaw", 1)}
          />
          <OptionCheckbox
            text={airlawSections[2]}
            handleOnchange={(e) => handleCheckBoxOnChange(false, "airlaw", 2)}
          />
          <OptionCheckbox
            text={airlawSections[3]}
            handleOnchange={() => handleCheckBoxOnChange(false, "airlaw", 3)}
          />
          <OptionCheckbox
            text={airlawSections[4]}
            handleOnchange={() => handleCheckBoxOnChange(false, "airlaw", 4)}
          />
          <OptionCheckbox
            text={airlawSections[5]}
            handleOnchange={() => handleCheckBoxOnChange(false, "airlaw", 5)}
          />
          <OptionCheckbox
            text={airlawSections[6]}
            handleOnchange={() => handleCheckBoxOnChange(false, "airlaw", 6)}
          />
        </details>
        <details>
          <summary>
            <input
              type="checkbox"
              defaultChecked={true}
              onChange={() => handleCheckBoxOnChange(true, "engineer")}
            />
            {booksKeys[1].toUpperCase()}
          </summary>
          <OptionCheckbox
            text={acEngineeringSections[0]}
            handleOnchange={() => handleCheckBoxOnChange(false, "engineer", 0)}
          />
          <OptionCheckbox
            text={acEngineeringSections[1]}
            handleOnchange={() => handleCheckBoxOnChange(false, "engineer", 1)}
          />
          <OptionCheckbox
            text={acEngineeringSections[2]}
            handleOnchange={() => handleCheckBoxOnChange(false, "engineer", 2)}
          />
          <OptionCheckbox
            text={acEngineeringSections[3]}
            handleOnchange={() => handleCheckBoxOnChange(false, "engineer", 3)}
          />
          <OptionCheckbox
            text={acEngineeringSections[4]}
            handleOnchange={() => handleCheckBoxOnChange(false, "engineer", 4)}
          />
          <OptionCheckbox
            text={acEngineeringSections[5]}
            handleOnchange={() => handleCheckBoxOnChange(false, "engineer", 5)}
          />
          <OptionCheckbox
            text={acEngineeringSections[6]}
            handleOnchange={() => handleCheckBoxOnChange(false, "engineer", 6)}
          />
          <OptionCheckbox
            text={acEngineeringSections[7]}
            handleOnchange={() => handleCheckBoxOnChange(false, "engineer", 7)}
          />
          <OptionCheckbox
            text={acEngineeringSections[8]}
            handleOnchange={() => handleCheckBoxOnChange(false, "engineer", 8)}
          />
          <OptionCheckbox
            text={acEngineeringSections[9]}
            handleOnchange={() => handleCheckBoxOnChange(false, "engineer", 9)}
          />
        </details>
        <details>
          <summary>
            <input
              type="checkbox"
              defaultChecked={true}
              onChange={() => handleCheckBoxOnChange(true, "airframe")}
            />
            {booksKeys[2].toUpperCase()}
          </summary>
          <OptionCheckbox
            text={airframeSections[0]}
            handleOnchange={() => handleCheckBoxOnChange(false, "airframe", 0)}
          />
          <OptionCheckbox
            text={airframeSections[1]}
            handleOnchange={() => handleCheckBoxOnChange(false, "airframe", 1)}
          />
          <OptionCheckbox
            text={airframeSections[2]}
            handleOnchange={() => handleCheckBoxOnChange(false, "airframe", 2)}
          />
          <OptionCheckbox
            text={airframeSections[2]}
            handleOnchange={() => handleCheckBoxOnChange(false, "airframe", 3)}
          />
          <OptionCheckbox
            text={airframeSections[3]}
            handleOnchange={() => handleCheckBoxOnChange(false, "airframe", 4)}
          />
          <OptionCheckbox
            text={airframeSections[4]}
            handleOnchange={() => handleCheckBoxOnChange(false, "airframe", 5)}
          />
          <OptionCheckbox
            text={airframeSections[5]}
            handleOnchange={() => handleCheckBoxOnChange(false, "airframe", 6)}
          />
          <OptionCheckbox
            text={airframeSections[6]}
            handleOnchange={() => handleCheckBoxOnChange(false, "airframe", 7)}
          />
          <OptionCheckbox
            text={airframeSections[7]}
            handleOnchange={() => handleCheckBoxOnChange(false, "airframe", 8)}
          />
          <OptionCheckbox
            text={airframeSections[8]}
            handleOnchange={() => handleCheckBoxOnChange(false, "airframe", 9)}
          />
        </details>
        <details>
          <summary>
            <input
              type="checkbox"
              defaultChecked={true}
              onChange={() => handleCheckBoxOnChange(true, "aircraft")}
            />
            {booksKeys[3].toUpperCase()}
          </summary>
          <OptionCheckbox
            text={aircraftMaintenanceSections[0]}
            handleOnchange={() => handleCheckBoxOnChange(false, "aircraft", 0)}
          />
          <OptionCheckbox
            text={aircraftMaintenanceSections[1]}
            handleOnchange={() => handleCheckBoxOnChange(false, "aircraft", 1)}
          />
          <OptionCheckbox
            text={aircraftMaintenanceSections[2]}
            handleOnchange={() => handleCheckBoxOnChange(false, "aircraft", 2)}
          />
          <OptionCheckbox
            text={aircraftMaintenanceSections[3]}
            handleOnchange={() => handleCheckBoxOnChange(false, "aircraft", 3)}
          />
          <OptionCheckbox
            text={aircraftMaintenanceSections[4]}
            handleOnchange={() => handleCheckBoxOnChange(false, "aircraft", 4)}
          />
          <OptionCheckbox
            text={aircraftMaintenanceSections[5]}
            handleOnchange={() => handleCheckBoxOnChange(false, "aircraft", 5)}
          />
          <OptionCheckbox
            text={aircraftMaintenanceSections[6]}
            handleOnchange={() => handleCheckBoxOnChange(false, "aircraft", 6)}
          />
          <OptionCheckbox
            text={aircraftMaintenanceSections[7]}
            handleOnchange={() => handleCheckBoxOnChange(false, "aircraft", 7)}
          />
          <OptionCheckbox
            text={aircraftMaintenanceSections[8]}
            handleOnchange={() => handleCheckBoxOnChange(false, "aircraft", 8)}
          />
          <OptionCheckbox
            text={aircraftMaintenanceSections[9]}
            handleOnchange={() => handleCheckBoxOnChange(false, "aircraft", 9)}
          />
          <OptionCheckbox
            text={aircraftMaintenanceSections[10]}
            handleOnchange={() => handleCheckBoxOnChange(false, "aircraft", 10)}
          />
          <OptionCheckbox
            text={aircraftMaintenanceSections[11]}
            handleOnchange={() => handleCheckBoxOnChange(false, "aircraft", 11)}
          />
          <OptionCheckbox
            text={aircraftMaintenanceSections[12]}
            handleOnchange={() => handleCheckBoxOnChange(false, "aircraft", 12)}
          />
        </details>
        <details>
          <summary>
            <input
              type="checkbox"
              defaultChecked={true}
              onChange={() => handleCheckBoxOnChange(true, "powerplant")}
            />
            {booksKeys[4].toUpperCase()}
          </summary>
          <OptionCheckbox
            text={powerplantSections[0]}
            handleOnchange={() =>
              handleCheckBoxOnChange(false, "powerplant", 0)
            }
          />
          <OptionCheckbox
            text={powerplantSections[1]}
            handleOnchange={() =>
              handleCheckBoxOnChange(false, "powerplant", 1)
            }
          />
          <OptionCheckbox
            text={powerplantSections[2]}
            handleOnchange={() =>
              handleCheckBoxOnChange(false, "powerplant", 2)
            }
          />
          <OptionCheckbox
            text={powerplantSections[3]}
            handleOnchange={() =>
              handleCheckBoxOnChange(false, "powerplant", 3)
            }
          />
          <OptionCheckbox
            text={powerplantSections[4]}
            handleOnchange={() =>
              handleCheckBoxOnChange(false, "powerplant", 4)
            }
          />
          <OptionCheckbox
            text={powerplantSections[5]}
            handleOnchange={() =>
              handleCheckBoxOnChange(false, "powerplant", 5)
            }
          />
          <OptionCheckbox
            text={powerplantSections[6]}
            handleOnchange={() =>
              handleCheckBoxOnChange(false, "powerplant", 6)
            }
          />
          <OptionCheckbox
            text={powerplantSections[7]}
            handleOnchange={() =>
              handleCheckBoxOnChange(false, "powerplant", 7)
            }
          />
        </details>
      </div>
      <div>
        <input
          type="button"
          value={time}
          onClick={() => {
            setTime((prevState) =>
              prevState === "Time: Unlimited"
                ? "Time: 30 sec/Question"
                : prevState === "Time: 30 sec/Question"
                ? "Time: 60 sec/Question"
                : prevState === "Time: 60 sec/Question"
                ? "Time: 60 min/Book"
                : "Time: Unlimited"
            );
            setOptions((prevState) => ({
              subs: prevState.subs,
              books: prevState.books,
              shuffle: prevState.shuffle,
              time:
                prevState.time === "unlimited"
                  ? "half"
                  : prevState.time === "half"
                  ? "full"
                  : prevState.time === "full"
                  ? "hour"
                  : "unlimited",
            }));
          }}
        />
        <input
          type="button"
          value={shuffle}
          onClick={(e) => {
            setShuffle((prevState) =>
              prevState === "Shuffle: Yes" ? "Shuffle: No" : "Shuffle: Yes"
            );
            setOptions((prevState) => ({
              time: prevState.time,
              subs: prevState.subs,
              books: prevState.books,
              shuffle: !prevState.shuffle,
            }));
          }}
        />
        <input
          type="button"
          value="Start"
          onClick={() => {
            const isBookSelected = Object.values(options.books).some(
              (name) => name === true
            );
            let isSectionSelected = false 
            Object.keys(options.subs).forEach((name) => {
              options.subs[name].forEach((section) => {
                if(section && options.books[name]) isSectionSelected = true
              });
            });
            if (isBookSelected && isSectionSelected) {
              setOptions((prevState) => ({
                ...prevState,
                start: true,
              }));
              navigate("/main");
            } else {
              setError("Select at least one book and section");
            }
          }}
        />
      </div>
    </div>
  );
};

export default Option;
