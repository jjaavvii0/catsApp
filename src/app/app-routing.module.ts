import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  
  { path: 'home', loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule)}, 
  { path: 'cats-list', loadChildren: () => import('./components/pages/cats/cats-list/cats-list.module').then(m => m.CatsListModule) },
  { path: 'cats-details/:id', loadChildren: () => import('./components/pages/cats/cats-details/cats-details.module').then(m => m.CatsDetailsModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


