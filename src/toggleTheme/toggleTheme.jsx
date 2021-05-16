import React from "react";

import "./toggleTheme.css";

export default function ToggleTheme({ bg, color, handleChangeTheme, ch }) {
  console.log(ch);
  return (
    <div className="toggle-container">
      <div className="theme-num">
        <p>1</p>
        <p>2</p>
        <p>3</p>
      </div>
      <div className="toggle-theme" style={{ backgroundColor: bg }}>
        <label className="rd">
          <input
            type="radio"
            name="toggle"
            value="theme1"
            onClick={handleChangeTheme}
            checked={ch === "theme1"}
          />
          <div id="toggle-radio" style={{ backgroundColor: color }}></div>
        </label>
        <label className="rd">
          <input
            type="radio"
            name="toggle"
            value="theme2"
            onClick={handleChangeTheme}
            checked={ch === "theme2"}
          />
          <div id="toggle-radio" style={{ backgroundColor: color }}></div>
        </label>
        <label className="rd">
          <input
            type="radio"
            name="toggle"
            value="theme3"
            onClick={handleChangeTheme}
            checked={ch === "theme3"}
          />
          <div id="toggle-radio" style={{ backgroundColor: color }}></div>
        </label>
      </div>
    </div>
  );
}
