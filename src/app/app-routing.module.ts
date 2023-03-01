import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutChildOneComponent } from './about/about-child-one/about-child-one.component';
import { AboutChildTwoComponent } from './about/about-child-two/about-child-two.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';

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
