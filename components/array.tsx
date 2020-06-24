import * as React from "react";
import reverseArray from "../reverseArray";

const Array = () => {
  const [arr, setArr] = React.useState([1, 2, 3, 4, 5, 6]);
  const [startIdx, setStart] = React.useState<number | undefined>(undefined);
  const [endIdx, setEnd] = React.useState<number | undefined>(undefined);
  const [firstSwap, setFirstSwap] = React.useState<number | undefined>(
    undefined
  );
  const [lastSwap, setLastSwap] = React.useState<number | undefined>(undefined);

  const handleStep = () => {
    let startInc = startIdx + 1 || 0;
    let endDec = endIdx - 1 || arr.length - 1;
    setStart(startInc);
    setEnd(endDec);
  };

  return (
    <div>
      <div className="development">
        <h3>start idx</h3> {startIdx}
        <h3>end idx</h3> {endIdx}
        <h3 style={{ color: "red" }}>start value {arr[startIdx]}</h3>
        <h3 style={{ color: "purple" }}>end value {arr[endIdx]}</h3>
        <br />
      </div>
      <nav>
        <button onClick={handleStep}>reverse array step</button>
      </nav>
      <div className="array">
        <span className="openBracket bracket">[</span>
        {arr.map((val, idx, arr) => {
          return idx < arr.length - 1 ? (
            <div className="value">
              <span
                key={val}
                className={
                  idx === startIdx
                    ? "firstVal"
                    : idx === endIdx
                    ? "lastVal"
                    : "regularVal"
                }
              >
                {val}
              </span>
              <span className="comma"> , </span> &nbsp;
            </div>
          ) : (
            <span
              className={
                idx === startIdx
                  ? "firstVal"
                  : idx === endIdx
                  ? "lastVal"
                  : "regularVal"
              }
              key={val}
            >
              {val}
            </span>
          );
        })}
        <span className="closeBracket bracket">]</span>
      </div>
    </div>
  );
};

export default Array;
