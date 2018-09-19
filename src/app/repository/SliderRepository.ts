import { Injectable } from '@angular/core';
import { Slider } from '../models/Slider';
import { RestDataSource } from '../http/rest.dataource';
// 防止插件报错
declare var $: any;
@Injectable({
  providedIn: 'root'
})
export class SliderRepository {
  private sliders: Slider[] = [];
  constructor(private restDataSource: RestDataSource) {
    this.restDataSource.getSliders().subscribe(data => {
      this.sliders = data;
    });
  }

  getSliders(): Slider[] {
    return this.sliders;
  }
}
