import {Component, signal, WritableSignal} from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {

  // counter = WritableSignal<number>(0);
  counter: WritableSignal<number>= signal<number>(0);


  constructor() {
    this.counter.set(5);
  }

  onIncrement() {
    this.counter.update(value => value + 1);
  }

  onDecrement() {
    this.counter.update(value => value - 1);
  }
}
