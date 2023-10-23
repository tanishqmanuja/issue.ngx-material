import "@material/web/button/outlined-button.js";
import { Component } from "@angular/core";
import { MdButtonComponent } from "./internal/button.component";

@Component({
  standalone: true,
  selector: "md-outlined-button",
  template: ` <ng-content></ng-content>`,
})
export class MdOutlinedButtonComponent extends MdButtonComponent {}
