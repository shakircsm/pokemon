import { ViewportScroller } from '@angular/common';
import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { PokeMon } from '../poke-mon';


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent implements OnInit{
  @Input() poklist!: PokeMon[];
  limit:number=5;
  selectedPoke:PokeMon | null | undefined;
  class:string='pokemon-thumbnail';
  key: string | undefined;
 constructor(private vps:ViewportScroller){
  if (this.poklist) {
    //this.poklist = this.poklist.slice(0, 5);
  }
 }

 ngOnInit() {
   this.loadMore();
   this.vps.scrollToPosition([0, document.body.scrollHeight]);
 }
 
 loadMore() {
  this.limit += 5;
  // Scroll to the bottom of the viewport
  setTimeout(() =>{
    this.vps.scrollToAnchor('bottomAnchor');

  },100)
  
}
@HostListener('document:keydown', ['$event'])
handleKeyboardEvent(event: KeyboardEvent) { 
  this.key = event.key;
 if(this.key=='ArrowRight')
  {
    console.log("Right pressed");
    this.next();

  }
  if(this.key=='ArrowLeft')
    {
      console.log("Left pressed");
      this.previous();
  
    }
}
openit(pk:PokeMon){
  if(this.selectedPoke==pk)
    {
      this.selectedPoke=null;
    }else{
      this.selectedPoke=pk;
    }
}
next(){
  if(this.selectedPoke)
    {
      let index = this.poklist.indexOf(this.selectedPoke); // Returns 2
      index++;
      this.selectedPoke=this.poklist[index]
    }
}
previous(){
  if(this.selectedPoke)
    {
      let index = this.poklist.indexOf(this.selectedPoke); // Returns 2
      index--;
      this.selectedPoke=this.poklist[index]
    }
}


  

}
