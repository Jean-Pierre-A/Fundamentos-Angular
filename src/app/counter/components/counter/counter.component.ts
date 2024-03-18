import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `

<h3> Counter: {{ number }} </h3>
<button (click)="increseBy(1)">+1</button>
<button (click)="reset()">Reset</button>
<button (click)="increseBy(-1)">-1</button>

  `,
})
export class CounterComponent {

  title = "Mi segunda App";
  number = 10;

  increseBy(value:number):void {
    this.number += value;
  }

  reset(){
    this.number = 10;
  }


}
