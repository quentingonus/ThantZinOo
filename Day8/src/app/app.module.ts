import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import { ChildComponent } from './components/child/child.component';
import { MessagesComponent } from './components/messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    ChildComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
