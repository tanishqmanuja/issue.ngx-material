import "@material/web/iconbutton/filled-icon-button.js";

import { ChangeDetectionStrategy, Component } from "@angular/core";
import { MdIconButtonComponent } from "./icon-button.component";
import { provideValueAccessor } from "../../utils/value-accessor";

@Component({
  standalone: true,
  selector: "md-filled-icon-button",
  template: `<ng-content></ng-content>`,
  providers: [provideValueAccessor(MdFilledIconButtonComponent)],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MdFilledIconButtonComponent extends MdIconButtonComponent {}
