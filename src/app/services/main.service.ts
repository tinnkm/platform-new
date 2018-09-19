import { SliderRepository } from './../repository/SliderRepository';
import { Injectable } from '@angular/core';
import { Slider } from '../models/Slider';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private sliderRepository: SliderRepository) {}

  getSliders(): Slider[] {
    return this.sliderRepository.getSliders();
  }
}
