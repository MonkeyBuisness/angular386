import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { Button386Module } from '../lib';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		Button386Module
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}