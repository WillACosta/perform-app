import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashBoardUserModule } from './features/dashboard-user/dashboard-user.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, DashBoardUserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
