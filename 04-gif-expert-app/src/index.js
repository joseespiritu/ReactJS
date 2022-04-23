// Before
/* import React from "react";
import ReactDOM from "react-dom";
import GiftExperApp from "./GiftExperApp";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(<GiftExperApp />, document.getElementById("root"));

reportWebVitals(); */

// After +18
import React from "react";
import { createRoot } from "react-dom/client";
import GiftExperApp from "./GiftExperApp";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const divRoot = document.getElementById("root");
const root = createRoot(divRoot);

root.render(<GiftExperApp />);

reportWebVitals();
