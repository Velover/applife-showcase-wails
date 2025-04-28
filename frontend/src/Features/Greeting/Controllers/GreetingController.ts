import { Controller } from "app-life";
import { atom } from "value-stores";
import { useAtom } from "../../../Hooks/useAtom.js";

@Controller({})
export class GreetingController {
  constructor() {
    console.log("GreetingController initialized");
  }

  public Greet(name: string): string {
    return `Hello, ${name}!`;
  }

  public ToggleGreetingUIVisibility() {
    this.is_greeting_ui_visible_atom_((v) => !v);
  }

  public useIsGreetingUIVisible() {
    return useAtom(this.is_greeting_ui_visible_atom_);
  }

  private is_greeting_ui_visible_atom_ = atom(false);
}
