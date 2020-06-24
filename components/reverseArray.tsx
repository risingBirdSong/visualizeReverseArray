import * as React from "react";
import Prism from "prismjs";
import "prismjs/components/prism-typescript";
import reverseArrayString from "../reverseArrString";
import reverseArray from "../reverseArray";

interface representProps {
  startIdx: number;
  endIdx: number;
  arr: number[];
}
class ReverseArray extends React.Component<representProps> {
  constructor(props: representProps) {
    super(props);
    this.represent = this.represent.bind(this);
  }

  represent() {
    return `
      const reverseArray = (arr: number[]): number[] => {
        let start =  ${this.props.startIdx || 0};
        let end = ${this.props.endIdx || null};
        while (start < end) {
          let temp = arr[start];
          arr[start] = arr[end];
          arr[end] = temp;
          start++; 
          end--;
        }
        return arr;
      };
`;
  }

  componentDidMount() {
    Prism.highlightAll();
  }
  componentDidUpdate() {
    Prism.highlightAll();
  }
  render() {
    return (
      <pre>
        <span className="codeTest"> </span>
        <code className="language-ts">{this.represent()}</code>
      </pre>
    );
  }
}

export default ReverseArray;
