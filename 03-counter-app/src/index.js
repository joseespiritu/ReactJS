import React from "react";
import ReactDOM from "react-dom";
import CounterApp from "./CounterApp";
import PrimeraApp from "./PrimeraApp";
import "./index.css";

const divRoot = document.querySelector("#app");

// ReactDOM.render(<PrimeraApp mensaje="Hola, Mundo" />, divRoot);
ReactDOM.render(<CounterApp value={10} />, divRoot);
