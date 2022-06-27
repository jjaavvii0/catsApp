import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Cat } from '../interfaces/cat.interface';
import { HttpHeaders } from '@angular/common/http';

import { Namer } from './namer.service'

@Injectable({
  providedIn: 'root'
})
export class CatService {

  headersAPICats = new HttpHeaders()      
    .set('content-type', 'application/json')
    .set('X-Api-Key', environment.APIkey);

  cats:Cat[]=[]
  selectedCat!:Cat | null;
  constructor(private http: HttpClient, private namerService:Namer) {

  }
  searchAllCats(limit = 12){
    
    return this.http.get<Cat[]>(`${environment.baseUrlAPI}/?limit=${limit}`,{ 'headers': this.headersAPICats })
  }
  searchOneCat(id:string){
    let objIndex = this.cats.findIndex((obj => obj.id == id));
    let foundedCat = this.cats[objIndex];

    foundedCat.clics = (foundedCat.clics === undefined) ? 1 : (foundedCat.clics+1)
    foundedCat.nombre = (foundedCat.nombre === undefined) ? this.namerService.generateName() : foundedCat.nombre

    this.selectedCat = foundedCat;
  }


}
