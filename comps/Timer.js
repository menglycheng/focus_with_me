import React, { useState, useEffect } from "react";
import { FiEdit } from "react-icons/fi";
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";

import styles from "../styles/Timer.module.css";

const Timer = () => {
  // const [sendRequest, setSendRequest] = useState(false);
  // const [second, setSecond] = useState(5);
  const [active, setActive] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalID, setIntervalID] = useState(null);
  const [data, setData] = useState({
    hrs: 0,
    mins: 0,
    secs: 0,
  });
  const getTime = (e) => {
    e.preventDefault();
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  };

  const [[hrs, mins, secs], setTime] = React.useState([0, 0, 0]);
  const setTimer = () => {
    setTime([parseInt(data.hrs), parseInt(data.mins), parseInt(data.secs)]);
  };

  useEffect(() => {
    if (isRunning) {
      const id = window.setInterval(() => {
        // console.log("tick");

        if (hrs === 0 && mins === 0 && secs === 0) {
          setIsRunning(false);
          setTime([parseInt(0), parseInt(0), parseInt(0)]);
        } else if (mins === 0 && secs === 0) {
          setTime([hrs - 1, 59, 59]);
        } else if (secs === 0) {
          setTime([hrs, mins - 1, 59]);
        } else {
          setTime([hrs, mins, secs - 1]);
        }
      }, 1000);

      return () => {
        window.clearInterval(id);
      };
    } else {
    }
  });

  return (
    <div className={styles.timer_container}>
      <div className={styles.timer_box}>
        <p>{`${hrs.toString().padStart(2, "0")}:${mins
          .toString()
          .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`}</p>
        {isRunning ? (
          <button
            onClick={() => {
              setIsRunning(false);
            }}
          >
            <BsFillPauseFill className={styles.timer_icon} />
          </button>
        ) : (
          <button
            disabled={isRunning}
            onClick={() => {
              setIsRunning(true);
            }}
          >
            <BsFillPlayFill className={styles.timer_icon} />
          </button>
        )}
        <button onClick={() => setActive(!active)}>
          <FiEdit className={styles.timer_icon} />
        </button>
      </div>
      {active && (
        <div className={styles.set_timer__box}>
          <input
            type="number"
            onChange={(e) => getTime(e)}
            id="hrs"
            max="23"
            min="0"
            value={data.hrs}
            autoComplete="off"
          />
          <input
            type="number"
            onChange={(e) => getTime(e)}
            id="mins"
            max="59"
            min="0"
            value={data.mins}
            autoComplete="off"
          />
          <input
            type="number"
            onChange={(e) => getTime(e)}
            id="secs"
            max="59"
            min="0"
            value={data.secs}
            autoComplete="off"
          />

          <button onClick={setTimer}>Set</button>
        </div>
      )}
    </div>
  );
};

export default Timer;
