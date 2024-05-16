import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { PokeMon } from '../poke-mon';

@Component({
  selector: 'app-pokemon-thumbnail',
  templateUrl: './pokemon-thumbnail.component.html',
  styleUrl: './pokemon-thumbnail.component.css'
})
export class PokemonThumbnailComponent {
  @Input() pokedata:any;
  @Input() class:string | undefined;
  @Output() open: EventEmitter<any> = new EventEmitter();
  

  addZero(yourNumber: number | string, length: number): string {
    let num: string = String(yourNumber);
    while (num.length < length) {
        num = '0' + num;
    }
    return num;
}

toggle(pk:PokeMon){
  this.open.emit(pk);
  console.log(pk)
}

}
