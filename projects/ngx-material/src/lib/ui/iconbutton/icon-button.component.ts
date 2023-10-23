import "@material/web/iconbutton/icon-button";

import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  NgZone,
  Renderer2,
  inject,
} from "@angular/core";
import { ControlValueAccessor } from "@angular/forms";
import { provideValueAccessor } from "../../utils/value-accessor";
import { coerceBooleanProperty } from "../../utils/coercion";
import type { MdIconButton } from "@material/web/iconbutton/icon-button";

type LinkTarget = "_blank" | "_parent" | "_self" | "_top";

@Component({
  standalone: true,
  selector: "md-icon-button",
  template: `<ng-content></ng-content>`,
  inputs: [
    { name: "selected", transform: coerceBooleanProperty },
    { name: "disabled", transform: coerceBooleanProperty },
    { name: "toggle", transform: coerceBooleanProperty },
    { name: "href" },
    { name: "target" },
  ],
  host: {
    "(change)": "onChange($event.target.selected)",
    "(blur)": "onTouched()",
  },
  providers: [provideValueAccessor(MdIconButtonComponent)],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MdIconButtonComponent implements ControlValueAccessor {
  private el: MdIconButton = inject(ElementRef).nativeElement;
  private ngZone = inject(NgZone);
  private cdRef = inject(ChangeDetectorRef);

  constructor() {
    this.cdRef.detach();
  }

  get disabled() {
    return this.el.disabled;
  }
  set disabled(v) {
    this.ngZone.runOutsideAngular(() => {
      this.el.disabled = v;
    });
  }

  get selected() {
    return this.el.selected;
  }
  set selected(v) {
    this.ngZone.runOutsideAngular(() => {
      this.el.selected = v;
    });
  }

  get toggle() {
    return this.el.toggle;
  }
  set toggle(v) {
    this.ngZone.runOutsideAngular(() => {
      this.el.toggle = v;
    });
  }

  get href() {
    return this.el.href;
  }
  set href(v: string) {
    this.ngZone.runOutsideAngular(() => {
      this.el.href = v;
    });
  }

  get target() {
    return this.el.target;
  }
  set target(v: "" | LinkTarget) {
    this.ngZone.runOutsideAngular(() => {
      this.el.target = v;
    });
  }

  /* Control Value Accessor */
  private renderer = inject(Renderer2);

  onChange = (v: boolean) => {};
  onTouched = () => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(value: boolean) {
    this.renderer.setProperty(this.el, "selected", value);
  }

  setDisabledState(isDisabled: boolean) {
    this.renderer.setProperty(this.el, "disabled", isDisabled);
  }
}
