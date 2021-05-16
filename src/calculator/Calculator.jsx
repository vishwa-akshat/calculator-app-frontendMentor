import React, { useState } from "react";

import ToggleTheme from "../toggleTheme/toggleTheme";

import "./Calculator.css";

const theme1 = {
  mainBackground: "hsl(222, 26%, 31%)",
  toggleKeypadBackground: "hsl(223, 31%, 20%)",
  screenBackground: "hsl(224, 36%, 15%)",
  keyBackground: "hsl(225, 21%, 49%)",
  keyShadow: "hsl(224, 28%, 35%)",
  keyMinorBackground: "hsl(6, 63%, 50%)",
  keyMinorShadow: "hsl(6, 70%, 34%)",
  keyMajorBackground: "hsl(30, 25%, 89%)",
  keyMajorShadow: "hsl(28, 16%, 65%)",
  textMain: "#fff",
  textWhite: "#fff",
  textDark: "hsl(221, 14%, 31%)",
};
const theme2 = {
  mainBackground: "hsl(0, 0%, 90%)",
  toggleKeypadBackground: "hsl(0, 5%, 81%)",
  screenBackground: "hsl(0, 0%, 93%)",
  keyBackground: "hsl(185, 42%, 37%)",
  keyShadow: "hsl(185, 58%, 25%)",
  keyMinorBackground: "hsl(25, 98%, 40%)",
  keyMinorShadow: "hsl(25, 99%, 27%)",
  keyMajorBackground: "hsl(45, 7%, 89%)",
  keyMajorShadow: "hsl(35, 11%, 61%)",
  textMain: "hsl(60, 10%, 19%)",
  textWhite: "#fff",
  textDark: "hsl(60, 10%, 19%)",
};
const theme3 = {
  mainBackground: "hsl(268, 75%, 9%)",
  toggleKeypadBackground: "hsl(268, 71%, 12%)",
  screenBackground: "hsl(268, 71%, 12%)",
  keyBackground: "hsl(281, 89%, 26%)",
  keyShadow: "hsl(285, 91%, 52%)",
  keyMinorBackground: "hsl(176, 100%, 44%)",
  keyMinorShadow: "hsl(177, 92%, 70%)",
  keyMajorBackground: "hsl(268, 47%, 21%)",
  keyMajorShadow: "hsl(290, 70%, 36%)",
  textWhite: "#fff",
  textDark: "hsl(198, 20%, 13%)",
  textLight: "hsl(52, 100%, 62%)",
  textMain: "hsl(52, 100%, 62%)",
  tB: "hsl(198, 20%, 13%)",
};

