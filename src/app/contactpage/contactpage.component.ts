import { Component, inject } from '@angular/core';
import {CommonModule} from '@angular/common';

import { DynamicFormComponent } from '../dynamic-form/dynamic-form.component';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-contactpage',
  standalone: true,
  imports: [DynamicFormComponent, CommonModule],
  templateUrl: './contactpage.component.html',
  styleUrl: './contactpage.component.css'
})
export class ContactpageComponent {
  route: ActivatedRoute = inject(ActivatedRoute);

}
