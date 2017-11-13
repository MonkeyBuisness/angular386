import { NgModule } from '@angular/core';

import { RendererService } from '../core/common-behaviors';
import {
    Platform,
    FocusMonitor
} from '../cdk';

import {
    Button386,
    Button386CssStyler,
    Button386IconCssStyler
} from './button';

export { RendererService } from '../core/common-behaviors';

@NgModule({
    declarations: [
        Button386,
        Button386CssStyler,
        Button386IconCssStyler
    ],
    providers: [
        RendererService,
        Platform,
        FocusMonitor
    ],
    exports: [
        Button386,
        Button386CssStyler,
        Button386IconCssStyler
    ]
})
export class Button386Module {}