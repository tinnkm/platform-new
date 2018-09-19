import { RestDataSource } from './../../http/rest.dataource';
import { Slider } from './../../models/Slider';
import { Component, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';
// 防止插件报错
declare var $: any;
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {


  public sliders: Slider[] = [];
  constructor(private mainService: MainService, private restDataSource: RestDataSource) {
  }

  getSliders() {
    console.log('slider');
    this.sliders = this.mainService.getSliders();
  }


  ngOnInit() {
    console.log("ss");
    // this.getSliders();
    this.restDataSource.getSliders().subscribe(data => this.sliders = data);

  }

}
