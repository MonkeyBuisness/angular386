import {
    Renderer2,
    Injectable
} from '@angular/core';

@Injectable()
export class RendererService {
    constructor(public renderer: Renderer2) {}
}