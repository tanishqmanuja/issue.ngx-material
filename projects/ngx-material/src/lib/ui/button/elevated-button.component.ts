import "@material/web/button/elevated-button.js";
import { Component } from "@angular/core";
import { MdButtonComponent } from "./internal/button.component";

@Component({
  standalone: true,
  selector: "md-elevated-button",
  template: ` <ng-content></ng-content>`,
})
export class MdElevatedButtonComponent extends MdButtonComponent {}
