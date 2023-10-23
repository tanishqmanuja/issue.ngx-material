import "@material/web/list/list-item";

import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  NgZone,
  inject,
} from "@angular/core";
import type { ListItemType, MdListItem } from "@material/web/list/list-item";
import { coerceBooleanProperty } from "../../utils/coercion";

@Component({
  standalone: true,
  selector: "md-list-item",
  template: ` <ng-content></ng-content>`,
  inputs: [
    { name: "disabled", transform: coerceBooleanProperty },
    { name: "type" },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MdListItemComponent {
  private el: MdListItem = inject(ElementRef).nativeElement;
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

  get type() {
    return this.el.type;
  }
  set type(v: ListItemType) {
    this.ngZone.runOutsideAngular(() => {
      this.el.type = v;
    });
  }
}
