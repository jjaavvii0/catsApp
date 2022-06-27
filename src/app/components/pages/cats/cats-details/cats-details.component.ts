import { Component, OnInit } from '@angular/core';
import { CatService } from 'src/app/shared/services/cat.service';

@Component({
  selector: 'app-cats-details',
  templateUrl: './cats-details.component.html',
  styleUrls: ['./cats-details.component.scss']
})
export class CatsDetailsComponent implements OnInit {

  constructor(public catSvc: CatService) {
    
  }

  ngOnInit(): void {
    
  }
  removeCat(){
    this.catSvc.selectedCat = null;
  }
  

}
