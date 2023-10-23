import "@material/web/checkbox/checkbox";

import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  NgZone,
  Renderer2,
  inject,
} from "@angular/core";
import { coerceBooleanProperty } from "../../utils/coercion";
import { provideValueAccessor } from "../../utils/value-accessor";

import type { MdCheckbox } from "@material/web/checkbox/checkbox";

@Component({
  standalone: true,
  selector: "md-checkbox",
  template: ` <ng-content></ng-content>`,
  inputs: [
    { name: "checked", transform: coerceBooleanProperty },
    { name: "disabled", transform: coerceBooleanProperty },
    { name: "indeterminate", transform: coerceBooleanProperty },
    { name: "value" },
    { name: "name" },
  ],
  host: {
    "(change)": "onChange($event.target.checked)",
    "(blur)": "onTouched()",
  },
  providers: [provideValueAccessor(MdCheckboxComponent)],
})
export class MdCheckboxComponent {
  private el: MdCheckbox = inject(ElementRef).nativeElement;
  private ngZone = inject(NgZone);
  private cdRef = inject(ChangeDetectorRef);

  constructor() {
    this.cdRef.detach();
  }

  get checked() {
    return this.el.checked;
  }
  set checked(v) {
    this.ngZone.runOutsideAngular(() => {
      this.el.checked = v;
    });
  }

  get disabled() {
    return this.el.disabled;
  }
  set disabled(v) {
    this.ngZone.runOutsideAngular(() => {
      this.el.disabled = coerceBooleanProperty(v);
    });
  }

  get indeterminate() {
    return this.el.indeterminate;
  }
  set indeterminate(v) {
    this.ngZone.runOutsideAngular(() => {
      this.el.indeterminate = v;
    });
  }

  get value() {
    return this.el.value;
  }
  set value(v: string) {
    this.ngZone.runOutsideAngular(() => {
      this.el.value = v;
    });
  }

  get name() {
    return this.el.name;
  }
  set name(v: string) {
    this.ngZone.runOutsideAngular(() => {
      this.el.name = v;
    });
  }

  /* Control Value Accessor */
  private renderer = inject(Renderer2);

  onChange = (_v: boolean) => {};
  onTouched = () => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(value: boolean) {
    this.renderer.setProperty(this.el, "checked", value);
  }

  setDisabledState(isDisabled: boolean) {
    this.renderer.setProperty(this.el, "disabled", isDisabled);
  }
}
