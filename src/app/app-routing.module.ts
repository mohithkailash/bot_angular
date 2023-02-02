import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BotrunComponent } from './botrun/botrun.component';
import { CreatecompComponent } from './createcomp/createcomp.component';


const routes: Routes = [
  {
    component:CreatecompComponent,
    path:'create'
  },
  {
    component:BotrunComponent,
    path:'create/botrun'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
