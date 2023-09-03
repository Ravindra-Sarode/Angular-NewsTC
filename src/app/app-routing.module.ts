import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopheadlineComponent } from './topheadline/topheadline.component';
import { TechComponent } from './tech/tech.component';
import { BusinessComponent } from './business/business.component';

const routes: Routes = [
  {
    path:'',
    component:TopheadlineComponent   //top headlines and Home
  },
  {
    path:'tech',
    component:TechComponent   //top headlines and Home
  },
  {
    path:'buzz',
    component:BusinessComponent   //top headlines and Home
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
