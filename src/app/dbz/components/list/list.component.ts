import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { Character } from '../../interfaces/character.interfaces';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {


  @Input()
  public characterList: Character [] = [{

    name: 'trunks',
    power:200
  }]

  @Output()
  public onDelete: EventEmitter<number>= new EventEmitter();





  onDeleteCharacter(index: number):void {
    //TODO
    console.log(index)
    this.onDelete.emit(index);
  }

}
