import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h2>Contador: {{counter}}</h2>
  <button (click)="add()">+1</button>
  <button (click)="del()">-1</button>
  <button (click)="reset(0)">Reset</button>
  <hr>`
})

export class CounterComponent {
  public counter: number = 0;

  add() {
    this.counter++
  }
  del() {
    this.counter--
  }
  reset(value: number) {
    this.counter = value;
  }
}
