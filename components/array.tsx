import * as React from "react";
import reverseArray from "../reverseArray";
import ReverseArrayCodeBLock from "./reverseArray";
const Array = () => {
  const [arr, setArr] = React.useState([1, 2, 3, 4, 5, 6]);
  const [startIdx, setStart] = React.useState<number>(-1);
  const [endIdx, setEnd] = React.useState<number | undefined>(undefined);
  const [begun, begin] = React.useState<boolean>(false);
  const [finished, finish] = React.useState(false);
  const [firstSwap, setFirstSwap] = React.useState<number | undefined>(
    undefined
  );
  const [stepping, takeStep] = React.useState<boolean>(false);

  const [dynmcWidth, setWidth] = React.useState<number>(260);
  const [lastSwap, setLastSwap] = React.useState<number | undefined>(undefined);

  const handleStep = () => {
    begin(true); // weve begun
    takeStep(!stepping);
    setWidth(dynmcWidth - 70); //styling arc
    let startInc = startIdx + 1 || 0;
    let endDec = endIdx - 1 || arr.length - 1;
    setStart(startInc);
    setEnd(endDec);
  };

  const handleReassign = () => {
    takeStep(!stepping);
    let copyToMutate = arr.map((x) => x);
    let temp = copyToMutate[startIdx];
    copyToMutate[startIdx] = copyToMutate[endIdx];
    copyToMutate[endIdx] = temp;
    setArr(copyToMutate);
  };

  const startOver = () => {
    setArr([1, 2, 3, 4, 5, 6]);
    setStart(-1);
    setEnd(undefined);
    begin(false);
    finish(false);
    setWidth(260);
  };

  React.useEffect(() => {
    stepping === false && startIdx + 1 >= endIdx ? finish(true) : "";
  }, [startIdx, stepping, endIdx]);

  // React.useEffect(() => {
  //   finished === true ?
  // }, [finished]);

  return (
    <main>
      <ReverseArrayCodeBLock arr={arr} startIdx={startIdx} endIdx={endIdx} />
      <div className="visualizer">
        <div className="messages">
          <div>
            {" "}
            {finished ? (
              <h1>
                {" "}
                <span className="dancingArray">[]</span>{" "}
                {"array has been reversed!"}{" "}
                <span className="dancingArray">[]</span>
              </h1>
            ) : (
              ""
            )}
          </div>
        </div>
        <nav>
          {finished ? (
            <button onClick={startOver}>start over</button>
          ) : !stepping ? (
            <button onClick={handleStep}>take a step</button>
          ) : (
            <button onClick={handleReassign}> reverse values</button>
          )}
          {/* <span className="line"></span> */}
        </nav>
        <div className="array">
          {begun && !finished ? (
            <span
              className="box"
              style={{
                width: dynmcWidth,
              }}
            ></span>
          ) : (
            ""
          )}
          <span className="openBracket bracket">[</span>
          {arr.map((val, idx, arr) => {
            return finished ? (
              <div key={val} className="endvalues">
                <span style={{ color: "gold", fontSize: "50px" }}>{val}</span>
                {idx < arr.length - 1 ? <span className="comma"> , </span> : ""}
              </div>
            ) : idx < arr.length - 1 ? (
              <div key={val} className="values">
                <span
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
                key={"last"}
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
            );
          })}
          <span className="closeBracket bracket">]</span>
        </div>
      </div>
    </main>
  );
};

export default Array;
