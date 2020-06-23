import * as React from "react";
import * as ReactDOM from "react-dom";
import Array from "./components/array";
import Page from "./components/prismtest";
import ReverseArray from "./components/reverseArray";
const App = () => {
  return (
    <main>
      {/* <Page /> */}
      <ReverseArray />
      <nav>
        <button>reverse array</button>
      </nav>
      <Array array={[1, 2, 3, 4, 5, 6]} />
    </main>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
