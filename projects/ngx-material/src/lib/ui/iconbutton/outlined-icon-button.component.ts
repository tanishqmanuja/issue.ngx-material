import "@material/web/iconbutton/outlined-icon-button.js";

import { Component } from "@angular/core";
import { MdIconButtonComponent } from "./icon-button.component";
import { provideValueAccessor } from "../../utils/value-accessor";

@Component({
  standalone: true,
  selector: "md-outlined-icon-button",
  template: ` <ng-content></ng-content>`,
  providers: [provideValueAccessor(MdOutlinedIconButtonComponent)],
})
export class MdOutlinedIconButtonComponent extends MdIconButtonComponent {}
