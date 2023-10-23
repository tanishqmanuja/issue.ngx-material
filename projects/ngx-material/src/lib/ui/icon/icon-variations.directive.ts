import { Directive, inject, ElementRef, signal, effect } from "@angular/core";
import type { MdIcon } from "@material/web/icon/icon";
import {
  NumberInput,
  coerceNumberProperty,
  OptionalStringInput,
} from "../../utils/coercion";

const mdIconFontMap = {
  rounded: "Material Symbols Rounded",
  sharp: "Material Symbols Sharp",
  outlined: "Material Symbols Outlined",
} as const;

export type MdIconVariations = {
  fill: number;
  wght: 100 | 200 | 300 | 400 | 500 | 600 | 700;
  grad: number;
  opsz: number;
};

@Directive({
  standalone: true,
  selector: "md-icon[fill],md-icon[font]",
  inputs: ["fill", "font", "wght", "grad", "opsz"],
})
export class MdIconVariationsDirective {
  private el: MdIcon = inject(ElementRef).nativeElement;
  private readonly variations = signal<Partial<MdIconVariations>>({});

  set fill(v: NumberInput) {
    this.variations.update(it =>
      Object.assign(it, { fill: coerceNumberProperty(v, 1) })
    );
  }

  set wght(v: NumberInput) {
    this.variations.update(it =>
      Object.assign(it, { wght: coerceNumberProperty(v, 400) })
    );
  }

  set grad(v: NumberInput) {
    this.variations.update(it =>
      Object.assign(it, { grad: coerceNumberProperty(v, 1) })
    );
  }

  set opsz(v: NumberInput) {
    this.variations.update(it =>
      Object.assign(it, { opsz: coerceNumberProperty(v, 1) })
    );
  }

  set font(v: OptionalStringInput<keyof typeof mdIconFontMap>) {
    if (!v || !Object(mdIconFontMap).hasOwnProperty(v)) return;
    this.el.style.setProperty("--md-icon-font", mdIconFontMap[v]);
  }

  constructor() {
    effect(() => {
      let variationSettings = "";
      const v = this.variations();

      if (v.fill) {
        variationSettings += `'FILL' ${this.variations().fill}`;
      }

      if (v.wght) {
        variationSettings += `'wght' ${this.variations().wght}`;
      }

      if (v.grad) {
        variationSettings += `'GRAD' ${this.variations().grad}`;
      }

      if (v.opsz) {
        variationSettings += `'opsz' ${this.variations().opsz}`;
      }

      this.el.style.setProperty("font-variation-settings", variationSettings);
    });
  }
}
