import "@material/web/button/tonal-button.js";
import { Component } from "@angular/core";
import { MdButtonComponent } from "./internal/button.component";

@Component({
  standalone: true,
  selector: "md-tonal-button",
  template: ` <ng-content></ng-content>`,
})
export class MdTonalButtonComponent extends MdButtonComponent {}
