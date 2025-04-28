import { AppLife } from "app-life";
import { ApplicationModule } from "./Features/Application/ApplicationModule.js";
import { GreetingModule } from "./Features/Greeting/GreetingModule.js";
import "./main.css";

AppLife.LoadModules([ApplicationModule, GreetingModule]);
AppLife.Start();
