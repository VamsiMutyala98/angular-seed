import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AboutChildOneComponent } from './components/about/about-child-one/about-child-one.component';
import { AboutChildTwoComponent } from './components/about/about-child-two/about-child-two.component';
import { StoreModule } from '@ngrx/store';
import { rootReducer } from './reducers';
import { UsersComponent } from './components/users/users.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, HeaderComponent, AboutComponent, ContactComponent, HomeComponent, NotfoundComponent, AboutChildOneComponent, AboutChildTwoComponent, UsersComponent],
  imports: [BrowserModule, AppRoutingModule, StoreModule.forRoot(rootReducer), FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
