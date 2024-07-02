import {Component, OnInit, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';

import {FrogsService} from '../frogs.service';
import {DataService} from '../data.service';

import {Froginfo} from '../froginfo';



@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent     implements OnInit{
  route: ActivatedRoute = inject(ActivatedRoute);
  frogsService = inject(FrogsService);
  frogInfo: Froginfo | undefined;
  data: Froginfo[] = []; //any
  
  opinionForm = new FormGroup({
    name: new FormControl(""),
    email: new FormControl(""),
    opinion: new FormControl(""),
  });

    constructor(private dataService: DataService) {}

    
    frogInfoID = parseInt(this.route.snapshot.params['id']);
    
    ngOnInit() {
      // TODO: Change to getting single item from DB instead of selecting from all here. 
      this.dataService.getAllFrogInfo().subscribe(response => {
        this.frogInfo = response[this.frogInfoID];
        console.log(this.frogInfo);
      });
  }

  // TODO: Make opinions go to database, and be requested when loading details page. 
  submitOpinion() {
    this.frogsService .submitOpinion(
      this.opinionForm.value.name ?? '',
      this.opinionForm.value.email ?? '',
      this.opinionForm.value.opinion ?? '',
    );
  }

}
