import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterOutlet, Router, RouterModule } from '@angular/router';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
  //   template: `
    
  // `,
    styleUrl: './app.component.css',
    imports: [HomeComponent, RouterModule, CommonModule],
})

export class AppComponent {
  title = 'frogs';

 constructor(private router: Router) {}
  
 public doSearch(text: string): void {
  this.router.navigate(["/home/:"+text]);
 }
}


