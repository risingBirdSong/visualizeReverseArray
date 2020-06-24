import * as React from "react";
import reverseArray from "../reverseArray";

const Array = () => {
  const [arr, setArr] = React.useState([1, 2, 3, 4, 5, 6]);
  const [startIdx, setStart] = React.useState<number>(-1);
  const [endIdx, setEnd] = React.useState<number | undefined>(undefined);
  const [begun, begin] = React.useState<boolean>(false);
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

  React.useEffect(() => {
    stepping === false && startIdx + 1 >= endIdx
      ? console.log("were done")
      : console.log("not done");
  }, [startIdx, stepping, endIdx]);
  /*
  interesting, learned something new about dependencies with useEffect,   i was expecting to log
 "were done" after the last reverse took place, not done kept logging, later realizing that i hadn't
 included stepping in the list of dependencies, so i think useEffect was including stepping in it's logic
 and therefore the logic wasnt behaving as expected.

 including stepping in the dependencies fixed the bug. 
 Another solution is to leave out all the depencies which forces this effect to run everytime
 but i think including the correct dependencies is the more correct solution.
  */

  return (
    <div>
      <div className="development">
        <h1>stepping {String(stepping)}</h1>
        <h3>start idx</h3> {startIdx}
        <h3>end idx</h3> {endIdx}
        <h3 style={{ color: "red" }}>start value {arr[startIdx]}</h3>
        <h3 style={{ color: "purple" }}>end value {arr[endIdx]}</h3>
        <br />
      </div>
      <nav>
        {!stepping ? (
          <button onClick={handleStep}>take a step</button>
        ) : (
          <button onClick={handleReassign}> reverse values</button>
        )}
        {/* <span className="line"></span> */}
      </nav>
      <div className="array">
        {begun ? (
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