export default function Calculator() {
  const [screen, setScreen] = useState("");
  const [Theme, setTheme] = useState({ theme: theme1, name: "theme1" });

  function btnClick(e) {
    setScreen(screen + e.target.value);
  }
  function delScreen(e) {
    setScreen(screen.substr(0, screen.length - 1));
    // console.log(screen.splice(0, screen.length));
  }
  function handleReset(e) {
    setScreen("");
  }

  function handleSolve(e) {
    // eslint-disable-next-line no-eval
    let newValue = eval(screen);
    setScreen(newValue);
  }

  function handleChangeTheme(e) {
    let theme =
      e.target.value === "theme1"
        ? theme1
        : e.target.value === "theme2"
        ? theme2
        : theme3;
    let name =
      e.target.value === "theme1"
        ? "theme1"
        : e.target.value === "theme2"
        ? "theme2"
        : "theme3";
    setTheme({ theme, name });
  }
  const { theme, name } = Theme;
  return (
    <div
      className="calculator"
      style={{ backgroundColor: theme.mainBackground }}
    >
      <div className="container">
        <div className="head" style={{ color: theme.textMain }}>
          <h2>calc</h2>
          <div className="theme">
            <p>THEME</p>
            <ToggleTheme
              bg={theme.toggleKeypadBackground}
              color={theme.keyMinorBackground}
              handleChangeTheme={handleChangeTheme}
              ch={name}
            />
          </div>
        </div>
        <input
          type="text"
          defaultValue={screen}
          className="screen"
          style={{
            backgroundColor: theme.screenBackground,
            color: theme.textMain,
          }}
        />
        <div
          className="numpad"
          style={{ backgroundColor: theme.toggleKeypadBackground }}
        >
          <div className="num">
            <button
              onClick={btnClick}
              value="7"
              className="btn"
              style={{
                color: theme.textLight ? theme.textLight : theme.textDark,
                backgroundColor: theme.keyMajorBackground,
                boxShadow: `1px -7px 0px -3px ${theme.keyMajorShadow} inset`,
              }}
            >
              7
            </button>
          </div>
          <div className="num">
            <button
              onClick={btnClick}
              value="8"
              className="btn"
              style={{
                color: theme.textLight ? theme.textLight : theme.textDark,
                backgroundColor: theme.keyMajorBackground,
                boxShadow: `1px -7px 0px -3px ${theme.keyMajorShadow} inset`,
              }}
            >
              8
            </button>
          </div>
          <div className="num">
            <button
              onClick={btnClick}
              value="9"
              className="btn"
              style={{
                color: theme.textLight ? theme.textLight : theme.textDark,
                backgroundColor: theme.keyMajorBackground,
                boxShadow: `1px -7px 0px -3px ${theme.keyMajorShadow} inset`,
              }}
            >
              9
            </button>
          </div>
          <div className="num">
            <button
              onClick={delScreen}
              className="btn del"
              style={{
                color: theme.textWhite,
                backgroundColor: theme.keyBackground,
                boxShadow: ` 1px -7px 0px -3px ${theme.keyShadow} inset`,
              }}
            >
              DEL
            </button>
          </div>
          <div className="num">
            <button
              onClick={btnClick}
              value="4"
              className="btn"
              style={{
                color: theme.textLight ? theme.textLight : theme.textDark,
                backgroundColor: theme.keyMajorBackground,
                boxShadow: `1px -7px 0px -3px ${theme.keyMajorShadow} inset`,
              }}
            >
              4
            </button>
          </div>
          <div className="num">
            <button
              onClick={btnClick}
              value="5"
              className="btn"
              style={{
                color: theme.textLight ? theme.textLight : theme.textDark,
                backgroundColor: theme.keyMajorBackground,
                boxShadow: `1px -7px 0px -3px ${theme.keyMajorShadow} inset`,
              }}
            >
              5
            </button>
          </div>
          <div className="num">
            <button
              onClick={btnClick}
              value="6"
              className="btn"
              style={{
                color: theme.textLight ? theme.textLight : theme.textDark,
                backgroundColor: theme.keyMajorBackground,
                boxShadow: `1px -7px 0px -3px ${theme.keyMajorShadow} inset`,
              }}
            >
              6
            </button>
          </div>
          <div className="num">
            <button
              onClick={btnClick}
              value="+"
              className="btn plus"
              style={{
                color: theme.textLight ? theme.textLight : theme.textDark,
                backgroundColor: theme.keyMajorBackground,
                boxShadow: `1px -7px 0px -3px ${theme.keyMajorShadow} inset`,
              }}
            >
              +
            </button>
          </div>
          <div className="num">
            <button
              onClick={btnClick}
              value="1"
              className="btn"
              style={{
                color: theme.textLight ? theme.textLight : theme.textDark,
                backgroundColor: theme.keyMajorBackground,
                boxShadow: `1px -7px 0px -3px ${theme.keyMajorShadow} inset`,
              }}
            >
              1
            </button>
          </div>
          <div className="num">
            <button
              onClick={btnClick}
              value="2"
              className="btn"
              style={{
                color: theme.textLight ? theme.textLight : theme.textDark,
                backgroundColor: theme.keyMajorBackground,
                boxShadow: `1px -7px 0px -3px ${theme.keyMajorShadow} inset`,
              }}
            >
              2
            </button>
          </div>
          <div className="num">
            <button
              onClick={btnClick}
              value="3"
              className="btn"
              style={{
                color: theme.textLight ? theme.textLight : theme.textDark,
                backgroundColor: theme.keyMajorBackground,
                boxShadow: `1px -7px 0px -3px ${theme.keyMajorShadow} inset`,
              }}
            >
              3
            </button>
          </div>
          <div className="num">
            <button
              onClick={btnClick}
              value="-"
              className="btn minus"
              style={{
                color: theme.textLight ? theme.textLight : theme.textDark,
                backgroundColor: theme.keyMajorBackground,
                boxShadow: `1px -7px 0px -3px ${theme.keyMajorShadow} inset`,
              }}
            >
              -
            </button>
          </div>
          <div className="num">
            <button
              onClick={btnClick}
              value="."
              className="btn"
              style={{
                color: theme.textLight ? theme.textLight : theme.textDark,
                backgroundColor: theme.keyMajorBackground,
                boxShadow: `1px -7px 0px -3px ${theme.keyMajorShadow} inset`,
              }}
            >
              .
            </button>
          </div>
          <div className="num">
            <button
              onClick={btnClick}
              value="0"
              className="btn"
              style={{
                color: theme.textLight ? theme.textLight : theme.textDark,
                backgroundColor: theme.keyMajorBackground,
                boxShadow: `1px -7px 0px -3px ${theme.keyMajorShadow} inset`,
              }}
            >
              0
            </button>
          </div>
          <div className="num">
            <button
              onClick={btnClick}
              value="/"
              className="btn div"
              style={{
                color: theme.textLight ? theme.textLight : theme.textDark,
                backgroundColor: theme.keyMajorBackground,
                boxShadow: `1px -7px 0px -3px ${theme.keyMajorShadow} inset`,
              }}
            >
              /
            </button>
          </div>
          <div className="num">
            <button
              onClick={btnClick}
              value="*"
              className="btn mul"
              style={{
                color: theme.textLight ? theme.textLight : theme.textDark,
                backgroundColor: theme.keyMajorBackground,
                boxShadow: `1px -7px 0px -3px ${theme.keyMajorShadow} inset`,
              }}
            >
              x
            </button>
          </div>
          <div className="num reset">
            <button
              onClick={handleReset}
              className="btn "
              style={{
                backgroundColor: theme.keyBackground,
                boxShadow: ` 1px -7px 0px -3px ${theme.keyShadow} inset`,
                color: theme.textWhite,
              }}
            >
              RESET
            </button>
          </div>
          <div className="num  eq">
            <button
              onClick={handleSolve}
              className="btn"
              style={{
                backgroundColor: theme.keyMinorBackground,
                boxShadow: ` 1px -7px 0px -3px ${theme.keyMinorShadow} inset`,
                color: theme.tB ? theme.tB : theme.textWhite,
              }}
            >
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
