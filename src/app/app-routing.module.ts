import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutChildOneComponent } from './about/about-child-one/about-child-one.component';
import { AboutChildTwoComponent } from './about/about-child-two/about-child-two.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
    children: [
      {
        path: 'about-child-1', component: AboutChildOneComponent
      },
      {
        path: 'about-child-2', component: AboutChildTwoComponent
      }
    ]
  },
  {
    path: 'header', component: HeaderComponent,
  },
  {
    path: 'contact', component: ContactComponent,
  },
  {
    path: 'users', component: UsersComponent,
  },
  {
    path: '404', component: NotfoundComponent,
  },
  {
    path: '**', redirectTo: '/404' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
