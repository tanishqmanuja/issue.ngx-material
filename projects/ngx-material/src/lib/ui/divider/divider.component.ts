import "@material/web/divider/divider.js";

import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  NgZone,
  inject,
} from "@angular/core";
import { MdDivider } from "@material/web/divider/divider.js";
import { coerceBooleanProperty } from "../../utils/coercion";

@Component({
  standalone: true,
  selector: "md-divider",
  template: ` <ng-content></ng-content>`,
  inputs: [
    { name: "inset", transform: coerceBooleanProperty },
    { name: "insetStart", transform: coerceBooleanProperty },
    { name: "insetEnd", transform: coerceBooleanProperty },
  ],
})
export class MdDividerComponent {
  private el: MdDivider = inject(ElementRef).nativeElement;
  private ngZone = inject(NgZone);
  private cdRef = inject(ChangeDetectorRef);

  constructor() {
    this.cdRef.detach();
  }

  get inset() {
    return this.el.inset;
  }
  set inset(v) {
    this.ngZone.runOutsideAngular(() => {
      this.el.inset = v;
    });
  }

  get insetStart() {
    return this.el.insetStart;
  }
  set insetStart(v) {
    this.ngZone.runOutsideAngular(() => {
      this.el.insetStart = v;
    });
  }

  get insetEnd() {
    return this.el.insetEnd;
  }
  set insetEnd(v) {
    this.ngZone.runOutsideAngular(() => {
      this.el.insetEnd = v;
    });
  }
}
