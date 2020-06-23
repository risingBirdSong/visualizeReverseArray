import * as React from "react";
import Prism from "prismjs";
const code = `
let length = 10;
for (let i = 0; i < length; i ++){
  console.log(i);
}
`.trim();
class Page extends React.Component {
  componentDidMount() {
    // You can call the Prism.js API here
    // Use setTimeout to push onto callback queue so it runs after the DOM is updated
    setTimeout(() => Prism.highlightAll(), 0);
  }
  render() {
    return (
      <pre className="line-numbers">
        <code className="language-js">{code}</code>
      </pre>
    );
  }
}
setTimeout(() => Prism.highlightAll(), 0);
export default Page;
