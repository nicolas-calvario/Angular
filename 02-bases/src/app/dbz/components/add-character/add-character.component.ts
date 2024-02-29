import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-add-character',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddCharacterComponent { }
