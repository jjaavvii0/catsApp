import { Component, OnInit } from '@angular/core';
import { Cat } from 'src/app/shared/interfaces/cat.interface';
import { CatService } from 'src/app/shared/services/cat.service';

@Component({
  selector: 'app-cats-list',
  templateUrl: './cats-list.component.html',
  styleUrls: ['./cats-list.component.scss']
})
export class CatsListComponent implements OnInit {

  catsLimit:number = 12;
  constructor(public catSvc: CatService) { }

  ngOnInit(): void {
    this.getCatsFromService();

  }
  private getCatsFromService():void{
    this.catSvc.searchAllCats(this.catsLimit).subscribe((res:any)=>{
        this.catSvc.cats = [...this.catSvc.cats, ...res]
    })

  }
  getDetails(id:string):void{
    this.catSvc.searchOneCat(id);
  }
}
