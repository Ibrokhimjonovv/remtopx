import React, { useState, useEffect } from "react";
import "./units.scss";

const sizes = [
  { id: 1, from: "1 px", to: "1 pixel (base unit)", equal: true },
  { id: 2, from: "1 em", to: 16, equal: true },
  { id: 3, from: "1 rem", to: 16, equal: true },
  { id: 4, from: "1 pt", to: 1.333, equal: true },
  { id: 5, from: "1 pc (pica)", to: 16, equal: true },
  { id: 6, from: "1 in (inch)", to: 96, equal: true },
  { id: 7, from: "1 cm", to: 37.8, equal: false },
  { id: 8, from: "1 mm", to: 3.78, equal: false },
  { id: 9, from: "1 %", to: "relative to the parent element’s size", equal: true },
  { id: 10, from: "1 vw", to: "1% of the viewport’s width", equal: true },
  { id: 11, from: "1 vh", to: "1% of the viewport’s height", equal: true },
];

const unitToPx = {
  px: 1,
  em: 16,
  rem: 16,
  pt: 1.333,
  pc: 16,
  in: 96,
  cm: 37.8,
  mm: 3.78,
  vw: window.innerWidth / 100,
  vh: window.innerHeight / 100,
};

const units = Object.keys(unitToPx);

const UnitConverter = () => {
  const [fromValue, setFromValue] = useState("");
  const [fromUnit, setFromUnit] = useState("px");
  const [toUnit, setToUnit] = useState("em");

  const formatNumber = (num) => {
    if (isNaN(num)) return "";
    const fixed = num.toFixed(2);
    return fixed.endsWith(".00") ? fixed.split(".")[0] : fixed;
  };

  const convert = () => {
    if (fromValue === "") return "";
    const pxValue = parseFloat(fromValue) * unitToPx[fromUnit];
    const result = pxValue / unitToPx[toUnit];
    return formatNumber(result);
  };

  return (
    <div id="converter-container">
      <div id="inpts">
        <div className="input-container">
          <input
            type="text"
            value={fromValue}
            placeholder="From"
            onChange={(e) => setFromValue(e.target.value)}
          />
          <select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
            {units.map((u) => (
              <option key={u} value={u}>
                {u}
              </option>
            ))}
          </select>
        </div>

        <span>
          <ion-icon name="swap-horizontal-outline"></ion-icon>
        </span>

        <div className="input-container">
          <input type="text" value={convert()} placeholder="To" readOnly />
          <select value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
            {units.map((u) => (
              <option key={u} value={u}>
                {u}
              </option>
            ))}
          </select>
        </div>
      </div>

      {fromValue ? (
        <p>
          {fromValue} {fromUnit} = {convert()} {toUnit}
        </p>
      ) : (
        <p>Write to input...</p>
      )}
    </div>
  );
};

const UnitsOfMeasurement = () => {
  return (
    <div id="units">
      <h2 id="tt">Units of Measurement</h2>
      <div className="table">
        {/* <div className="measurement-ad measurement-ad-1"></div> */}
        <table>
          <thead>
            <tr>
              <th>Any sizes</th>
              <th>= / ≈</th>
              <th>...px</th>
            </tr>
          </thead>
          <tbody>
            {sizes.map((size, indx) => (
              <tr key={indx}>
                <td>{size.from}</td>
                <td>{size.equal ? "=" : "≈"}</td>
                <td>
                  {size.to === Number(size.to) ? `${size.to} px` : `${size.to}`}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <div className="measurement-ad measurement-ad-2"></div> */}
      </div>
      <h2 id="top">Measurement converter</h2>
      <UnitConverter />
    </div>
  );
};

export default UnitsOfMeasurement;
