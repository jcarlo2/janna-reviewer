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

  const handleCheckBoxOnChange = (isBooks, bookName, num) => {
    if (isBooks) {
      setOptions((prevState) => ({
        time: prevState.time,
        shuffle: prevState.shuffle,
        subs: prevState.subs,
        start: prevState.start,
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
        start: prevState.start,
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
              onChange={() => handleCheckBoxOnChange(true, "airlaw")}
              defaultChecked={options.books.airlaw}
            />
            {booksKeys[0].toUpperCase()}
          </summary>
          <OptionCheckbox
            text={airlawSections[0]}
            handleOnchange={(e) => handleCheckBoxOnChange(false, "airlaw", 0)}
            isSelect={options.subs.airlaw[0]}
          />
          <OptionCheckbox
            text={airlawSections[1]}
            handleOnchange={(e) => handleCheckBoxOnChange(false, "airlaw", 1)}
            isSelect={options.subs.airlaw[1]}
          />
          <OptionCheckbox
            text={airlawSections[2]}
            handleOnchange={(e) => handleCheckBoxOnChange(false, "airlaw", 2)}
            isSelect={options.subs.airlaw[2]}
          />
          <OptionCheckbox
            text={airlawSections[3]}
            handleOnchange={() => handleCheckBoxOnChange(false, "airlaw", 3)}
            isSelect={options.subs.airlaw[3]}
          />
          <OptionCheckbox
            text={airlawSections[4]}
            handleOnchange={() => handleCheckBoxOnChange(false, "airlaw", 4)}
            isSelect={options.subs.airlaw[4]}
          />
          <OptionCheckbox
            text={airlawSections[5]}
            handleOnchange={() => handleCheckBoxOnChange(false, "airlaw", 5)}
            isSelect={options.subs.airlaw[5]}
          />
          <OptionCheckbox
            text={airlawSections[6]}
            handleOnchange={() => handleCheckBoxOnChange(false, "airlaw", 6)}
            isSelect={options.subs.airlaw[6]}
          />
        </details>
        <details>
          <summary>
            <input
              type="checkbox"
              onChange={() => handleCheckBoxOnChange(true, "engineer")}
              defaultChecked={options.books.engineer}
            />
            {booksKeys[1].toUpperCase()}
          </summary>
          <OptionCheckbox
            text={acEngineeringSections[0]}
            handleOnchange={() => handleCheckBoxOnChange(false, "engineer", 0)}
            isSelect={options.subs.engineer[0]}
          />
          <OptionCheckbox
            text={acEngineeringSections[1]}
            handleOnchange={() => handleCheckBoxOnChange(false, "engineer", 1)}
            isSelect={options.subs.engineer[1]}
          />
          <OptionCheckbox
            text={acEngineeringSections[2]}
            handleOnchange={() => handleCheckBoxOnChange(false, "engineer", 2)}
            isSelect={options.subs.engineer[2]}
          />
          <OptionCheckbox
            text={acEngineeringSections[3]}
            handleOnchange={() => handleCheckBoxOnChange(false, "engineer", 3)}
            isSelect={options.subs.engineer[3]}
          />
          <OptionCheckbox
            text={acEngineeringSections[4]}
            handleOnchange={() => handleCheckBoxOnChange(false, "engineer", 4)}
            isSelect={options.subs.engineer[4]}
          />
          <OptionCheckbox
            text={acEngineeringSections[5]}
            handleOnchange={() => handleCheckBoxOnChange(false, "engineer", 5)}
            isSelect={options.subs.engineer[5]}
          />
          <OptionCheckbox
            text={acEngineeringSections[6]}
            handleOnchange={() => handleCheckBoxOnChange(false, "engineer", 6)}
            isSelect={options.subs.engineer[6]}
          />
          <OptionCheckbox
            text={acEngineeringSections[7]}
            handleOnchange={() => handleCheckBoxOnChange(false, "engineer", 7)}
            isSelect={options.subs.engineer[7]}
          />
          <OptionCheckbox
            text={acEngineeringSections[8]}
            handleOnchange={() => handleCheckBoxOnChange(false, "engineer", 8)}
            isSelect={options.subs.engineer[8]}
          />
          <OptionCheckbox
            text={acEngineeringSections[9]}
            handleOnchange={() => handleCheckBoxOnChange(false, "engineer", 9)}
            isSelect={options.subs.engineer[9]}
          />
        </details>
        <details>
          <summary>
            <input
              type="checkbox"
              onChange={() => handleCheckBoxOnChange(true, "airframe")}
              defaultChecked={options.books.airframe}
            />
            {booksKeys[2].toUpperCase()}
          </summary>
          <OptionCheckbox
            text={airframeSections[0]}
            handleOnchange={() => handleCheckBoxOnChange(false, "airframe", 0)}
            isSelect={options.subs.airframe[0]}
          />
          <OptionCheckbox
            text={airframeSections[1]}
            handleOnchange={() => handleCheckBoxOnChange(false, "airframe", 1)}
            isSelect={options.subs.airframe[1]}
          />
          <OptionCheckbox
            text={airframeSections[2]}
            handleOnchange={() => handleCheckBoxOnChange(false, "airframe", 2)}
            isSelect={options.subs.airframe[2]}
          />
          <OptionCheckbox
            text={airframeSections[3]}
            handleOnchange={() => handleCheckBoxOnChange(false, "airframe", 3)}
            isSelect={options.subs.airframe[3]}
          />
          <OptionCheckbox
            text={airframeSections[4]}
            handleOnchange={() => handleCheckBoxOnChange(false, "airframe", 4)}
            isSelect={options.subs.airframe[4]}
          />
          <OptionCheckbox
            text={airframeSections[5]}
            handleOnchange={() => handleCheckBoxOnChange(false, "airframe", 5)}
            isSelect={options.subs.airframe[5]}
          />
          <OptionCheckbox
            text={airframeSections[6]}
            handleOnchange={() => handleCheckBoxOnChange(false, "airframe", 6)}
            isSelect={options.subs.airframe[6]}
          />
          <OptionCheckbox
            text={airframeSections[7]}
            handleOnchange={() => handleCheckBoxOnChange(false, "airframe", 7)}
            isSelect={options.subs.airframe[7]}
          />
          <OptionCheckbox
            text={airframeSections[8]}
            handleOnchange={() => handleCheckBoxOnChange(false, "airframe", 8)}
            isSelect={options.subs.airframe[8]}
          />
        </details>
        <details>
          <summary>
            <input
              type="checkbox"
              onChange={() => handleCheckBoxOnChange(true, "aircraft")}
              defaultChecked={options.books.aircraft}
            />
            {booksKeys[3].toUpperCase()}
          </summary>
          <OptionCheckbox
            text={aircraftMaintenanceSections[0]}
            handleOnchange={() => handleCheckBoxOnChange(false, "aircraft", 0)}
            isSelect={options.subs.aircraft[0]}
          />
          <OptionCheckbox
            text={aircraftMaintenanceSections[1]}
            handleOnchange={() => handleCheckBoxOnChange(false, "aircraft", 1)}
            isSelect={options.subs.aircraft[1]}
          />
          <OptionCheckbox
            text={aircraftMaintenanceSections[2]}
            handleOnchange={() => handleCheckBoxOnChange(false, "aircraft", 2)}
            isSelect={options.subs.aircraft[2]}
          />
          <OptionCheckbox
            text={aircraftMaintenanceSections[3]}
            handleOnchange={() => handleCheckBoxOnChange(false, "aircraft", 3)}
            isSelect={options.subs.aircraft[3]}
          />
          <OptionCheckbox
            text={aircraftMaintenanceSections[4]}
            handleOnchange={() => handleCheckBoxOnChange(false, "aircraft", 4)}
            isSelect={options.subs.aircraft[4]}
          />
          <OptionCheckbox
            text={aircraftMaintenanceSections[5]}
            handleOnchange={() => handleCheckBoxOnChange(false, "aircraft", 5)}
            isSelect={options.subs.aircraft[5]}
          />
          <OptionCheckbox
            text={aircraftMaintenanceSections[6]}
            handleOnchange={() => handleCheckBoxOnChange(false, "aircraft", 6)}
            isSelect={options.subs.aircraft[6]}
          />
          <OptionCheckbox
            text={aircraftMaintenanceSections[7]}
            handleOnchange={() => handleCheckBoxOnChange(false, "aircraft", 7)}
            isSelect={options.subs.aircraft[7]}
          />
          <OptionCheckbox
            text={aircraftMaintenanceSections[8]}
            handleOnchange={() => handleCheckBoxOnChange(false, "aircraft", 8)}
            isSelect={options.subs.aircraft[8]}
          />
          <OptionCheckbox
            text={aircraftMaintenanceSections[9]}
            handleOnchange={() => handleCheckBoxOnChange(false, "aircraft", 9)}
            isSelect={options.subs.aircraft[9]}
          />
          <OptionCheckbox
            text={aircraftMaintenanceSections[10]}
            handleOnchange={() => handleCheckBoxOnChange(false, "aircraft", 10)}
            isSelect={options.subs.aircraft[10]}
          />
          <OptionCheckbox
            text={aircraftMaintenanceSections[11]}
            handleOnchange={() => handleCheckBoxOnChange(false, "aircraft", 11)}
            isSelect={options.subs.aircraft[11]}
          />
          <OptionCheckbox
            text={aircraftMaintenanceSections[12]}
            handleOnchange={() => handleCheckBoxOnChange(false, "aircraft", 12)}
            isSelect={options.subs.aircraft[12]}
          />
        </details>
        <details>
          <summary>
            <input
              type="checkbox"
              onChange={() => handleCheckBoxOnChange(true, "powerplant")}
              defaultChecked={options.books.powerplant}
            />
            {booksKeys[4].toUpperCase()}
          </summary>
          <OptionCheckbox
            text={powerplantSections[0]}
            handleOnchange={() =>
              handleCheckBoxOnChange(false, "powerplant", 0)
            }
            isSelect={options.subs.powerplant[0]}
          />
          <OptionCheckbox
            text={powerplantSections[1]}
            handleOnchange={() =>
              handleCheckBoxOnChange(false, "powerplant", 1)
            }
            isSelect={options.subs.powerplant[1]}
          />
          <OptionCheckbox
            text={powerplantSections[2]}
            handleOnchange={() =>
              handleCheckBoxOnChange(false, "powerplant", 2)
            }
            isSelect={options.subs.powerplant[2]}
          />
          <OptionCheckbox
            text={powerplantSections[3]}
            handleOnchange={() =>
              handleCheckBoxOnChange(false, "powerplant", 3)
            }
            isSelect={options.subs.powerplant[3]}
          />
          <OptionCheckbox
            text={powerplantSections[4]}
            handleOnchange={() =>
              handleCheckBoxOnChange(false, "powerplant", 4)
            }
            isSelect={options.subs.powerplant[4]}
          />
          <OptionCheckbox
            text={powerplantSections[5]}
            handleOnchange={() =>
              handleCheckBoxOnChange(false, "powerplant", 5)
            }
            isSelect={options.subs.powerplant[5]}
          />
          <OptionCheckbox
            text={powerplantSections[6]}
            handleOnchange={() =>
              handleCheckBoxOnChange(false, "powerplant", 6)
            }
            isSelect={options.subs.powerplant[6]}
          />
          <OptionCheckbox
            text={powerplantSections[7]}
            handleOnchange={() =>
              handleCheckBoxOnChange(false, "powerplant", 7)
            }
            isSelect={options.subs.powerplant[7]}
          />
        </details>
      </div>
      <div>
        <input
          type="button"
          value={
            options.time === 'unlimited'
            ? 'Time: Unlimited'
            : options.time === 'half'
            ? 'Time: 30 sec Per Question'
            : options.time === 'full'
            ? 'Time: 60 sec Per Question'
            : 'Time: 60 min Per Books'
          }
          onClick={() => {
            setTime((prevState) =>
              prevState === "Time: Unlimited"
                ? "Time: 30 sec Per Question"
                : prevState === "Time: 30 sec Per Question"
                ? "Time: 60 sec/Question"
                : prevState === "Time: 60 sec Question"
                ? "Time: 60 min Per Book"
                : "Time: Unlimited"
            );
            setOptions((prevState) => ({
              subs: prevState.subs,
              books: prevState.books,
              shuffle: prevState.shuffle,
              start: prevState.start,
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
              start: prevState.start,
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
            let isSectionSelected = false;
            Object.keys(options.subs).forEach((name) => {
              options.subs[name].forEach((section) => {
                if (section && options.books[name]) isSectionSelected = true;
              });
            });
            if (isBookSelected && isSectionSelected) {
              setOptions((prevState) => ({
                time: prevState.time,
                subs: prevState.subs,
                books: prevState.books,
                shuffle: prevState.shuffle,
                start: true,
              }));
              navigate("/main");
            } else {
              setError("Select atleast one book and section");
            }
          }}
        />
      </div>
    </div>
  );
};

export default Option;
