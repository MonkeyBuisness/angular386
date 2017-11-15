import {
    ElementRef,
    Renderer2
} from '@angular/core';

import { Constructor } from './constructor';
import { HasRenderer } from './color';

export type ComponentSize = 'mini' | 'small' | 'large' | undefined;

export interface CanResize {
	size: ComponentSize;
}

export function mixinSize<T extends Constructor<HasRenderer>>(base: T, defaultSize?: ComponentSize)
    : Constructor<CanResize> & T {
        return class extends base {
            private _size: ComponentSize = 'small';

            get size() {
                return this._size;
            }

            set size(value: ComponentSize) {
                const componentSize = value || defaultSize;

                if (componentSize !== this._size) {
                    if (this._size)
                        this._renderer.removeClass(this._elementRef.nativeElement, `${this._size}`);

                    if (componentSize)
                        this._renderer.addClass(this._elementRef.nativeElement, `${componentSize}`);

                    this._size = componentSize;
                }
            }

            constructor(...args: any[]) {
                super(...args);

                this.size = defaultSize;
            }
        };
}
