import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CatsDetailsComponent } from './cats-details/cats-details.component';
import { CatsListComponent } from './cats-list/cats-list.component';



const myComponents = [CatsDetailsComponent, CatsListComponent]
@NgModule({
  declarations: [... myComponents],
  imports: [
    CommonModule, RouterModule
  ],
  exports:[...myComponents]
})
export class CatsModule { }
