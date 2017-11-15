import {
    ElementRef,
    Renderer2
} from '@angular/core';

import { Constructor }           from './constructor';
import { HasRenderer }           from './color';
import { coerceBooleanProperty } from '../../cdk/coercion';

export interface CanBlock {
	block: boolean;
}

export function mixinBlock<T extends Constructor<HasRenderer>>(base: T, defaultValue: boolean = false)
    : Constructor<CanBlock> & T {
        return class extends base {
            private _isBlock: boolean = false;

            get block() {
                return this._isBlock;
            }

            set block(value: any) {
                value = coerceBooleanProperty(value);

                if (value !== this._isBlock) {
                    if (this._isBlock)
                        this._renderer.removeClass(this._elementRef.nativeElement, 'block');

                    if (value)
                        this._renderer.addClass(this._elementRef.nativeElement, 'block');

                    this._isBlock = value;
                }
            }

            constructor(...args: any[]) {
                super(...args);

                this.block = defaultValue;
            }
        };
}
