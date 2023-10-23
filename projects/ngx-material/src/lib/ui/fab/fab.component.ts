import "@material/web/fab/fab";

import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  NgZone,
  inject,
} from "@angular/core";
import type { MdFab, FabSize, FabVariant } from "@material/web/fab/fab";

import { coerceBooleanProperty } from "../../utils/coercion";
import { ProxyCmp } from "../../utils/proxy-cmp";

@ProxyCmp({ inputs: ["variant", "size", "label", "lowered"] })
@Component({
  standalone: true,
  selector: "md-fab",
  template: ` <ng-content></ng-content>`,
  inputs: [
    { name: "size", transform: (v: FabSize) => v },
    { name: "variant", transform: (v: FabVariant) => v },
    { name: "label", transform: (v: string) => v },
    { name: "lowered", transform: coerceBooleanProperty },
  ],
})
export class MdFabComponent {
  protected el: MdFab = inject(ElementRef).nativeElement;
  protected ngZone = inject(NgZone);
  private cdRef = inject(ChangeDetectorRef);

  constructor() {
    this.cdRef.detach();
  }
}
