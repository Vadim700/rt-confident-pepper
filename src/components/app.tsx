import React from "react";
import { Header } from "./header/component";
import { Body } from "./body/component";
import { Footer } from "./footer/component";


export function App() {
  return (
    <div className="App">
      <Header title="Confident Pepper"/>
      <Body />
      <Footer />
    </div>
  );
}

