import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name : string ='Iroman'
  public age : number = 30
  get capitalizedName():string{
    return 'hola mundo'.toUpperCase()
  }
  getHeroDescription():string{
    return `${this.name} - ${this.age}`
  }
  changeHero(){
    this.name= "Spideman"
  }
  changeAge(){
    this.age= 20
  }

}
