import "@material/web/switch/switch";

import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  NgZone,
  Renderer2,
  inject,
} from "@angular/core";
import type { MdSwitch } from "@material/web/switch/switch";
import { ControlValueAccessor } from "@angular/forms";
import { coerceBooleanProperty } from "../../utils/coercion";
import { provideValueAccessor } from "../../utils/value-accessor";

@Component({
  standalone: true,
  selector: "md-switch",
  template: `<ng-content></ng-content>`,
  inputs: [
    { name: "checked", transform: coerceBooleanProperty },
    { name: "disabled", transform: coerceBooleanProperty },
    { name: "selected", transform: coerceBooleanProperty },
    { name: "icons", transform: coerceBooleanProperty },
    { name: "showOnlySelectedIcon", transform: coerceBooleanProperty },
    { name: "value" },
    { name: "name" },
  ],
  host: {
    "(change)": "onChange($event.target.selected)",
    "(blur)": "onTouched()",
  },
  providers: [provideValueAccessor(MdSwitchComponent)],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MdSwitchComponent implements ControlValueAccessor {
  private el: MdSwitch = inject(ElementRef).nativeElement;
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

  get icons() {
    return this.el.icons;
  }
  set icons(v) {
    this.ngZone.runOutsideAngular(() => {
      this.el.icons = v;
    });
  }

  get showOnlySelectedIcon() {
    return this.el.showOnlySelectedIcon;
  }
  set showOnlySelectedIcon(v) {
    this.ngZone.runOutsideAngular(() => {
      this.el.showOnlySelectedIcon = v;
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
    this.renderer.setProperty(this.el, "selected", value);
  }

  setDisabledState(isDisabled: boolean) {
    this.renderer.setProperty(this.el, "disabled", isDisabled);
  }
}
