import React, { useState } from "react";
import "./style.css";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import "react-day-picker/dist/style.css";

const Schedular = ({ setActive, timing, setTiming }) => {
  const [value, setValue] = useState(new Date());
  const [show, setShow] = useState();

  const current = new Date();

  const handleRemove = (index) => {
    timing.splice(index, 1);
    setTiming([...timing]);
  };

  const handleAdd = (e, time) => {
    e.stopPropagation();
    const timingStr = `${format(value, "PPP")} at ${time}`;
    setTiming([...timing, timingStr]);
    setShow(-1);
  };

  const handleContinue = () => {
    setActive("Your Info");
  };

  const handleAddandContinue = (e, time) => {
    handleAdd(e, time);
    handleContinue();
  };

  return (
    <div className="schedular-box">
      <DayPicker
        mode="single"
        selected={value}
        onSelect={setValue}
        showOutsideDays
        startMonth={new Date()}
        disabled={[
          {
            before: new Date(),
            after: new Date(2024, 8, 1),
          },
          {
            dayOfWeek: [0, 2],
          },
        ]}
        modifiersClassNames={{
          selected: "my-selected",
          today: "my-today",
        }}
      />
      <div className="timing-schedular-box">
        <div>
          {value && <p>{format(value, "PPPP")}</p>}
          <div className="timing-box">
            {["10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM"].map(
              (time, index) => (
                <div
                  onClick={() => {
                    setShow(index);
                  }}
                >
                  <p>{time}</p>
                  <ul
                    className={
                      show === index
                        ? "show timing-options-box"
                        : "timing-options-box"
                    }
                  >
                    <li
                      onClick={(e) => {
                        handleAddandContinue(e, time);
                      }}
                    >
                      Select and continue
                    </li>
                    <li
                      onClick={(e) => {
                        handleAdd(e, time);
                      }}
                    >
                      Select and add another time
                    </li>
                    <li>Select and make recurring</li>
                  </ul>
                </div>
              )
            )}
          </div>
        </div>
        {timing.length > 0 && (
          <div className="selected-times-box">
            <h4>TIMES ADDED:</h4>
            {timing.map((time, index) => (
              <div className="selected-time">
                <p>{time}</p>
                <div
                  onClick={() => {
                    handleRemove(index);
                  }}
                >
                  REMOVE
                </div>
              </div>
            ))}
            <div className="continue-btn" onClick={handleContinue}>
              CONTINUE
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Schedular;
