import { Injectable } from '@angular/core';

const hasV8BreakIterator = (typeof(Intl) !== 'undefined' && (Intl as any).v8BreakIterator);

@Injectable()
export class Platform {
    public isBrowser: boolean = typeof document === 'object' && !!document;

    public EDGE: boolean = this.isBrowser && /(edge)/i.test(navigator.userAgent);

    public TRIDENT: boolean = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent);

    public BLINK: boolean = this.isBrowser &&
        (!!((window as any).chrome || hasV8BreakIterator) && !!CSS && !this.EDGE && !this.TRIDENT);

    public WEBKIT: boolean = this.isBrowser &&
        /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;

    public IOS: boolean = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) &&
        !(window as any).MSStream;

    public FIREFOX: boolean = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);

    public ANDROID: boolean = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT;

    public SAFARI: boolean = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
}