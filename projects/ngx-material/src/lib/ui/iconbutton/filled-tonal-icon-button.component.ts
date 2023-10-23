import "@material/web/iconbutton/filled-tonal-icon-button.js";

import { Component } from "@angular/core";
import { MdIconButtonComponent } from "./icon-button.component";
import { provideValueAccessor } from "../../utils/value-accessor";

@Component({
  standalone: true,
  selector: "md-filled-tonal-icon-button",
  template: `<ng-content></ng-content>`,
  providers: [provideValueAccessor(MdFilledTonalIconButtonComponent)],
})
export class MdFilledTonalIconButtonComponent extends MdIconButtonComponent {}
