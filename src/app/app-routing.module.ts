import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { View2Component } from './Components/view2/view2.component';

const routes: Routes = [{path:'',redirectTo:'Gantt',pathMatch:'full'},
{path:'Gantt',component:View2Component}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
