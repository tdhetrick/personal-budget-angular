import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path : '',
    component: HomepageComponent,
    pathMatch: 'full',
    data: { breadcrumbs: 'Home' }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { breadcrumbs: 'About' }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { breadcrumbs: 'Login' }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { breadcrumbs: 'Contact' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
