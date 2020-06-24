import * as React from "react";
import * as ReactDOM from "react-dom";
import Array from "./components/array";
import Page from "./components/prismtest";
import ReverseArrayCodeBLock from "./components/reverseArray";
const App = () => {
  return (
    <main>
      {/* <Page /> */}
      <ReverseArrayCodeBLock />
      <div className="visualizer">
        <Array />
      </div>
    </main>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
