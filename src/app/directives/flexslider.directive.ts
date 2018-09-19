import { RestDataSource } from './../http/rest.dataource';
import { Directive, ElementRef, Input, OnInit, AfterContentInit } from '@angular/core';
// 防止插件报错
declare var $: any;
@Directive({
  selector: '[appFlexslider]'
})
export class FlexsliderDirective implements AfterContentInit {

  @Input() controlNav: boolean;
  @Input() directionNav: boolean;
  @Input() url: string;

  constructor(private el: ElementRef) {
    // $(function).on('load', function () {

    // });
  }

  ngAfterContentInit() {
    console.log('done');
    const that = this;
    // $(function () {
      $(that.el.nativeElement).flexslider({
        controlNav: this.controlNav || false,
        directionNav: this.directionNav || false,
        // initDelay: 5
      });
    // });

  }

}
