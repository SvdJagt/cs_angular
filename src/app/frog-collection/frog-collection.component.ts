import { Component, Input } from '@angular/core';
import { Froginfo } from '../froginfo';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-frog-collection',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './frog-collection.component.html',
  styleUrl: './frog-collection.component.css'
})
export class FrogCollectionComponent {
  @Input() frogInfo!: Froginfo;
}
