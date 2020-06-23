import * as React from "react";
import * as ReactDOM from "react-dom";
import Array from "./components/array";
import Page from "./components/prismtest";

const App = () => {
  return (
    <div>
      <Page />
      <nav>
        <button>reverse array</button>
      </nav>
      <Array array={[1, 2, 3, 4, 5, 6]} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
