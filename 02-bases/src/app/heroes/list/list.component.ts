import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public herosName: string[] = ['Spiderman', 'Ironman', 'Hulk'];
  public deleteHero?: string;
  revomeLastHero():void{
    this.deleteHero = this.herosName.pop();
  }

}
