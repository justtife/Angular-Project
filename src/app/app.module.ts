import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatusComponent } from './pages/status/status.component';
import { CallsComponent } from './pages/calls/calls.component';
import { HomeComponent } from './pages/home/home.component';
import { TabComponent } from './component/tab/tab.component';
import { SearchbarComponent } from './component/searchbar/searchbar.component';
import { ChatComponent } from './pages/chat/chat.component';
import { BodyTabComponent } from './component/body-tab/body-tab.component';

@NgModule({
  declarations: [
    AppComponent,
    StatusComponent,
    CallsComponent,
    HomeComponent,
    TabComponent,
    ChatComponent,
    SearchbarComponent,
    BodyTabComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
