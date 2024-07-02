import { Component, Input } from '@angular/core';
import { Todo } from '../todo';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RandomBackgroundDirective } from '../random-background.directive'; // Adjust the path as necessary

@Component({
  selector: 'app-todocollection',
  standalone: true,

  imports: [RouterLink, RouterOutlet, RandomBackgroundDirective],
  templateUrl: './todocollection.component.html',
  styleUrl: './todocollection.component.css'
})
export class TodoCollectionComponent {
  @Input() Todo!: Todo;

  
}
