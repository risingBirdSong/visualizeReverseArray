import * as React from "react";
import Prism from "prismjs";
import "prismjs/components/prism-typescript";

//@ts-ignore
// import reverseArray from "../reverseArrayJS";
import reverseArray from "../reverseArray";

const reverseArrayString = `
const reverseArray = <T>(arr: T[]): T[] => {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++; end--;
  }
  return arr;
}
`;

class ReverseArray extends React.Component {
  componentDidMount() {
    Prism.highlightAll();
    // setTimeout(() => {
    // }, 0);
  }
  render() {
    return (
      // data-dependencies="typescript"
      <pre>
        <code className="language-ts">{reverseArrayString}</code>
      </pre>
    );
  }
}

export default ReverseArray;
