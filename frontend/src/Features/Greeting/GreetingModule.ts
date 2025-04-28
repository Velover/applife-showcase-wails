import { Module } from "app-life";
import { GreetingController } from "./Controllers/GreetingController.js";

@Module([GreetingController])
export class GreetingModule {}
