import { Module } from "app-life";
import { ApplicationController } from "./Controllers/ApplicationController.js";

@Module([ApplicationController])
export class ApplicationModule {}
