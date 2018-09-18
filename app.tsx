import * as React from "react";
import * as ReactDOM from "react-dom";
import HeaderComponent from "./src/HeaderComponent";
import BodyComponent from "./src/BodyComponent";
import FooterComponent from './src/FooterComponent';

ReactDOM.render(
  <div>    
    <HeaderComponent/>
    <BodyComponent/>
    <FooterComponent company="Booz Allen Hamilton" address="San Diego, CA" date={new Date()} />
  </div>,
  document.getElementById("root")
);