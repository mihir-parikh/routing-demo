import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Users module has its own router & routing configuration
const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
