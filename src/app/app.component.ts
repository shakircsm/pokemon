import { Component, HostListener, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { PokeapiService } from './pokeapi.service';
import pokemon from 'pokemon';
import { PokeMon } from './poke-mon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnChanges,OnInit {
  technologyForm!: FormGroup ;
  title="CSM"+((Math.random()*100)).toString();
  getpokemon:any;
  key: string | undefined;
   
  constructor(private fb: FormBuilder,private pokeapiService: PokeapiService ) {
  }

  ngOnInit(): void {
    this.technologyForm = this.fb.group({
      developerName: ['', [Validators.required, Validators.minLength(3)]],
      skills: this.fb.array(["php","java"])
    });
    this.pokeapiService.getAllPokemon("").subscribe(data => {
      this.getpokemon = data as PokeMon;
      console.log(this.getpokemon);
    });
  }

  ngOnChanges():void{
    console.log("chnages");
  }

  get skillsFormArray() {
    return this.technologyForm.get('skills') as FormArray;
  }
  addSkill() {
    if (this.skillsFormArray.length < 10) {
      this.skillsFormArray.push(this.fb.control(''));
    }
    
  }
  pokeDetail(name:string){
    return pokemon.getId(name);
  }

   

  
   
  
}


