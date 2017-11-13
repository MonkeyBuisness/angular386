import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//import { PlatformModule } from '../platform';
import {
    CdkMonitorFocus,
    FOCUS_MONITOR_PROVIDER } from './focus-monitor';

@NgModule({
    imports: [
        CommonModule,
        //PlatformModule
    ],
    declarations: [CdkMonitorFocus],
    exports: [CdkMonitorFocus],
    providers: [
        FOCUS_MONITOR_PROVIDER,
    ]
})
export class A11yModule {}