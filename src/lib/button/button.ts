import { FocusMonitor } from '../cdk/a11y/focus-monitor';
import { Platform } from '../cdk/platform/platform';
import {
    Component,
    Directive,
    ElementRef,
    OnDestroy,
    ViewEncapsulation,
    ChangeDetectionStrategy
} from '@angular/core';

import {
    CanColor,
    CanDisable,
    mixinColor,
    mixinDisabled,
    RendererService
} from '../core';

@Directive({
    selector: 'button[button386], a[button386]',
    host: {
        'class': 'btn'
    }
})
export class Button386CssStyler {}

@Directive({
    selector: 'button[button386-icon], a[button386-icon]',
    host: {
        'class': 'btn-icon'
    }
})
export class Button386IconCssStyler {}

export class Button386Base {

    constructor(
        public _rendererService: RendererService,
        public _elementRef: ElementRef) {}
}
export const _Button386MixinBase = mixinColor(mixinDisabled(Button386Base));

/**
 * Button386 design.
 */
@Component({
    moduleId: module.id,
    selector: `button[button386],
               button[button386-icon]`,
    exportAs: 'button386',
    host: {
        '[disabled]': 'disabled || null',
    },
    templateUrl: 'button.html',
    styleUrls: ['button1.css'],
    inputs: [
        'disabled',
        'color'
    ],
    encapsulation: ViewEncapsulation.None,
    preserveWhitespaces: false,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [RendererService]
})
export class Button386 extends _Button386MixinBase implements OnDestroy, CanDisable, CanColor {
    private _isIconButton: boolean = this._hasHostAttributes('button386-icon');

    constructor(
        public rendererService: RendererService,
        public elementRef: ElementRef,
        private _platform: Platform,
        private _focusMonitor: FocusMonitor) {
        super(rendererService, elementRef);

        this._focusMonitor.monitor(this._elementRef.nativeElement, true);
    }

    public focus(): void {
        this._getHostElement().focus();
    }

    private _getHostElement() {
        return this._elementRef.nativeElement;
    }

    private _hasHostAttributes(...attributes: string[]) {
        if (!this._platform.isBrowser)
            return false;

        return attributes.some(attribute => this._getHostElement().hasAttribute(attribute));
    }

    ngOnDestroy() {
        this._focusMonitor.stopMonitoring(this._elementRef.nativeElement);
    }
}