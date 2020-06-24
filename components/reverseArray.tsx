import * as React from "react";
import Prism from "prismjs";
import "prismjs/components/prism-typescript";
import reverseArrayString from "../reverseArrString";

class ReverseArray extends React.Component {
  componentDidMount() {
    Prism.highlightAll();
  }
  render() {
    return (
      <pre>
        <code className="language-ts">{reverseArrayString}</code>
      </pre>
    );
  }
}

export default ReverseArray;
