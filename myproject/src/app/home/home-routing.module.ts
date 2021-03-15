import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPage } from '../login/login.page';
import { SignupPage } from '../signup/signup.page';
import { WelcomePage } from '../welcome/welcome.page';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'signup',
    component: SignupPage,
  },
  {
    path: 'login',
    component: LoginPage,
  },
  {
    path: 'welcome',
    component: WelcomePage,
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
