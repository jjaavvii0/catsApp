import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatsListComponent } from './cats-list.component';

const routes: Routes = [{ path: '', component: CatsListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatsListRoutingModule { }
