import {
    ElementRef,
    Renderer2
} from '@angular/core';

import { Constructor } from './constructor';

export type ThemePalette = 'primary' | 'accent' | 'warn' | undefined;

export interface CanColor {
	color: ThemePalette;
}

export interface HasRenderer {
	_renderer: Renderer2;
	_elementRef: ElementRef;
}

export function mixinColor<T extends Constructor<HasRenderer>>(base: T, defaultColor?: ThemePalette)
    : Constructor<CanColor> & T {
        return class extends base {
            private _color?: ThemePalette;

            get color(): ThemePalette {
                return this._color;
            }

            set color(value: ThemePalette) {
                const colorPalette = value || defaultColor;

                if (colorPalette !== this._color) {
                    if (this._color)
                        this._renderer.removeClass(this._elementRef.nativeElement, `${this._color}`);

                    if (colorPalette)
                        this._renderer.addClass(this._elementRef.nativeElement, `${colorPalette}`);

                    this._color = colorPalette;
                }
            }

            constructor(...args: any[]) {
                super(...args);

                this.color = defaultColor;
            }
        };
}
