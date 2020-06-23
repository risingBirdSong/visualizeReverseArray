import * as React from "react";
import reverseArray from "../reverseArray";
interface ArrayProps {
  array: (string | number)[];
}

const Array = (props: ArrayProps) => {
  return (
    <div className="array">
      <span className="openBracket bracket">[</span>
      {props.array.map((val, idx, arr) => {
        return idx < arr.length - 1 ? (
          <div className="value">
            <span key={val}>{val}</span>
            <span className="comma"> , </span> &nbsp;
          </div>
        ) : (
          <span className="value" key={val}>
            {val}
          </span>
        );
      })}
      <span className="closeBracket bracket">]</span>
    </div>
  );
};

export default Array;
