import { ElementRef } from '@angular/core';

import { Constructor } from './constructor';
import { RendererService } from '../common-behaviors';

export type ThemePalette = 'primary' | 'accent' | 'warn' | undefined;

export interface CanColor {
	color: ThemePalette;
}

export interface HasRenderer {
	_rendererService: RendererService;
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
                        this._rendererService.renderer.removeClass(this._elementRef.nativeElement, `386-${this._color}`);

                    if (colorPalette)
                        this._rendererService.renderer.addClass(this._elementRef.nativeElement, `386-${colorPalette}`);

                    this._color = colorPalette;
                }
            }

            constructor(...args: any[]) {
                super(...args);

                this.color = defaultColor;
            }
        };
}
