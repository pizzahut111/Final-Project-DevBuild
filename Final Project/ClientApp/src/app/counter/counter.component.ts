import { Component } from '@angular/core';
import { Park } from '../Park';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public currentCount = 0;
  
  public incrementCounter() {
    this.currentCount++;
  }
}
