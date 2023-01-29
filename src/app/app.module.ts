import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AkjFishComponent } from './akj-fish/akj-fish.component';
import { AkjUserListComponent } from './akj-user-list/akj-user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AkjFishComponent,
    AkjUserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
