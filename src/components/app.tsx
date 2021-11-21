import * as React from "react";
import * as ReactDOM from "react-dom";
import { initializeIcons } from "@fluentui/font-icons-mdl2";
import Root from './Root';
initializeIcons();

function render() {
  ReactDOM.render(<Root/>, document.getElementById("root"));
}

render();
