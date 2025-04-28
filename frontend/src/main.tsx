import { AppLife } from "app-life";
import { ApplicationModule } from "./Features/Application/ApplicationModule.js";
import "./main.css";

AppLife.LoadModules([ApplicationModule]);
AppLife.Start();
