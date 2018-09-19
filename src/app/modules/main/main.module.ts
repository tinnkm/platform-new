import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { FlexsliderDirective } from '../../directives/flexslider.directive';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MainComponent, FlexsliderDirective],
  exports: [MainComponent]
})
export class MainModule { }
