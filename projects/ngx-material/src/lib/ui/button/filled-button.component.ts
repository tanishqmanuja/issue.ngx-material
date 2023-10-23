import "@material/web/button/filled-button.js";
import { Component } from "@angular/core";
import { MdButtonComponent } from "./internal/button.component";

@Component({
  standalone: true,
  selector: "md-filled-button",
  template: ` <ng-content></ng-content>`,
})
export class MdFilledButtonComponent extends MdButtonComponent {}
