import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { LoginComponent } from './login/login.component';
import { TodoslistComponent } from './todoslist/todoslist.component';


const routes: Routes = [
  {
    path:'',
    component: LoginComponent
  },
 {
   path:'login',
   component: LoginComponent
 },
 {
   path:'introduction',
   component:IntroductionComponent
 },
 {
  path:'todoslist',
  component:TodoslistComponent
},
 {
  path:'**',
  component:ErrorComponent
 },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
