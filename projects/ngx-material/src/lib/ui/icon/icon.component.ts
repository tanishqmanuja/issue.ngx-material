import "@material/web/icon/icon.js";

import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
} from "@angular/core";
import { MdIconVariationsDirective } from "./icon-variations.directive";

@Component({
  standalone: true,
  selector: "md-icon",
  hostDirectives: [
    {
      directive: MdIconVariationsDirective,
      inputs: ["fill", "font", "wght", "grad", "opsz"],
    },
  ],
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MdIconComponent {
  private cdRef = inject(ChangeDetectorRef);

  constructor() {
    this.cdRef.detach();
  }
}
