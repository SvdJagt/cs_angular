import { Component, OnInit, inject  } from '@angular/core';
import {CommonModule} from '@angular/common';
import { FrogCollectionComponent } from '../frog-collection/frog-collection.component';
import { Froginfo } from '../froginfo';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FrogCollectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent  implements OnInit {
  data: any;
  frogInfoList: Froginfo[] = [];
  filteredFrogList : Froginfo[] = []; 
  route: ActivatedRoute = inject(ActivatedRoute);
  frogSearch: string = "";


  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAllFrogInfo().subscribe(response => {
      this.frogInfoList = response;
      this.filteredFrogList = this.frogInfoList;
      

      console.log(this.frogInfoList);

      this.frogSearch = (this.route.snapshot.params['search']);
      if (this.frogSearch) {
        this.frogSearch = this.frogSearch.substring(1);
        this.filterResults(this.frogSearch);
      }
    });

  }


  public filterResults(text: string) {
    if (!text) {
      this.filteredFrogList = this.frogInfoList;
      return;
    }
    this.filteredFrogList = this.frogInfoList.filter((frogInfo) =>
      frogInfo?.location.toLowerCase().includes(text.toLowerCase()),
    );
  }

  

}

