import { NgModule, Renderer2, Injectable, ElementRef, NgZone } from '@angular/core';

import {
    Platform,
    FocusMonitor
} from '../cdk';

import {
    Button386,
    Button386CssStyler,
    Button386IconCssStyler
} from './button';

@NgModule({
    declarations: [
        Button386,
        Button386CssStyler,
        Button386IconCssStyler
    ],
    providers: [
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