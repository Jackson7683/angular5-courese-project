import { Directive, OnInit, HostListener, HostBinding, ElementRef, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appDropDown]'
})
export class AppDropDownDirective implements OnInit {
    isDropDownActive: boolean;

    constructor(private elemRef: ElementRef, private renderer: Renderer2){}

    @HostListener('click') onclick(event: Event) {
        this.isDropDownActive = !this.isDropDownActive;
        if(this.isDropDownActive)
            this.renderer.addClass(this.elemRef.nativeElement, 'open');
        else
            this.renderer.removeClass(this.elemRef.nativeElement, 'open');
    }

    ngOnInit() {
        this.isDropDownActive = false;
    }
}