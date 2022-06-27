import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatsDetailsComponent } from './cats-details.component';

const routes: Routes = [{ path: '', component: CatsDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatsDetailsRoutingModule { }
