import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AboutChildOneComponent } from './about/about-child-one/about-child-one.component';
import { AboutChildTwoComponent } from './about/about-child-two/about-child-two.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, AboutComponent, ContactComponent, HomeComponent, NotfoundComponent, AboutChildOneComponent, AboutChildTwoComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
