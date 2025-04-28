import { Controller, OnInit, OnStart } from "app-life";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "../UI/App.js";

@Controller({})
export class ApplicationController {
  constructor() {
    console.log("ApplicationController initialized");
  }

  @OnInit()
  private Init() {
    console.log("ApplicationController initialized");
  }

  @OnStart()
  private Start() {
    const container = document.getElementById("root");

    const root = createRoot(container!);

    root.render(
      React.createElement(React.StrictMode, {}, React.createElement(App))
    );
  }
}
