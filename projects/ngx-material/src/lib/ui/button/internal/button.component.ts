import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  NgZone,
  inject,
} from "@angular/core";

import type { Button } from "@material/web/button/internal/button";
import { coerceBooleanProperty } from "../../../utils/coercion";

type LinkTarget = "_blank" | "_parent" | "_self" | "_top";

@Component({
  template: ` <ng-content></ng-content>`,
  inputs: [
    { name: "disabled", transform: coerceBooleanProperty },
    { name: "trailingIcon", transform: coerceBooleanProperty },
    { name: "hasIcon", transform: coerceBooleanProperty },
    { name: "href" },
    { name: "target" },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MdButtonComponent {
  private el: Button = inject(ElementRef).nativeElement;
  private ngZone = inject(NgZone);
  private cdRef = inject(ChangeDetectorRef);

  constructor() {
    this.cdRef.detach();
  }

  @Input()
  set disabled(v) {
    this.ngZone.runOutsideAngular(() => {
      this.el.disabled = v;
    });
  }
  get disabled() {
    return this.el.disabled;
  }

  set trailingIcon(v) {
    this.ngZone.runOutsideAngular(() => {
      this.el.trailingIcon = v;
    });
  }
  get trailingIcon() {
    return this.el.trailingIcon;
  }

  set hasIcon(v) {
    this.ngZone.runOutsideAngular(() => {
      this.el.hasIcon = v;
    });
  }
  get hasIcon() {
    return this.el.hasIcon;
  }

  set href(v) {
    this.ngZone.runOutsideAngular(() => {
      this.el.href = v;
    });
  }
  get href() {
    return this.el.href;
  }

  set target(v: "" | LinkTarget) {
    this.ngZone.runOutsideAngular(() => {
      this.el.target = v;
    });
  }
  get target() {
    return this.el.target;
  }
}
