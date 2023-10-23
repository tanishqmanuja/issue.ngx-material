import "@material/web/button/text-button.js";
import { Component } from "@angular/core";
import { MdButtonComponent } from "./internal/button.component";

@Component({
  standalone: true,
  selector: "md-text-button",
  template: ` <ng-content></ng-content>`,
})
export class MdTextButtonComponent extends MdButtonComponent {}
